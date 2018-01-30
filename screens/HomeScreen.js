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

import ListContainer from '../containers/ListContainer'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Listify',
  };

  render() {
    return (
      <View style={HomeStyles.container}>
        <ScrollView style={HomeStyles.container} contentContainerStyle={HomeStyles.contentContainer}>

          <View style={HomeStyles.list}>
            <ListContainer />
          </View>

        </ScrollView>
      </View>
    );
  }
};