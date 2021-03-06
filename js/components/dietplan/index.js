
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Card, CardItem, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import Timeline from 'react-native-timeline-listview';

const data = [
    { time: '08:00', title: 'Early Morning', description: '1-2 glass of water' },
    { time: '08:30', title: 'Breakfast', description: '1 glass of Milk with protein-X. Along with the glass of milk, you can have any one from the following: Khakhra, Poha, Upma, Bhakhri.' },
    { time: '10:30', title: 'Mid Morning Snack', description: 'Any one from the following: Dryfruits (handfull), Fruit (any), Fruit Juice (1 glass)' },
    { time: '13:00', title: 'Lunch', description: 'Sprouts (Mung + Chana), 3 Roti, Sabji, Daal & Rice, Curd/Buttermilk.' },
    { time: '15:30', title: 'Mid noon Snack', description: 'Along with Tea/Coffee, you can have any one from the following: Fruit (any), Roasted Chana.' },
    { time: '17:00', title: 'Snacks', description: '1 glass of Milk.' },
    { time: '19:30', title: 'Pre-Workout', description: 'Any one from the following: 4 Almonds, 1 Banana, 5 Dates.' },
    { time: '22:00', title: 'Post-Workout', description: '1 glass of Milk, Sprouts.' }
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
                    <Timeline
                        data={data}
                        circleSize={20}
                        circleColor='#252126'
                        lineColor='#252126'
                        timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                        timeStyle={{ textAlign: 'center', backgroundColor: '#FF3366', color: 'white', padding: 5, borderRadius: 13 }}
                        descriptionStyle={{ color: 'gray' }}
                        options={{
                            style: { paddingTop: 5 }
                        }}
                    />

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
