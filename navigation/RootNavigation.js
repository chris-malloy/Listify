import React from 'react';
import { connect } from 'react-redux';

import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

import { Notifications } from 'expo';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

const AuthStackNavigator = StackNavigator(
  {
    Register: {
      screen: RegisterScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
)

class RootNavigator extends React.Component {

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    if(this.props.auth.isLoggedIn === false){
      return <AuthStackNavigator />;
    } else {
      return <RootStackNavigator />;
    }
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(RootNavigator);
