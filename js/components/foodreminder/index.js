
import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, List, ListItem, CheckBox, Header, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './styles';

class FoodReminder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBreakfastTimePickerVisible: false,
      breakfast_time: '',
      is_breakfast_checked: true,
      isMSnackTimePickerVisible: false,
      m_snack_time: '',
      is_m_snack_checked: false,
      isLunchTimePickerVisible: false,
      lunch_time: '',
      is_lunch_checked: false,
      isESnackTimePickerVisible: false,
      e_snack_time: '',
      is_e_snacked_checked: true,
      isDinnerTimePickerVisible: false,
      dinner_time: '',
      is_dinner_checked: true,
    };

  }

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  _showBreakfastTimePicker = () => this.setState({ isBreakfastTimePickerVisible: true });

  _hideBreakfastTimePicker = () => this.setState({ isBreakfastTimePickerVisible: false });

  _showMSnackTimePicker = () => this.setState({ isMSnackTimePickerVisible: true });

  _hideMSnackTimePicker = () => this.setState({ isMSnackTimePickerVisible: false });

  _showLunchTimePicker = () => this.setState({ isLunchTimePickerVisible: true });

  _hideLunchTimePicker = () => this.setState({ isLunchTimePickerVisible: false });

  _showESnackTimePicker = () => this.setState({ isESnackTimePickerVisible: true });

  _hideESnackTimePicker = () => this.setState({ isESnackTimePickerVisible: false });

  _showDinnerTimePicker = () => this.setState({ isDinnerTimePickerVisible: true });

  _hideDinnerTimePicker = () => this.setState({ isDinnerTimePickerVisible: false });

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

  _handleBreakfastTimePicked = (date) => {
    const time = this._getTimeFromDate(date);
    this.setState({ breakfast_time: time });
    this._hideBreakfastTimePicker();
  };

  _handleMSnackTimePicked = (date) => {
    const time = this._getTimeFromDate(date);
    this.setState({ m_snack_time: time });
    this._hideMSnackTimePicker();
  };

  _handleLunchTimePicked = (date) => {
    const time = this._getTimeFromDate(date);
    this.setState({ lunch_time: time });
    this._hideLunchTimePicker();
  };

  _handleESnackTimePicked = (date) => {
    const time = this._getTimeFromDate(date);
    this.setState({ e_snack_time: time });
    this._hideESnackTimePicker();
  };

  _handleDinnerTimePicked = (date) => {
    const time = this._getTimeFromDate(date);
    this.setState({ dinner_time: time });
    this._hideDinnerTimePicker();
  };

  _onChangeBreakfast = (value) => {
    this.setState({
      is_breakfast_checked: !this.state.is_breakfast_checked,
    });
  };

  _onChangeMSnack = (value) => {
    this.setState({
      is_m_snack_checked: !this.state.is_m_snack_checked,
    });
  };

  _onChangeLunch = (value) => {
    this.setState({
      is_lunch_checked: !this.state.is_lunch_checked,
    });
  };

  _onChangeESnack = (value) => {
    this.setState({
      is_e_snacked_checked: !this.state.is_e_snacked_checked,
    });
  };

  _onChangeDinner = (value) => {
    this.setState({
      is_dinner_checked: !this.state.is_dinner_checked
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Meal Reminder</Title>
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
                  <CheckBox checked={this.state.is_breakfast_checked} onPress={() => this._onChangeBreakfast()} color='#FF3366' />
                </Col>
                <Col style={{ width: 160 }}>
                  <Text note style={{ alignSelf: "flex-start", fontWeight: 'bold', fontSize: 16 }}>Breakfast</Text>
                </Col>
                <Col style={{ width: 160 }}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this._showBreakfastTimePicker}>
                      <Text note style={{ color: '#FF3366' }}>{this.state.breakfast_time ? this.state.breakfast_time : '06:30 AM'}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                      mode='time'
                      is24Hour={false}
                      isVisible={this.state.isBreakfastTimePickerVisible}
                      onConfirm={this._handleBreakfastTimePicked}
                      onCancel={this._hideBreakfastTimePicker}
                    />
                  </View>
                </Col>
              </Grid>
            </ListItem>
            {/*item-2*/}
            <ListItem>
              <Grid>
                <Col style={{ width: 60 }}>
                  <CheckBox checked={this.state.is_m_snack_checked} onPress={() => this._onChangeMSnack()} color='#FF3366' />
                </Col>
                <Col style={{ width: 160 }}>
                  <Text note style={{ alignSelf: "flex-start", fontWeight: 'bold', fontSize: 16 }}>Morning Snack</Text>
                </Col>
                <Col style={{ width: 160 }}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this._showMSnackTimePicker}>
                      <Text note style={{ color: '#FF3366' }}>{this.state.m_snack_time ? this.state.m_snack_time : '10:30 AM'}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                      mode='time'
                      is24Hour={false}
                      isVisible={this.state.isMSnackTimePickerVisible}
                      onConfirm={this._handleMSnackTimePicked}
                      onCancel={this._hideMSnackTimePicker}
                    />
                  </View>
                </Col>
              </Grid>
            </ListItem>
            {/*item-3*/}
            <ListItem>
              <Grid>
                <Col style={{ width: 60 }}>
                  <CheckBox checked={this.state.is_lunch_checked} onPress={() => this._onChangeLunch()} color='#FF3366' />
                </Col>
                <Col style={{ width: 160 }}>
                  <Text note style={{ alignSelf: "flex-start", fontWeight: 'bold', fontSize: 16 }}>Lunch</Text>
                </Col>
                <Col style={{ width: 160 }}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this._showLunchTimePicker}>
                      <Text note style={{ color: '#FF3366' }}>{this.state.lunch_time ? this.state.lunch_time : '02:00 PM'}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                      mode='time'
                      is24Hour={false}
                      isVisible={this.state.isLunchTimePickerVisible}
                      onConfirm={this._handleLunchTimePicked}
                      onCancel={this._hideLunchTimePicker}
                    />
                  </View>
                </Col>
              </Grid>
            </ListItem>
            {/*item-4*/}
            <ListItem>
              <Grid>
                <Col style={{ width: 60 }}>
                  <CheckBox checked={this.state.is_e_snacked_checked} onPress={() => this._onChangeESnack()} color='#FF3366' />
                </Col>
                <Col style={{ width: 160 }}>
                  <Text note style={{ alignSelf: "flex-start", fontWeight: 'bold', fontSize: 16 }}>Evening Snack</Text>
                </Col>
                <Col style={{ width: 160 }}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this._showESnackTimePicker}>
                      <Text note style={{ color: '#FF3366' }}>{this.state.e_snack_time ? this.state.e_snack_time : '05:30 PM'}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                      mode='time'
                      is24Hour={false}
                      isVisible={this.state.isESnackTimePickerVisible}
                      onConfirm={this._handleESnackTimePicked}
                      onCancel={this._hideESnackTimePicker}
                    />
                  </View>
                </Col>
              </Grid>
            </ListItem>
            {/*item-5*/}
            <ListItem>
              <Grid>
                <Col style={{ width: 60 }}>
                  <CheckBox checked={this.state.is_dinner_checked} onPress={() => this._onChangeDinner()} color='#FF3366' />
                </Col>
                <Col style={{ width: 160 }}>
                  <Text note style={{ alignSelf: "flex-start", fontWeight: 'bold', fontSize: 16 }}>Dinner</Text>
                </Col>
                <Col style={{ width: 160 }}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this._showDinnerTimePicker}>
                      <Text note style={{ color: '#FF3366' }}>{this.state.dinner_time ? this.state.dinner_time : '09:00 PM'}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                      mode='time'
                      is24Hour={false}
                      isVisible={this.state.isDinnerTimePickerVisible}
                      onConfirm={this._handleDinnerTimePicked}
                      onCancel={this._hideDinnerTimePicker}
                    />
                  </View>
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

export default connect(mapStateToProps, bindAction)(FoodReminder);
