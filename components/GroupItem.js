import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';

import { ListStyles } from '../styles/Stylesheets';

function GrouItem(props){
    return (
        <View key={props.index} style={ListStyles.container}>
            <Text>{props.listItem}</Text>
            <TouchableOpacity onPress={() => { props.handleRemove(props.index) }} style={ListStyles.addHandler}>
                <Text style={ListStyles.addHandlerText}>Remove</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GroupItem;
