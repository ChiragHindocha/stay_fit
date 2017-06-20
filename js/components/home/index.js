import React, { Component } from 'react';
import { Image, View, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button, H3, Text } from 'native-base';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

const background = require("../../../img/login1_bg.png");
const fitness_bg = require('../../../img/fitness_bg.jpg');
const mark = require("../../../img/login1_mark.png");
const lockIcon = require("../../../img/login1_lock.png");
const personIcon = require("../../../img/login1_person.png");

const launchscreenBg = require('../../../img/launchscreen-bg.png');
const launchscreenLogo = require('../../../img/logo-kitchen-sink.png');

class Home extends Component { // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle='light-content'/>
        <View style={styles.container}>
          <Image source={fitness_bg} style={styles.background} resizeMode="cover">
            <View style={styles.markWrap}>
              {/*<Image source={mark} style={styles.mark} resizeMode="contain" />*/}
            </View>
            <View style={styles.wrapper}>
              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                  <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                </View>
                <TextInput
                  placeholder="Username"
                  placeholderTextColor="#FFF"
                  style={styles.input}
                  caretHidden={true}
                />
              </View>
              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                  <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                </View>
                <TextInput
                  placeholderTextColor="#FFF"
                  placeholder="Password"
                  style={styles.input}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity activeOpacity={.5}>
                <View>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { Actions['basicTab'](); this.props.closeDrawer() }} activeOpacity={.5}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <View style={styles.signupWrap}>
                <Text style={styles.accountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => { Actions['signup'](); this.props.closeDrawer() }} activeOpacity={.5}>
                  <View>
                    <Text style={styles.signupLinkText}>Sign Up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Image>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
  routes: state.drawer.routes,
});

export default connect(mapStateToProps, bindActions)(Home);
