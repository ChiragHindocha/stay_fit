
import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Container, List, Picker, Item, ListItem, Radio, Header, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './styles';

class WorkoutReminder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTimePickerVisible: false,
      time: '',
      is_checked: true,
      isTimePicker2Visible: false,
      time2: '',
      selectedItem: undefined,
      selected1: 'sun',
      selectedItem2: undefined,
      selected2: '1st',
    };

  }

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _showTimePicker2 = () => this.setState({ isTimePicker2Visible: true });

  _hideTimePicker2 = () => this.setState({ isTimePicker2Visible: false });


  _getTimeFromDate = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  };

  _handleTimePicked = (date) => {
    const time = this._getTimeFromDate(date);
    this.setState({ time: time });
    this._hideTimePicker();
  };

  _handleTimePicked2 = (date) => {
    const time = this._getTimeFromDate(date);
    this.setState({ time2: time });
    this._hideTimePicker2();
  };

  _onChange = (value) => {
    this.setState({
      is_checked: !this.state.is_checked,
    });
  };

  _onDayChange(value: string) {
    this.setState({
      selected1: value
    });
  };

  _onDateChange(value: string) {
    this.setState({
      selected2: value
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          {/*<Header span={true}>*/}
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Weight Reminder</Title>
            {/*<Title style={{ marginBottom: 65 }}>Weight Reminder</Title>*/}
          </Body>
          <Right>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon active name="checkmark" />
            </Button>
          </Right>

        </Header>


        <Content>
          <List>
            {/*item-1*/}
            <ListItem>
              <Grid>
                <Col style={{ width: 60 }}>
                  <Radio selected={this.state.is_checked} onPress={() => this._onChange()} color='#FF3366' />
                </Col>
                <Col style={{ width: 160 }}>
                  <Text note style={{ alignSelf: "flex-start", fontWeight: 'bold', fontSize: 16 }}>Remind me every</Text>
                </Col>
                <Col style={{ width: 160 }}>
                  <Row>
                    <Right>
                      <Picker
                        //iosHeader="Select one"
                        mode="dropdown"
                        style={{ color: '#FF3366', width: (Platform.OS === 'ios') ? undefined : 120 }}
                        selectedValue={this.state.selected1}
                        onValueChange={this._onDayChange.bind(this)}>
                        <Item label="SUN" value="sun" />
                        <Item label="MON" value="mon" />
                        <Item label="TUE" value="tue" />
                        <Item label="WED" value="wed" />
                        <Item label="THU" value="thu" />
                        <Item label="FRI" value="fri" />
                        <Item label="SAT" value="sat" />
                      </Picker>
                    </Right>
                  </Row>
                  <Row>
                    <View style={{ flex: 1 }}>
                      <TouchableOpacity onPress={this._showTimePicker}>
                        <Text note style={{ color: '#FF3366' }}>{this.state.time ? 'at ' + this.state.time : 'at 06:30 AM'}</Text>
                      </TouchableOpacity>
                      <DateTimePicker
                        mode='time'
                        is24Hour={false}
                        isVisible={this.state.isTimePickerVisible}
                        onConfirm={this._handleTimePicked}
                        onCancel={this._hideTimePicker}
                      />
                    </View>
                  </Row>
                </Col>
              </Grid>
            </ListItem>
            {/*item-2*/}
            <ListItem>
              <Grid>
                <Col style={{ width: 60 }}>
                  <Radio selected={!this.state.is_checked} onPress={() => this._onChange()} color='#FF3366' />
                </Col>
                <Col style={{ width: 160 }}>
                  <Text note style={{ alignSelf: "flex-start", fontWeight: 'bold', fontSize: 16 }}>Remind me every month on</Text>
                </Col>
                <Col style={{ width: 160 }}>
                  <Row>
                    <Right>
                      <Picker
                        //iosHeader="Select one"
                        mode="dropdown"
                        style={{ color: '#FF3366', width: (Platform.OS === 'ios') ? undefined : 120 }}
                        selectedValue={this.state.selected2}
                        onValueChange={this._onDateChange.bind(this)}>
                        <Item label="1st" value="1" />
                        <Item label="2nd" value="2" />
                        <Item label="3rd" value="3" />
                        <Item label="4th" value="4" />
                        <Item label="5th" value="5" />
                        <Item label="6th" value="6" />
                        <Item label="7th" value="7" />
                        <Item label="8th" value="8" />
                        <Item label="9th" value="9" />
                        <Item label="10th" value="10" />
                        <Item label="11th" value="11" />
                        <Item label="12th" value="12" />
                        <Item label="13th" value="13" />
                        <Item label="14th" value="14" />
                        <Item label="15th" value="15" />
                        <Item label="16th" value="16" />
                        <Item label="17th" value="17" />
                        <Item label="18th" value="18" />
                        <Item label="19th" value="19" />
                        <Item label="20th" value="20" />
                        <Item label="21st" value="21" />
                        <Item label="22nd" value="22" />
                        <Item label="23rd" value="23" />
                        <Item label="24th" value="24" />
                        <Item label="25th" value="25" />
                        <Item label="26th" value="26" />
                        <Item label="27th" value="27" />
                        <Item label="28th" value="28" />
                        <Item label="29th" value="29" />
                        <Item label="30th" value="30" />
                        <Item label="31st" value="31" />
                      </Picker>
                    </Right>
                  </Row>
                  <Row>
                    <View style={{ flex: 1 }}>
                      <TouchableOpacity onPress={this._showTimePicker2}>
                        <Text note style={{ color: '#FF3366' }}>{this.state.time2 ? 'at ' + this.state.time2 : 'at 06:30 AM'}</Text>
                      </TouchableOpacity>
                      <DateTimePicker
                        mode='time'
                        is24Hour={false}
                        isVisible={this.state.isTimePicker2Visible}
                        onConfirm={this._handleTimePicked2}
                        onCancel={this._hideTimePicker2}
                      />
                    </View>
                  </Row>
                </Col>
              </Grid>
            </ListItem>
          </List>
        </Content>

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

export default connect(mapStateToProps, bindAction)(WorkoutReminder);
