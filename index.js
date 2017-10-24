import FriendsList from './FriendsList';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

const friends = [
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Miller',
    avatarUrl: 'https://placehold.it/100x100',
  },
  {
    id: 2,
    firstName: 'Kate',
    lastName: 'Smith',
    avatarUrl: 'https://placehold.it/100x100',
  },
  {
    id: 3,
    firstName: 'Kevin',
    lastName: 'Yang',
    avatarUrl: 'https://placehold.it/100x100',
  },
];

class ReactNativeWeb extends Component {
  render() {
    return <FriendsList friends={friends} />;
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);