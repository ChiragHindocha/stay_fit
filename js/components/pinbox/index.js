
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class PinBox extends Component {

  static propTypes = {
    //hasValue: React.PropTypes.boolean,
  }

  render() {
    return (
      <View style={styles.pinBox}>
        {this.renderText()}
      </View>
    );
  }

  renderText() {
    if (!this.props.hasValue) return null;

    return <Text>•</Text>;
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

export default connect(mapStateToProps, bindAction)(PinBox);
