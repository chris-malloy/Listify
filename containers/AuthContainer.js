/**
 * @name AuthContainer
 * @description Redux Container that returns appropriate form with auth state
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View } from 'react-native';
import { 
    FormLabel, 
    FormInput,
    FormValidationMessage 
} from 'react-native-elements';

import { AuthStyles } from '../styles/Stylesheets';

import FormField from '../components/FormField';

import { RegisterAction, LoginAction, LogoutAction } from '../actions/AuthActions';

class AuthContainer extends Component {
    constructor(){
        super();
        this.state = {
            nameErrorMessage: '',
            emailErrorMessage: '',
            passwordErrorMessage: ''
        }
        this._handleInput = this._handleInput.bind(this);
    }

    _handleInput(){
        this.props.login();
    }

    render(){
        return(
            <View style={AuthStyles.container}>
                <FormField title={'Name'} onChangeText={() => { this._handleInput() }} errorMessage={this.state.nameErrorMessage} />
                <FormField title={'Email'} onChangeText={() => { this._handleInput() }} errorMessage={this.state.emailErrorMessage} />
                <FormField title={'Password'} onChangeText={() => { this._handleInput() }} errorMessage={this.state.passwordErrorMessage} />
            </View>
        )
    }
}   

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        register: RegisterAction,
        login: LoginAction,
        logout: LogoutAction
    },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);