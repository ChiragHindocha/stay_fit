
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Separator, Title, List, ListItem, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const datas = [
    {
        //text: '1-2 glass of water.',
        text: '1-2 glass of water.',
        time: '8',
    },
    {
        //img: sanket,
        text: 'Lat pull down',
        note: 'One needs courage to be happy and smiling all time . . ',
        time: '15/3',
    },
    {
        //img: megha,
        text: 'Shoulder Press',
        note: 'Live a life style that matchs your vision',
        time: '12/3',
    },
    {
        //img: atul,
        text: 'DB Shoulder Shrugs',
        note: 'Failure is temporary, giving up makes it permanent',
        time: '20/3',
    },
    {
        //img: saurabh,
        text: 'Chest Fly',
        note: 'The biggest risk is a missed opportunity !!',
        time: '15/3',
    },
    {
        //img: varun,
        text: 'Bicep curls',
        note: 'Wish I had a Time machine . .',
        time: '15/4',
    },
];

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
                    <Separator bordered>
                        <Text>8:00 AM</Text>
                    </Separator>
                    <ListItem >
                        <Text>1-2 glass of water</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>8:30 AM (Breakfast)</Text>
                    </Separator>
                    <ListItem>
                        <Text>1 glass of Milk with protein-X</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Khakhra/Poha/Upma</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>10:30 AM (Any one from following)</Text>
                    </Separator>
                    <ListItem>
                        <Text>Dryfruits (handfull)</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Fruit (any)</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Fruit Juice (1 glass)</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>01:00 PM (Lunch)</Text>
                    </Separator>
                    <ListItem>
                        <Text>Sprouts (Mung + Chana)</Text>
                    </ListItem>
                    <ListItem>
                        <Text>3 Roti, Sabji</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Daal & Rice</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Curd/Buttermilk</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>03:30 PM</Text>
                    </Separator>
                    <ListItem>
                        <Text>Fruit (any)</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Roasted Chana</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>05:00 PM</Text>
                    </Separator>
                    <ListItem>
                        <Text>1 glass of Milk</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>07:30 PM (Pre-workout) (Any one from foll.)</Text>
                    </Separator>
                    <ListItem>
                        <Text>4 Almonds</Text>
                    </ListItem>
                    <ListItem>
                        <Text>5 Dates</Text>
                    </ListItem>
                    <ListItem>
                        <Text>1 Banana</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>10:00 PM (Post-workout)</Text>
                    </Separator>
                    <ListItem>
                        <Text>1 glass of Milk</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Sprouts</Text>
                    </ListItem>
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
