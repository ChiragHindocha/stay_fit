
import React, { Component } from 'react';
import { StatusBar, Image, Switch, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Card, CardItem, Thumbnail, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const logo = require('../../../img/logo.png');
const cardImage = require('../../../img/fruitsalad1.jpg');
const yogurt_pesto = require('../../../img/yogurt_pesto.jpg');
const date_banana_shake = require('../../../img/bananadatesmilkshake.jpg');
const oats_upma = require('../../../img/oats_upma.jpg');
const chicken_quinoa = require('../../../img/chicken_quinoa.jpg');
const schzewan_chicken = require('../../../img/schzewan_chicken.jpg');

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },

  text: {
    fontSize: 30,
    color: 'red',
  }
})*/

class FuelStation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      only_veg: false
    };


  }

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  toggleSwitch = (value) => this.setState({ only_veg: value })

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
            <Title>Zeus Fuel Station</Title>
          </Body>
          <Right />

        </Header>


        <Content padder>
          <View style={styles.container}>
            <Switch onValueChange={this.toggleSwitch} value={this.state.only_veg} />
          </View>
          {/* item 1 */}
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Body>
                  <Text>YOUR FRUIT BOWL</Text>
                  <Text note>Seasonal fruits served with a honey & lemon dressing.</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover', width: null, height: 200, flex: 1 }} source={cardImage} />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent primary iconLeft>
                  <Icon name="body" style={{ color: '#000' }} />
                  <Text numberOfLines={1} style={styles.iconText}>70 calories</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent primary iconLeft>
                  <Icon name="nutrition" style={{ color: 'green' }} />
                  <Text numberOfLines={1} style={styles.iconText}>0.4g protein</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent primary iconLeft>
                  <Icon name="cart" style={{ color: 'red' }} />
                  <Text numberOfLines={1} style={styles.iconText}>cart</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          {/* item 2 */}
          {!this.state.only_veg && <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Body>
                  <Text>CHICKEN & QUINOA SALAD</Text>
                  <Text note>Boiled Quinoa, Parsley, Broccoli, Zucchini, Chicken, Olive oil & Salt to taste.</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover', width: null, height: 200, flex: 1 }} source={chicken_quinoa} />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent primary iconLeft>
                  <Icon name="body" style={{ color: '#000' }} />
                  <Text numberOfLines={1} style={styles.iconText}>346 calories</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent primary iconLeft>
                  <Icon name="nutrition" style={{ color: 'green' }} />
                  <Text numberOfLines={1} style={styles.iconText}>39g protein</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent primary iconLeft>
                  <Icon name="cart" style={{ color: 'red' }} />
                  <Text numberOfLines={1} style={styles.iconText}>cart</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>}

          {/* item 3 */}
          {!this.state.only_veg && <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Body>
                  <Text>SCHEZWAN CHICKEN</Text>
                  <Text note>Boneless Chicken, Garlic, Ginger, Onion, Olive Oil, Soya Sauce.</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover', width: null, height: 200, flex: 1 }} source={schzewan_chicken} />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent primary iconLeft>
                  <Icon name="body" style={{ color: '#000' }} />
                  <Text numberOfLines={1} style={styles.iconText}>154 calories</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent primary iconLeft>
                  <Icon name="nutrition" style={{ color: 'green' }} />
                  <Text numberOfLines={1} style={styles.iconText}>19g protein</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent primary iconLeft>
                  <Icon name="cart" style={{ color: 'red' }} />
                  <Text numberOfLines={1} style={styles.iconText}>cart</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>}

          {/* item 4 */}
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Body>
                  <Text>DATE BANANA SHAKE</Text>
                  <Text note>Dates De-seeded, Skimmed Milk & Banana.</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover', width: null, height: 200, flex: 1 }} source={date_banana_shake} />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent primary iconLeft>
                  <Icon name="body" style={{ color: '#000' }} />
                  <Text numberOfLines={1} style={styles.iconText}>122 calories</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent primary iconLeft>
                  <Icon name="nutrition" style={{ color: 'green' }} />
                  <Text numberOfLines={1} style={styles.iconText}>6g protein</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent primary iconLeft>
                  <Icon name="cart" style={{ color: 'red' }} />
                  <Text numberOfLines={1} style={styles.iconText}>cart</Text>
                </Button>
              </Right>
            </CardItem>


          </Card>

          {/* item 5 */}
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Body>
                  <Text>SUMMER VEGETABLES WITH YOGURT PESTO</Text>
                  <Text note>Bell peppers, paneer, onion & rucchini sauteed in yogurt pesto.</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover', width: null, height: 200, flex: 1 }} source={yogurt_pesto} />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent primary iconLeft>
                  <Icon name="body" style={{ color: '#000' }} />
                  <Text numberOfLines={1} style={styles.iconText}>70 calories</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent primary iconLeft>
                  <Icon name="nutrition" style={{ color: 'green' }} />
                  <Text numberOfLines={1} style={styles.iconText}>0.4g protein</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent primary iconLeft>
                  <Icon name="cart" style={{ color: 'red' }} />
                  <Text numberOfLines={1} style={styles.iconText}>cart</Text>
                </Button>
              </Right>
            </CardItem>


          </Card>

          {/* item 6 */}
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Body>
                  <Text>OATS UPMA</Text>
                  <Text note>Rolled oats, mustard seeds, chopped onions, chopped carrot, chopped tomato, green peas.</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover', width: null, height: 200, flex: 1 }} source={oats_upma} />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent primary iconLeft>
                  <Icon name="body" style={{ color: '#000' }} />
                  <Text numberOfLines={1} style={styles.iconText}>253 calories</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent primary iconLeft>
                  <Icon name="nutrition" style={{ color: 'green' }} />
                  <Text numberOfLines={1} style={styles.iconText}>8g protein</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent primary iconLeft>
                  <Icon name="cart" style={{ color: 'red' }} />
                  <Text numberOfLines={1} style={styles.iconText}>cart</Text>
                </Button>
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

export default connect(mapStateToProps, bindAction)(FuelStation);
