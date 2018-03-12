import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
import {Router, Actions, Scene} from 'react-native-router-flux'
import HomeComponent from './components/home/home-component';

const Scenes = Actions.create(
  <Scene key="root">
    <Scene key='home' component={HomeComponent} hideNavBar> </Scene>
  </Scene>
)

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Router scenes={Scenes}></Router>
      </Container>
    );
  }
}
