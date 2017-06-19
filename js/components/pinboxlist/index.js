
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import PinBox from '../pinbox';

class PinBoxList extends Component {

  static propTypes = {
    //pinValueLength: React.PropTypes.integer,
    //pinLength: React.PropTypes.integer,
  }

  render() {
    return (
      <View
        style={styles.pinBoxList}>
        {this.renderPills()}
      </View>
    );
  }

  renderPills() {
    let pills = [];

    for (var i = 0; i < this.props.pinLength; i++) {
      pills.push(this.renderPill(i + 1));
    }

    return pills;
  }

  renderPill(index) {
    return (
      <PinBox
        key={index}
        hasValue={this.props.pinValueLength && this.props.pinValueLength >= index}
      />
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

export default connect(mapStateToProps, bindAction)(PinBoxList);
