
import React, { Component } from 'react';

import { View } from 'react-native';

import { Container, Header, Title, Content, Button, Fab, IconNB, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';

import styles from './styles';

const randomColor = require('randomcolor'); // import the script

const pratik = require('../../../img/contacts/pratik.png');
const sanket = require('../../../img/contacts/sanket.png');
const megha = require('../../../img/contacts/megha.png');
const atul = require('../../../img/contacts/atul.png');
const saurabh = require('../../../img/contacts/saurabh.png');
const varun = require('../../../img/contacts/varun.png');


const datas = [
  {
    //img: pratik,
    text: 'Chest Press',
    note: 'Its time to build a difference . .',
    time: '15/3',
  },
  {
    //img: sanket,
    text: 'Lat pull down',
    note: 'One needs courage to be happy and smiling all time . . ',
    time: '15/3',
  },
  {
    //img: megha,
    text: 'Shoulder Press',
    note: 'Live a life style that matchs your vision',
    time: '12/3',
  },
  {
    //img: atul,
    text: 'DB Shoulder Shrugs',
    note: 'Failure is temporary, giving up makes it permanent',
    time: '20/3',
  },
  {
    //img: saurabh,
    text: 'Chest Fly',
    note: 'The biggest risk is a missed opportunity !!',
    time: '15/3',
  },
  {
    //img: varun,
    text: 'Bicep curls',
    note: 'Wish I had a Time machine . .',
    time: '15/4',
  },
];

export default class TabOne extends Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() { // eslint-disable-line
    getBgColor = function () {
      let color = randomColor({ luminosity: 'light' }); // a hex code for an attractive color
      return color;
    }
    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem avatar>
                <Left>
                  <View style={[styles.containerCentered, styles.row]}>
                    <View style={[styles.avatarContainer, styles.containerCentered, { backgroundColor: getBgColor() }]}>
                      <Text style={styles.avatarText}>{data
                        .text
                        .charAt(0)
                        .toUpperCase()}</Text>
                    </View>
                  </View>
                  {/*<Thumbnail source={data.img} />*/}
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>{data.note}</Text>
                </Body>
                <Right>
                  <Text note>{data.time}</Text>
                </Right>
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}
