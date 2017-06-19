
import React, { Component } from 'react';
import { StatusBar, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

const background = require("../../../img/fitness_bg.jpg");
const backIcon = require("../../../img/back.png");
const personIcon = require("../../../img/signup_person.png");
const lockIcon = require("../../../img/signup_lock.png");
const emailIcon = require("../../../img/signup_email.png");
const birthdayIcon = require("../../../img/signup_birthday.png");

class SignUp extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>

            <View style={styles.headerIconView}>
              <TouchableOpacity onPress={() => { Actions['home'](); }} style={styles.headerBackButtonView}>
                <Image
                  source={backIcon}
                  style={styles.backButtonIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Sign Up</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Name"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={emailIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                placeholderTextColor="#FFF"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={lockIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                secureTextEntry={true}
                style={[styles.input, styles.whiteFont]}
                placeholder="Password"
                placeholderTextColor="#FFF"
              />
            </View>           

          </View>

          <View style={styles.footerContainer}>

            <TouchableOpacity onPress={() => { Actions['basicTab'](); }}>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Join</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { Actions['home'](); }}>
              <View style={styles.signin}>
                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
              </View>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(SignUp);
