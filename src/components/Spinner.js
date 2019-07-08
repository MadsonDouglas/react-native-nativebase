import React, { Component } from 'react';
import { Container, Content, Spinner } from 'native-base';
export default class Load extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Spinner color='red' />
        </Content>
      </Container>
    );
  }
}