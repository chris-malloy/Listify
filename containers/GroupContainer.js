/**
 * @name Group Container
 * @description Redux contianer that returns GroupItems
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
} from 'react-native-elements';
import Overlay from '../components/Overlay';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GroupItems from '../components/GroupItems';
import NewList from '../components/NewList';

import AddItem from '../actions/AddItem';
import RemoveItem from '../actions/RemoveItem';

class GroupContainer extends Component{
    constructor(props){
        super(props);
        this.state = {  
            itemToAdd: 'Enter item to add',
            isVisible: false,
            selectedIndex: 2
        };
        this._handleAdd = this._handleAdd.bind(this);
        this._handleRemove = this._handleRemove.bind(this);
        this._updateIndex = this._updateIndex.bind(this)
        this._cancelAdd = this._cancelAdd.bind(this);
        this._createNewList = this._createNewList.bind(this);
    }

    _updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    _createNewList(){
        this.setState({isVisible: true})
    }

    _cancelAdd(){
        this.setState({isVisible: false})
    }

    _handleAdd(){
        let newItem = this.state.itemToAdd;
        this.props.addItem(newItem);
        this.setState({ isVisible: false })
        
    }

    _handleRemove(index){
        this.props.removeItem(index)
    }

    render(){
        return(
            <View>

                <GroupItems
                    title={this.props.title}
                    navigation={this.props.navigation}
                    list={this.props.listArray.folder} />
                <Button
                    onPress={this._createNewList}
                    iconRight={{ name: 'ios-add', type: 'ionicon' }}
                    backgroundColor={'green'}
                />

                <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor='rgba(255, 255, 255, .5)'
                    overlayBackgroundColor='white'
                    width='auto'
                    height='auto'
                >
                    <NewList placeholder={this.state.itemToAdd} selectedIndex={this.state.selectedIndex} updateIndex={this._updateIndex} cancelAdd={this._cancelAdd} handleAdd={this._handleAdd} addItem={(itemToAdd) => this.setState({ itemToAdd })} />
                </Overlay>

            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        listArray: state.listArray
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addItem: AddItem,
        removeItem: RemoveItem
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);