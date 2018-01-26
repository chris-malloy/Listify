import React, { Component } from 'react';
import { 
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
 } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
        var listArray = this.props.newList.map((listItem,index)=>{
            return(
                <View key={index}>
                    <Text>{listItem}</Text>
                    <TouchableOpacity onPress={() =>{this._handleRemove(index)}} style={styles.addHandler}>
                        <Text style={styles.addHandlerText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            )
        })
        return(
            <View>

                <TextInput
                    style={styles.listInput}
                    placeholder={this.state.itemToAdd }
                    onChangeText={(itemToAdd) => this.setState({ itemToAdd })}
                />

                <TouchableOpacity onPress={this._handleAdd} style={styles.addHandler}>
                    <Text style={styles.addHandlerText}>Add Item</Text>
                </TouchableOpacity>

                <View>
                    {listArray}
                </View>

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

const styles = StyleSheet.create({
    listInput: { 
        height: 40, 
        width: 270, 
        borderBottomColor: 'green', 
        borderBottomWidth: 1 
    },
    addHandler:{
        alignItems: 'center', 
        margin: 10, 
    },
    addHandlerText:{
        color: 'green'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);