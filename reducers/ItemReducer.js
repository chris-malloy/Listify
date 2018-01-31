// three arrays

listObject = {
    folder:[
        {
            title: 'My Folder',
            leftIcon: {
                name: '',
                type: '',
            }
        }
    ],
    lists: [],
    listItems: []
}

export default function(state = listObject, action){
    switch(action.type) {
        case 'ADD_ITEM':
            let addObject = {...state};
            addObject.folder.push({ 
                title: action.payload,
                leftIcon: {
                    name: '',
                    type: '',
                }
            });
            return addObject
        case 'REMOVE_ITEM':
            let removeObject = {...state};
            removeObject.folder.splice(action.payload,1);
            return removeObject;
        default:
            return state;
    }
}