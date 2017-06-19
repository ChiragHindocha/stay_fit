
const React = require('react-native');

const { StyleSheet } = React;

export default {
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  input: {
    backgroundColor: 'red',
    position: 'absolute',
    right: -99,
    // right: 0,
    //top: Constants.statusBarHeight,
  },
  pinView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(239, 239, 244)',
    //paddingTop: Constants.statusBarHeight + 100,
  },
  pinPromptText: {
    marginBottom: 10,
  },
  pinBoxList: {
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pinBox: {
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    height: 30,
    width: 30,
    marginRight: 14,
    justifyContent: 'center'
  },
};
