import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header,Input,Item, Content } from 'native-base';
import IconComponent from './icon-component';


export default class HeaderComponent extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row', backgroundColor:'#FFF', paddingTop:12, height: 120}}> 
        <IconComponent name='Opportunity' color='#86B0DE' iconName='briefcase'/>
        <IconComponent name='Gathering' color='#F5CE77' iconName='users'/>
        <IconComponent name='Story' color='#E86F5B' iconName='video-camera'/>
        <IconComponent name='Help' color='#A6C488' iconName='heart'/>
      </View>
    );
  }
}





