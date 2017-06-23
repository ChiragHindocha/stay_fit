
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, TouchableHighlight, Modal, View } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Thumbnail, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import BasicTab from '../../components/tab/basicTab';
import Attendance from '../../components/attendance';
import Reminder from '../../components/reminder';
import DietPlan from '../../components/dietplan';
import FuelStation from '../../components/fuelstation';
import Profile from '../../components/profile';

const cover = require('../../../img/web-cover1.jpg');

const {
  popRoute,
} = actions;

class IconFooter extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'workout_plan',
      modalVisible: false,
    };
  }

  setModalVisible(visible) { this.setState({ modalVisible: visible }); }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case 'workout_plan':
        return (<BasicTab />);
      case 'attendance':
        return (<Attendance />);
      case 'reminder':
        return (<Reminder />);
      case 'dietplan':
        return (<DietPlan />);
      case 'fuelstation':
        return (<FuelStation />);
      default:
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Footer</Title>
          </Body>
          <Right>
            <TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
              <Image
                style={{ width: 30, height: 30, borderRadius: 15 }}
                source={cover}
              />
            </TouchableHighlight>
          </Right>
        </Header>

        {/*<Content padder />*/}
        {this.renderSelectedTab()}

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(false) }}
        >
          <Profile />
        </Modal>
        <Footer>
          <FooterTab>
            <Button active={this.state.selectedTab === 'workout_plan'}
              onPress={() => this.setState({ selectedTab: 'workout_plan' })} >
              <Icon name="body" />
            </Button>
            <Button active={this.state.selectedTab === 'attendance'}
              onPress={() => this.setState({ selectedTab: 'attendance' })} >
              <Icon name="calendar" />
            </Button>
            <Button active={this.state.selectedTab === 'reminder'}
              onPress={() => this.setState({ selectedTab: 'reminder' })} >
              <Icon name="alarm" />
            </Button>
            <Button active={this.state.selectedTab === 'dietplan'}
              onPress={() => this.setState({ selectedTab: 'dietplan' })} >
              <Icon name="pie" />
            </Button>
            <Button active={this.state.selectedTab === 'fuelstation'}
              onPress={() => this.setState({ selectedTab: 'fuelstation' })} >
              <Icon name="nutrition" />
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(IconFooter);
