import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header,Input,Item } from 'native-base';
import IconComponent from './icon-component';
import Icon from 'react-native-vector-icons/EvilIcons';
import FeedComponent from './feed-component';


export default class BodyComponent extends React.Component{
  render(){
    return (
      <View>
          <FeedComponent article='Skwachàys Lodge Aboriginal Hotel & Gallery is looking for Artists in Residence. 
                If you’re a practicing Indigenous artist, a self-identified First Nations, Metis, or Inuit, 
                and willing to volunteer 8 hours a month, Skwachàys Lodge wants to hear… Full text'
                authorName='Rena Guan' Date='March 11th, 2018' address='https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/26230743_2214806318746578_1816706111251299598_n.jpg?oh=ca0a30b95eb98a2a1069d168e8f8c138&oe=5B029F56'
                image1='https://cdn.torontolife.com/wp-content/uploads/2017/08/toronto-house-for-sale-53-burnhamthorpe-crescent-1-1200x628.jpg'
                image2='http://attitudes4innovation.com/wp-content/uploads/2015/04/community.jpg'
                image3='http://www.pmhc.nsw.gov.au/files/assets/public/landingpages/aboutus/how-council-works-community-engagement-1140x430.jpg'              
                >
          </FeedComponent>

           <FeedComponent article='I found these really cool pictures from my mom’s collection of old family photos! Check em out.
                          Full text'
                authorName='Hoa Nguyen' Date='Feb 11th, 2018' address='https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/26220030_10208763327198834_6358451040386338518_n.jpg?oh=d061a1d258a3f54ea4f8ef12f6b32e23&oe=5B43D76D'
                image1='http://www.tjapukai.com.au/images/tjapukai-aboriginal-group.jpg?action=thumbnail&width=1500&height=870&algorithm=fill_proportional&format=jpg'
                image2='https://gdb.voanews.com/616652DA-FCD5-4B45-AFAC-3909E74B26D2_cx0_cy8_cw0_w1023_r1_s.jpg'
                image3='https://i.cbc.ca/1.3359953.1458262708!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/aboriginal-trudeau-20151208.jpg'              
                >
          </FeedComponent>
          
          
      </View>

    );
  }
}
  