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

import ListItem from '../components/ListItem'

import AddItem from '../actions/AddItem';
import RemoveItem from '../actions/RemoveItem';

class List extends Component{
    constructor(props){
        super(props);
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

                <TextInput
                    style={ListStyles.listInput}
                    placeholder={this.state.itemToAdd }
                    onChangeText={(itemToAdd) => this.setState({ itemToAdd })}
                />

                <TouchableOpacity onPress={this._handleAdd} style={ListStyles.addHandler}>
                    <Text style={ListStyles.addHandlerText}>Add Item</Text>
                </TouchableOpacity>

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

export default connect(mapStateToProps, mapDispatchToProps)(List);