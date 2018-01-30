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

import List from '../containers/List'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Listify',
  };

  render() {
    return (
      <View style={HomeStyles.container}>
        <ScrollView style={HomeStyles.container} contentContainerStyle={HomeStyles.contentContainer}>

          <View style={HomeStyles.welcomeContainer}>
            <Text>Welcome to Listify!</Text>
          </View>

          <View style={HomeStyles.list}>
            <List />
          </View>

        </ScrollView>
      </View>
    );
  }
};