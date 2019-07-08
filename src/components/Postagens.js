import React, { Component } from 'react';
import Logo from '../assets/avatar.jpg'
import Post from '../assets/post.jpg'
import {Dimensions, Image} from 'react-native'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Postagens extends Component {
    render() {
        return (
            <Card style={{width: Dimensions.get('window').width - 20, marginLeft: 10}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={Logo} />
                        <Body>
                            <Text>{this.props.name}</Text>
                            <Text note>{this.props.location}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={Post} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>{this.props.likes} Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>{this.props.comments} Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>{this.props.data}</Text>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}