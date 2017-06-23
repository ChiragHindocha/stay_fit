
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Switch, Card, CardItem, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import RNCalendarEvents from 'react-native-calendar-events';

class Reminder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food_reminder: false,
      workout_reminder: false,
      weight_reminder: false,
      water_reminder: false,
    };

  }

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  onChangeFoodReminder = (value) => this.setState({ food_reminder: value });

  onChangeWorkoutReminder = (value) => this.setState({ workout_reminder: value });

  onChangeWeightReminder = (value) => this.setState({ weight_reminder: value });

  onChangeWaterReminder = (value) => this.setState({ water_reminder: value });

  render() {
    return (
      <Container style={styles.container}>
        {/*<Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Notifications</Title>
          </Body>
          <Right />

        </Header>*/}


        <Content padder>
          <Card style={styles.mb}>
            <CardItem onPress={() => { Actions['foodreminder'](); }}>
              <Body>
                <Text style={styles.title}>
                  Food Reminder
                </Text>
                <Text note>
                  {this.state.food_reminder ? '3 Meals, at Different times' : 'Set a Food Reminder'}
                </Text>
              </Body>
              <Right>
                <Switch thumbTintColor='#fff' onTintColor='#F5003D' onValueChange={this.onChangeFoodReminder} value={this.state.food_reminder} />
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem onPress={() => { Actions['workoutreminder'](); }}>
              <Body>
                <Text style={styles.title}>
                  Workout Reminder
                </Text>
                <Text note>
                  {this.state.workout_reminder ? 'Remind me once at 06:30 AM' : 'Set a Workout Reminder'}
                </Text>
              </Body>
              <Right>
                <Switch thumbTintColor='#fff' onTintColor='#F5003D' onValueChange={this.onChangeWorkoutReminder} value={this.state.workout_reminder} />
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem onPress={() => { Actions['weightreminder'](); }}>
              <Body>
                <Text style={styles.title}>
                  Weight Reminder
                </Text>
                <Text note>
                  {this.state.weight_reminder ? 'Remind me every Sunday' : 'Set a Weight Reminder'}
                </Text>
              </Body>
              <Right>
                <Switch thumbTintColor='#fff' onTintColor='#F5003D' onValueChange={this.onChangeWeightReminder} value={this.state.weight_reminder} />
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem>
              <Body>
                <Text style={styles.title}>
                  Water Reminder
                </Text>
                <Text note>
                  {this.state.water_reminder ? 'Remind me every 30 Minutes' : 'Set a Water Reminder'}
                </Text>
              </Body>
              <Right>
                <Switch thumbTintColor='#fff' onTintColor='#F5003D' onValueChange={this.onChangeWaterReminder} value={this.state.water_reminder} />
              </Right>
            </CardItem>
          </Card>
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

export default connect(mapStateToProps, bindAction)(Reminder);
