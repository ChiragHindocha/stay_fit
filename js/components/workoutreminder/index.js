
import React, { Component } from 'react';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, List, ListItem, CheckBox, Header, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

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
    };

  }

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });
  

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

  _onChange = (value) => {
    this.setState({
      is_checked: !this.state.is_checked,
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
            <Title>Workout Reminder</Title>
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
                  <CheckBox checked={this.state.is_checked} onPress={() => this._onChange()} color='#FF3366' />
                </Col>
                <Col style={{ width: 160 }}>
                  <Text note style={{ alignSelf: "flex-start", fontWeight: 'bold', fontSize: 16 }}>Remind me once at</Text>
                </Col>
                <Col style={{ width: 160 }}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this._showTimePicker}>
                      <Text note style={{ color: '#FF3366' }}>{this.state.time ? this.state.time : '06:30 AM'}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                      mode='time'
                      is24Hour={false}
                      isVisible={this.state.isTimePickerVisible}
                      onConfirm={this._handleTimePicked}
                      onCancel={this._hideTimePicker}
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

export default connect(mapStateToProps, bindAction)(WorkoutReminder);
