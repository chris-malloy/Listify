import React from 'react';

import { View } from 'react-native';

import { HomeStyles } from '../styles/Stylesheets';

import GroupContainer from '../containers/GroupContainer'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Listify',
  };
  
  render() {
    return (
      <View>
        <GroupContainer title='My Folder' navigation={this.props.navigation}  />
      </View>
    );
  }
};