import React, { Component } from 'react';
import { 
    ScrollView, 
    View, 
    Text,
    Image 
} from 'react-native';
import { ProfileStyles } from '../styles/Stylesheets';

export default class Profile extends Component {
    render(){
        return(
            <View style={ProfileStyles.container}>
                <Image style={ProfileStyles.img}source={require('../assets/images/robot-dev.png')} />
                <Text style={ProfileStyles.field}>Name</Text>
                <Text style={ProfileStyles.field}>Email</Text>
            </View>
        )
    };
};