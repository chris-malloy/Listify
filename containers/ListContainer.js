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

import { ListStyles } from '../styles/Stylesheets';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NewList from '../components/NewList';
import ListItem from '../components/ListItem'

import AddItem from '../actions/AddItem';
import RemoveItem from '../actions/RemoveItem';

class ListContainer extends Component{
    constructor(){
        super();
        this.state = {  itemToAdd: 'Enter item to add' };
        this._handleAdd = this._handleAdd.bind(this);
        this._handleRemove = this._handleRemove.bind(this);
    }

    _handleAdd(){
        let newItem = this.state.itemToAdd;
        this.props.addItem(newItem);
    }

    _handleRemove(index){
        console.log(index)
        this.props.removeItem(index)
    }

    render(){
        var listArray = this.props.newList.map((listItem, index) => {
            return(
                <ListItem key={index} index={index} listItem={listItem} handleRemove={() => { this._handleRemove(index)}} />
            )
        });
        return(
            <View>

                <NewList placeholder={this.state.itemToAdd} addItem={(itemToAdd) => this.setState({ itemToAdd })} handleAdd={this._handleAdd} />

                {listArray}

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

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);