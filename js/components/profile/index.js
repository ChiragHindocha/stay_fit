
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Container, Header, Title, List, ListItem, Content, Text, H3, Button, Icon, Thumbnail, Footer, FooterTab, Left, Right, Body } from 'native-base';

//simport { openDrawer } from '../../actions/drawer';
import { closeModal } from '../../actions/modal';
import statusBarColor from '../../themes/variables';
import styles from './styles';

const imgOne = require('../../../img/swiper-1.png');
const imgTwo = require('../../../img/swiper-2.png');

const logo = require('../../../img/splashscreen.png');
const cover = require('../../../img/web-cover1.jpg');

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    modalState: React.PropTypes.bool,
    closeModal: React.PropTypes.func,
  }

  /*closeModal() {
    console.log(this.props.modalState);
  };*/

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar
          //hidden={(this.props.drawerState === 'opened' && Platform.OS === 'ios') ? true : false}
          backgroundColor='#F5003D'
        />
        <Header>
          <Left>
            <Button transparent onPress={this.props.closeModal}>
              <Icon name="close" />
            </Button>
          </Left>
          <Body>
            <Title>My Profile</Title>
          </Body>
          <Right />

        </Header>


        <Content padder>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 150, height: 150, borderRadius: 75 }}
              source={cover}
            />
            <Text style={{ marginTop: 20, fontSize: 30, fontWeight: 'bold' }}>Chirag Hindocha</Text>
            <Text style={{ marginTop: 10, marginBottom: 10, fontSize: 16 }}>26 years 56 kg 160 cm</Text>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.2,
            }}
          />

          <List>
            <ListItem >
              <Text>Measurements</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Text>BCA</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Text>Workout History</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Text>Subscriptions</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Text>My Orders</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>

        </Content>

      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
  modalState: state.modal.modalState,
});

export default connect(mapStateToProps, bindAction)(Profile);
