import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Thumbnail } from 'native-base';
import IconComponent from './icon-component';
import Icon from 'react-native-vector-icons/EvilIcons';


export default class FeedComponent extends React.Component{
  render(){
    return (
      <View style={[{padding:16, backgroundColor:'#fff'}, styles.mb10]}>
          <View style={{flexDirection:'column'}}>
             <View style={{flexDirection:'row'}}>
              
                <Thumbnail style={[styles.profileSize, styles.mr10]}
                source={{uri:this.props.address}}></Thumbnail>           
                <View style={{flexDirection:'column'}}>
                    <Text style={[styles.name]}>{this.props.authorName}</Text>
                    <Text style={[styles.date, {marginTop:10}]}>{this.props.Date}</Text>
                </View>
             </View>
             <Text style={[styles.contextText, styles.mt10]}>{this.props.article}</Text>
             
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Thumbnail square style={[styles.imageSize, styles.mt10]}
                  source={{uri:this.props.image1}}></Thumbnail>
                  <Thumbnail square style={[styles.imageSize, styles.mt10]}
                  source={{uri:this.props.image2}}></Thumbnail>
                  <Thumbnail square style={[styles.imageSize, styles.mt10]}
                  source={{uri:this.props.image3}}></Thumbnail>
            </View>
        
         </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileSize:{
    height:46,
    width:46,

  },
  mr10: {
    marginRight: 10,
  },
  mb10: {
    marginBottom: 10,
  },
  mt10:{
    marginTop:10,
  },
  name:{
    fontSize:18,
    color: '#353535',

  },
  date:{
    fontSize:14,
    color: '#868686',
  },
  contextText:{
    fontSize:14,
    color: '#353535',
    lineHeight:18,
    letterSpacing:0.3,
  },
  imageSize:{
    height:105,
    width:105,
  }




});
  