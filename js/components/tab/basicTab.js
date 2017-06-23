
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Button, Icon, Tabs, Tab, Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { actions } from 'react-native-navigation-redux-helpers';
import myTheme from '../../themes/base-theme';
import { openDrawer } from '../../actions/drawer';

import TabOne from './tabOne';

const {
  popRoute,
} = actions;

class BasicTab extends Component {  // eslint-disable-line

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <Container>
        <Header hasTabs={true}>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Workout Plan</Title>
          </Body>
          <Right />

        </Header>

        <Tabs>
          <Tab heading="Mon">
            <TabOne />
          </Tab>
          <Tab heading="Tue">
            <TabOne />
          </Tab>
          <Tab heading="Wed">
            <TabOne />
          </Tab>
          <Tab heading="Thu">
            <TabOne />
          </Tab>
          <Tab heading="Fri">
            <TabOne />
          </Tab>
          <Tab heading="Sat">
            <TabOne />
          </Tab>
          <Tab heading="Sun">
            <TabOne />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(BasicTab);
