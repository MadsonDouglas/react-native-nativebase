import React, { Component } from 'react';
import {Body,Right, Title,Icon, Header } from 'native-base';
export default class Cabecalho extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#a55eea' }}>
                <Body style={{marginHorizontal:20}}>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right style={{marginHorizontal:10}} ><Icon name='shuffle' style={{fontSize: 20, color: '#fff'}}/></Right>
            </Header>
        );
    }
}