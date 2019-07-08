import React, { Component } from 'react';
import {Dimensions} from 'react-native'
import Header from '../components/Header'
import { Container, Content, Body, Card, CardItem, Thumbnail, Text, Tabs, Tab } from 'native-base';
import Avatar from '../assets/avatar.jpg'
import { Col, Row, Grid } from 'react-native-easy-grid';

import Sobre from '../components/Sobre'
import Processos from '../components/Processos'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header title='Home' />
                <Content>
                    <Grid>
                        <Col>
                            <CardItem>
                                <Thumbnail source={Avatar} />
                                <Body style={{ marginLeft: 5, marginVertical: 5 }}>
                                    <Text>Processo Ágil</Text>
                                    <Text note>profile</Text>
                                </Body>
                            </CardItem>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <Tabs style={{backgroundColor: '#a55eea',height:Dimensions.get('window').height - 300,  width: Dimensions.get('window').width - 10, marginLeft: 5}}>
                                <Tab heading="Processos" >
                                    <Processos  />
                                </Tab>
                                <Tab heading="Sobre">
                                    <Sobre />
                                </Tab>
                            </Tabs>
                        </Col>
                    </Grid>
                    {/* <Grid>
                        <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
                    </Grid>
                    <Grid>
                        <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
                    </Grid>
                    <Grid>
                        <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
                    </Grid> */}
                </Content>
            </Container>
        );
    }
}