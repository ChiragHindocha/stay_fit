
const React = require('react-native');

import { Platform } from 'react-native';

const { StyleSheet } = React;

/*const randomColor = require('randomcolor'); // import the script
let color = randomColor({ luminosity: 'light' }); // a hex code for an attractive color*/

export default {
  container: {
    backgroundColor: '#FFF',
  },
  containerCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  avatarContainer: {
    width: (Platform.OS) === 'ios' ? 40 : 50,
    height: (Platform.OS) === 'ios' ? 40 : 50,
    //backgroundColor: color,
    borderRadius: 50,
    marginRight: 15
  },
  avatarText: {
    color: '#fff',
    marginRight: 10,
    fontSize: (Platform.OS) === 'ios' ? 22 : 26,
    lineHeight: (Platform.OS) === 'ios' ? 16 : 20
  },
};
