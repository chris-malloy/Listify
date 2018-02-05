import React from 'react';

import { View } from 'react-native';
import {
    FormLabel,
    FormInput,
    FormValidationMessage
} from 'react-native-elements';

import { AuthStyles } from '../styles/Stylesheets';

export default function FormField(props){
    return(
        <View>
            <FormLabel>{props.title}</FormLabel>
            <FormInput onChangeText={props.onChangeText} />
            <FormValidationMessage>{props.errorMessage}</FormValidationMessage>
        </View>
    )
}