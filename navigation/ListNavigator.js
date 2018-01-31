import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';

const ListStackNavigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        List: {
            screen: ListScreen,
        }
    },
);

export default class ListNavigator extends React.Component {
    static navigationOptions = {
        headerStyle:{
            display: 'none',
        }
    };
    render() {
        return <ListStackNavigator />;
    }
}
