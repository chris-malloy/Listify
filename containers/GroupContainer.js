/**
 * @name List
 * @description React component that returns an item in the ListItem
 *
 */
import React, { Component } from 'react';
import { 
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
 } from 'react-native';
import {
    Button,
    Overlay
} from 'react-native-elements';

import { ListStyles } from '../styles/Stylesheets';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GroupItems from '../components/GroupItems';
// import NewList from '../components/NewList';
// import GroupItem from '../components/GroupItem';

import AddItem from '../actions/AddItem';
import RemoveItem from '../actions/RemoveItem';

class GroupContainer extends Component{
    constructor(){
        super();
        this.state = {  
            itemToAdd: 'Enter item to add',
            isVisible: true 
        };
        this._handleAdd = this._handleAdd.bind(this);
        this._handleRemove = this._handleRemove.bind(this);
    }

    _handleAdd(){
        console.log('pressed')
        let newItem = this.state.itemToAdd;
        this.props.addItem(newItem);
    }

    _handleRemove(index){
        console.log(index)
        this.props.removeItem(index)
    }

    render(){
        return(
            <View>
                <GroupItems
                    title='folder'
                    onPress='navigate to child GroupItems' />
                <Button
                    onPress={this._handleAdd}
                    iconRight={{ name: 'ios-add', type: 'ionicon' }}
                    backgroundColor={'green'}
                />
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        newList: state.newList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addItem: AddItem,
        removeItem: RemoveItem
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);


    // render(){
    //     var listArray = this.props.newList.map((listItem, index) => {
    //         return(
    //             <ListItem key={index} index={index} listItem={listItem} handleRemove={() => { this._handleRemove(index)}} />
    //         )
    //     });
    //     return(
    //         <View>

    //             <NewList placeholder={this.state.itemToAdd} addItem={(itemToAdd) => this.setState({ itemToAdd })} handleAdd={this._handleAdd} />

    //             {listArray}

    //         </View>
    //     )
    // }