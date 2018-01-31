import React from 'react';
import { List, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

const list = [
    {
        title: 'My Folder',
        leftIcon: {
            name: '',
            type: '',
        }
    }
]

export default function GroupItems(props) {
    console.log(props)
    var theArray = props.list;
    return(
        <List containerStyle={{ marginBottom: 20 }}>
            {
                theArray.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.title}
                        badge={{ value: 1, containerStyle: { backgroundColor: 'green' } }}
                        onPressRightIcon={() => props.navigation.navigate('ListScreen')}
                    />
                ))
            }
        </List>
    )
}
