import React, { Component } from 'react';
import Header from '../components/Header'
import { Container, Content, List, ListItem, Text } from 'native-base';
export default class Settings extends Component {
    render() {
        return (
            <Container>
                <Header title='Configurações'/>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>Account</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Password</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Username</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>Dispositivo</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Tela</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Games</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}