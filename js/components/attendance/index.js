
import React, { Component } from 'react';
import { StatusBar, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Toast, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
//import Calendar from 'react-native-calendar';
//import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
//import {Calendar} from 'react-native-calendars';
import Calendar from "react-native-calendar-component";
import ModalWrapper from "react-native-modal-wrapper";
import PinBoxList from '../pinboxlist';
import PinBox from '../pinbox';
import { Col, Row, Grid } from 'react-native-easy-grid';

class Attendance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      isOpen: false,
      showToast: false,
      maxPinLength: 4,
      pinValue: '',
    };
  }

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  handleNextButtonPress() {
    const date = new Date(this.state.date);
    date.setMonth(date.getMonth() + 1);
    this.setState({
      date
    });
  }

  handlePrevButtonPress() {
    const date = new Date(this.state.date);
    date.setMonth(date.getMonth() - 1);
    this.setState({
      date
    });
  }

  handleDateSelect(date) {
    this.setState({
      isOpen: true
    });
    //alert(`clicked: ${this.state.date.toString()}`);
  }

  onPinEntry = (pinValue, path) => {
    alert(pinValue);
    //if (pinValue.length && isNaN(pinValue)) return;

    //this.setState({ pinValue }, this.onPinEntered);
  }

  onPinEntered = () => {
    if (this.state.pinValue.length <= this.state.maxPinLength) return;

    // do something with the pin
  }

  onCancel = () => {
    this.setState({
      isOpen: false
    });
  }

  onSubmit = () => {
    this.setState({
      isOpen: false
    });
    Toast.show({
      supportedOrientations: ['potrait', 'landscape'],
      text: 'Attendance marked successfully.',
      position: 'bottom',
      duration: 5000,
      type: 'success'
    })
  }

  render() {
    const limit = 1;
    return (
      <Container style={styles.container}>
        <Header span={true}>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ marginBottom: 65 }}>Attendance</Title>
          </Body>
          <Right />

        </Header>


        <Content padder>
          <Calendar
            date={this.state.date}
            onPrevButtonPress={() => this.handlePrevButtonPress()}
            onNextButtonPress={() => this.handleNextButtonPress()}
            onDateSelect={(date) => this.handleDateSelect(date)} />

          <ModalWrapper
            onRequestClose={this.onCancel}
            style={{ width: 280, height: 180, paddingLeft: 24, paddingRight: 24 }}
            visible={this.state.isOpen}>
            <Text>Enter Trainer PIN</Text>
            <TextInput
              autoFocus={true}
              placeholder="Trainer PIN"
            />
            <View>
              <Grid>
                <Col>
                  <Button transparent onPress={this.onCancel}>
                    <Text>Cancel</Text>
                  </Button>
                </Col>
                <Col>
                  <Button transparent success onPress={this.onSubmit}>
                    <Text>Done</Text>
                  </Button>
                </Col>
              </Grid>
            </View>
          </ModalWrapper>

        </Content>


        {/*<Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>*/}
      </Container>
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

export default connect(mapStateToProps, bindAction)(Attendance);
