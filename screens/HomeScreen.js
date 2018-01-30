import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { HomeStyles } from '../styles/Stylesheets';

import GroupContainer from '../containers/GroupContainer'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Listify',
  };
  render() {
    return (
      <View>
        <GroupContainer />
      </View>
    );
  }
};