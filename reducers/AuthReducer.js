authState = {
    isLoggedIn: false
}

export default function AuthReducer(state = authState, action){
    switch(action.type){
        case 'REGISTER' || 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return action.payload;
        default:
            return authState;
    };
};