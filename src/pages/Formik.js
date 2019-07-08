import React, { Component } from 'react';
import api from '../services/api'
import Header from '../components/Header'
import Load from '../components/Spinner'
import { Dimensions } from 'react-native'
import { Container, Text, Button, Content, Form, Item, Icon, Input, Label } from 'native-base';

export default class Auth extends Component {
    state = {
        valid: {
            usuario: false,
            userMsg: '',
            senha: false,
            passMsg: ''
        },
        username: '',
        pass: '',
        token: '',
        load: false
    }

    getToken = async () => {

        const { username, pass } = this.state
        const { usuario, senha } = this.state.valid

        if (!(usuario && senha) && (username != '' && pass != '')) {

            this.setState({ load: true })
    
            try {
                var response = await api.post('login', {
                    usuario: username,
                    senha: pass
                })
                setTimeout(() => {
                    this.setState({ load: false })
                }, 3000);

                this.setState({ token: response.data.resultado.token || 'Erro, os dados informados não existem no servidor' })

            } catch (error) {
                this.setState({ load: false, token: 'Erro: por favor, reveja sua conexão com a internet' })
            } finally {

            }
        } else {
            this.setState({ load: false, token: 'Erro: seus dados não estão cumprindo os requisitos' })
        }
    }

    validUsername = (username) => {
        // this.setState({username})
        const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        filter.test(username) ? this.setState({ username, valid: { userMsg: '', usuario: true } }) : this.setState({ username: '', valid: { userMsg: 'username fora do padrão: name@gmail.com' } })
    }

    validPass = (pass) => {
        pass.length >= 5 ? this.setState({ pass, valid: { senha: true, passMsg: '' } }) : this.setState({ pass: '', valid: { passMsg: 'minimo de 5 caracteres' } })
    }

    render() {
        return (
            <Container >
                <Header title='Autenticar' />
                <Content >
                    <Form>
                        <Item success={this.state.valid.usuario} floatingLabel style={{
                            width: Dimensions.get('window').width - 20,
                            marginLeft: 10
                        }}>
                            <Label>Username</Label>
                            <Input onChangeText={username => this.validUsername(username)} />
                        </Item>
                        {this.state.valid.userMsg ? <Label style={{ marginLeft: 30 }}>{this.state.valid.userMsg}</Label> : null}

                        <Item success={this.state.valid.senha} floatingLabel style={{
                            width: Dimensions.get('window').width - 20,
                            marginLeft: 10
                        }}>
                            <Label>Password</Label>
                            <Input onChangeText={pass => this.validPass(pass)} />
                        </Item>

                        {this.state.valid.passMsg ? <Label style={{ marginLeft: 30 }}>{this.state.valid.passMsg}</Label> : null}

                        <Button primary onPress={this.getToken} style={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center', width: Dimensions.get('window').width - 10,
                            marginLeft: 5, marginTop: 20,
                        }} ><Text>Gerar token</Text></Button>
                    </Form>
                    {this.state.load === true ? <Load /> : <Label style={{ marginLeft: 10 }}>{this.state.token}</Label>}
                </Content>
            </Container>
        );
    }
}