import React from 'react';
import { View, Text } from 'react-native';
import { FormInput, Button, ButtonGroup } from 'react-native-elements';

export default function NewList(props){
    const cancelButton = () => 
        <Button
            title='Cancel'
            onPress={props.cancelAdd}
        />
    const addButton = () => 
        <Button
            title='Add Item'
            onPress={props.handleAdd}
            backgroundColor={'green'}
        />
    const buttons = [{ element: cancelButton }, { element: addButton }]
    return(
        <View>
            <FormInput
                placeholder={props.placeholder}
                onChangeText={props.addItem}
            />
            <View>
                <ButtonGroup
                    onPress={props.updateIndex}
                    selectedIndex={props.selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 100 }} />
            </View>
        </View>
    )
};