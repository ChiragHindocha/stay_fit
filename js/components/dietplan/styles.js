
import { View, ScrollView, Image, StyleSheet, AsyncStorage, Platform } from 'react-native';
const React = require('react-native');

//const { StyleSheet } = React;

export default {
  container: {
    backgroundColor: '#fff',
  },
  syncPending: {
    color: '#ff5252',
    fontSize: 12,
    marginLeft: 12
  },
  listContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  avatarContainer: {
    width: (Platform.OS) === 'ios' ? 40 : 50,
    height: (Platform.OS) === 'ios' ? 40 : 50,
    backgroundColor: '#009a9a',
    borderRadius: 50,
    marginRight: 15
  },
  avatarText: {
    color: '#fff',
    fontSize: (Platform.OS) === 'ios' ? 24 : 32,
    lineHeight: (Platform.OS) === 'ios' ? 28 : 36
  },
  containerCentered: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  row: {
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
};
