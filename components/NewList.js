import React from 'react';
import { View, Text } from 'react-native';
import { FormInput, Button } from 'react-native-elements';

export default function NewList(props){
    return(
        <View>
            <FormInput
                placeholder={props.placeholder}
                onChangeText={props.addItem}
            />

            <Button 
                onPress={props.handleAdd} 
                iconRight={{ name: 'ios-add', type: 'ionicon'}}
                backgroundColor={'green'}
            />
        </View>
    )
};