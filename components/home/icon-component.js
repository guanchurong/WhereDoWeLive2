import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';

export default class IconComponent extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <Container style={[{alignItems:'center'},styles.ml20]}>
        <Button rounded style={[styles.roundedButton, styles.mb20, {backgroundColor: this.props.color}]} onPress={function(){this.toPage(this.props.pageName)}}>
          <Icon name={this.props.iconName} size={30} color='#fff'/>
        </Button>
        <Text style={[styles.fontSize12, {textAlign: 'center'}]}>{this.props.name}</Text>
      </Container>
    );
  };

  toPage(pageName) {
    Actions.push(pageName);
  }
}

const styles = StyleSheet.create({
  roundedButton: {
    borderRadius: 100,
    height:60,
    width:60,
    justifyContent:'center',
    alignItems:'center',
  },
  ml20: {
    marginLeft: 20,
  },
  mb20: {
    marginBottom: 20,
  },
  fontSize12:{
    fontSize:12,
  }

});



