import React, { Component } from 'react';
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

export default class GroupItems extends Component {
    render(){
        return(
            <List containerStyle={{ marginBottom: 20 }}>
                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.title}
                            badge={{ value: 1, containerStyle: { backgroundColor: 'green' } }}
                            onPressRightIcon={()=>{console.log('pressed')}}
                        />
                    ))
                }
            </List>
        )
    }
}