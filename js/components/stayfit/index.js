
import React, { Component } from 'react';
import { StatusBar, Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Card, CardItem, Thumbnail, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import Video from 'react-native-video';

class StayFit extends Component {

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
            <Title>Stay Fit</Title>
          </Body>
          <Right />

        </Header>


        <Content padder>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../img/logo.png')} />
                <Body>
                  <Text>CrossFit</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/*<Video source={{ uri: "https://www.youtube.com/watch?v=gufj0eT-sYM" }}   // Can be a URL or a local file.
                  ref={(ref) => {
                    this.player = ref
                  }}                                      // Store reference
                  rate={1.0}                              // 0 is paused, 1 is normal.
                  volume={1.0}                            // 0 is muted, 1 is normal.
                  muted={false}                           // Mutes the audio entirely.
                  paused={false}                          // Pauses playback entirely.
                  resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                  repeat={true}                           // Repeat forever.
                  playInBackground={false}                // Audio continues to play when app entering background.
                  playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                  ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                  progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                  onLoadStart={this.loadStart}            // Callback when video starts to load
                  onLoad={this.setDuration}               // Callback when video loads
                  onProgress={this.setTime}               // Callback every ~250ms with currentTime
                  onEnd={this.onEnd}                      // Callback when playback finishes
                  onError={this.videoError}               // Callback when video cannot be loaded
                  onBuffer={this.onBuffer}                // Callback when remote video is buffering
                  onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                  style={styles.backgroundVideo} />*/}
                <Image style={{ resizeMode: 'cover' }} source={require('../../../img/fruitsalad1.jpg')} />
                <Text>
                //Your text here
                </Text>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Body>
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

export default connect(mapStateToProps, bindAction)(StayFit);
