import React, { Component } from 'react';
import api from '../services/api'
import Header from '../components/Header'
import Load from '../components/Spinner'
import { Dimensions } from 'react-native'
import { Container, Text, Button, Content, Form, Item, Input, Label } from 'native-base';
export default class Auth extends Component {
    state = {
        username: '',
        pass: '',
        token: '',
        load: false
    }

    getToken = async () => {
        const { username, pass } = this.state
        this.setState({ load: true })
        try {
            var response = await api.post('login', {
                usuario: username,
                senha: pass
            })
            setTimeout(() => {
                this.setState({ load: false })
            }, 3000);

            this.setState({ token: response.data.resultado.token || 'Erro, reveja seus dados' })

        } catch (error) {
            this.setState({ load: false, token: 'Erro: por favor, reveja sua conexão com a internet' })
        } finally {

        }

    }
    render() {
        return (
            <Container >
                <Header title='Autenticar' />

                <Content >
                    <Form>
                        <Item floatingLabel style={{
                            width: Dimensions.get('window').width - 20,
                            marginLeft: 10
                        }}>
                            <Label>Username</Label>
                            <Input onChangeText={username => this.setState({ username })} />
                        </Item>
                        <Item floatingLabel style={{
                            width: Dimensions.get('window').width - 20,
                            marginLeft: 10
                        }}>
                            <Label>Password</Label>
                            <Input onChangeText={pass => this.setState({ pass })} />
                        </Item>
                        <Button primary onPress={this.getToken} style={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center', width: Dimensions.get('window').width - 10,
                            marginLeft: 5, marginTop: 20,
                        }} ><Text>Gerar token</Text></Button>
                    </Form>
                    {this.state.load === true ? <Load /> : <Label>{this.state.token}</Label>}
                </Content>
            </Container>
        );
    }
}