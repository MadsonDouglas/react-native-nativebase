import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
export default class Processos extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Icon active name="home" />
                            <Text>Processo 1</Text>
                            <Right style={{display:'flex', flexDirection: 'row', justifyContent:'flex-end' }}>
                                <Icon style={{marginRight: 10}} name="arrow-forward"></Icon>
                                <Icon name="share" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Icon active name="home" />
                            <Text>Processo 2</Text>
                            <Right style={{display:'flex', flexDirection: 'row', justifyContent:'flex-end' }}>
                                <Icon style={{marginRight: 10}} name="arrow-forward"></Icon>
                                <Icon name="share" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Icon active name="home" />
                            <Text>Processo 3</Text>
                            <Right style={{display:'flex', flexDirection: 'row', justifyContent:'flex-end' }}>
                                <Icon style={{marginRight: 10}} name="arrow-forward"></Icon>
                                <Icon name="share" />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}