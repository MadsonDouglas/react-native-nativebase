import React, { Component } from 'react';
import Header from '../components/Header'
import Posts from '../components/Postagens'
import { Container, Content } from 'native-base';
export default class CardImageExample extends Component {
    render() {
        return (
            <Container>
                <Header title="Navegar" />
                <Content>
                    <Posts name="Processo Agil"
                        location="Natal - RN"
                        likes="15"
                        comments="4"
                        data="03 de Julho" />
                    <Posts name="Mádson"
                        location="Parazinho - RN"
                        likes="28"
                        comments="9"
                        data="02 de Julho" />
                    <Posts name="João"
                        location="João Câmara - RN"
                        likes="28"
                        comments="7"
                        data="03 de Julho" />
                </Content>
            </Container>
        );
    }
}