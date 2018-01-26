export default function(state = [], action){
    switch(action.type) {
        case 'ADD_ITEM':
            let addList = state.slice();
            addList.push(action.payload);
            return addList;
        case 'REMOVE_ITEM':
            let removeList = state.slice();
            removeList.splice(action.payload,1);
            return removeList;
        default:
            return state;
    }
}