import React from 'react';

import { View } from 'react-native';
import {
    FormLabel,
    FormInput,
    FormValidationMessage
} from 'react-native-elements';

export default function FormField(props){
    return(
        <View>
            <FormLabel style={props.style}>{props.title}</FormLabel>
            <FormInput style={props.style}onChangeText={props.onChangeText} />
            <FormValidationMessage style={props.style}>{props.errorMessage}</FormValidationMessage>
        </View>
    )
}