import React from 'react';

import { View } from 'react-native';

import { HomeStyles } from '../styles/Stylesheets';

import GroupContainer from '../containers/GroupContainer'

export default class ListScreen extends React.Component {
    static navigationOptions = {
        title: 'Listify',
    };
    render() {
        return (
            <View>
                <GroupContainer navigation={this.props.navigation} title='Shopping List' />
            </View>
        );
    }
};