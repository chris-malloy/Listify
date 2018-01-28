import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';

function ListItem(props){
    return (
        <View key={props.index}>
            <Text>{props.listItem}</Text>
            <TouchableOpacity onPress={() => { props.handleRemove(props.index) }} style={styles.addHandler}>
                <Text style={styles.addHandlerText}>Remove</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    addHandler: {
        alignItems: 'center',
        margin: 10,
    }
});

export default ListItem;
