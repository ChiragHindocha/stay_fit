
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Card, CardItem, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class DietPlan extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Diet Plan</Title>
          </Body>
          <Right />

        </Header>


        <Content padder>
          {/* item 1 */}
          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold' }}>
                8:00 AM
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                1-2 glass of water.
                </Text>
            </CardItem>
          </Card>
          {/* item 2 */}
          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold' }}>
                8:30 AM (Breakfast)
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                1 glass of Milk with protein-X. Along with the glass of milk, you can have any one from the following: Khakhra, Poha, Upma, Bhakhri.
                </Text>
            </CardItem>
          </Card>
          {/* item 3 */}
          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold' }}>
                10:30 AM
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Any one from the following: Dryfruits (handfull), Fruit (any), Fruit Juice (1 glass)
                </Text>
            </CardItem>
          </Card>
          {/* item 4 */}
          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold' }}>
                01:00 PM (Lunch)
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Sprouts (Mung + Chana), 3 Roti, Sabji, Daal & Rice, Curd/Buttermilk.
                </Text>
            </CardItem>
          </Card>
          {/* item 5 */}
          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold' }}>
                03:30 PM
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Along with Tea/Coffee, you can have any one from the following: Fruit (any), Roasted Chana.
                </Text>
            </CardItem>
          </Card>
          {/* item 6 */}
          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold' }}>
                05:00 PM
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                1 glass of Milk.
                </Text>
            </CardItem>
          </Card>
          {/* item 7 */}
          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold' }}>
                07:30 PM (Pre-Workout)
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Any one from the following: 4 Almonds, 1 Banana, 5 Dates.
                </Text>
            </CardItem>
          </Card>
          {/* item 8 */}
          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold' }}>
                10:00 PM (Post-Workout)
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                1 glass of Milk, Sprouts.
                </Text>
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

export default connect(mapStateToProps, bindAction)(DietPlan);
