/**
 * @name AuthContainer
 * @description Redux Container that returns appropriate form with auth state
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { AuthStyles } from '../styles/Stylesheets';

import FormField from '../components/FormField';

import { RegisterAction, LoginAction, LogoutAction } from '../actions/AuthActions';

class AuthContainer extends Component {
    constructor(){
        super();
        this.state = {
            nameErrorMessage: '',
            emailErrorMessage: '',
            passwordErrorMessage: '',
            name: '',
            email: '',
            password: ''
        }
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(){ 
        if (this.state.name !== ""){
            let name = this.state.name;
            let email = this.state.email;
            let password = this.state.password;
            this.props.register(name, email, password);
        } else {
            let email = this.state.email;
            let password = this.state.password;
            this.props.login(email, password);
        };
    };

    render(){
        return(
            <View style={AuthStyles.container}>
                <Text style={AuthStyles.title}>Listify</Text>
                <FormField title={'Name'} onChangeText={(name) => { this.setState({ name })}} errorMessage={this.state.nameErrorMessage} style={AuthStyles.text} />
                <FormField title={'Email'} onChangeText={(email) => { this.setState({ email }) }} errorMessage={this.state.emailErrorMessage} style={AuthStyles.text} />
                <FormField title={'Password'} onChangeText={(password) => { this.setState({ password }) }} errorMessage={this.state.passwordErrorMessage} style={AuthStyles.text}  />
                <Button
                    title={'Submit'}
                    onPress={this._handleSubmit}
                    color={'black'}
                    backgroundColor={'white'}
                />
            </View>
        )
    };
};  

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