import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Item, Input, Footer } from 'native-base';
import HeaderComponent from './header-component';
import BodyComponent from './body-component';
import Icon from 'react-native-vector-icons/EvilIcons';


export default class HomeComponent extends React.Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded noShadow>
          <Item>
            <Icon name='search' size={26} style={{paddingLeft:10}}/>
            <Input placeholder='Search'/>           
          </Item>     
        </Header>
        <HeaderComponent/>
        <Content style={{marginTop:10}}>
          <BodyComponent />
        </Content>
        
      </Container>
    );
  }
}
