import FriendsList from './FriendsList.web';
import FriendData from './FriendData'
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class ReactNativeWeb extends Component {
  render() {
    return <FriendsList friends={FriendData} />;
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });