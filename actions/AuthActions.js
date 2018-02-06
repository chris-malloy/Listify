import axios from 'axios';

export function RegisterAction(name,email,password){
    var authPromise = axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: {
            name: name,
            email: email,
            password: password
        }
    })
    console.log(authPromise)
    return {
        type: 'REGISTER',
        payload: authPromise
    };
};

export function LoginAction(email,password){
    var authPromise = axios({
        method: 'POST',
        url: 'http://localhost:3000/users/login',
        data: {
            email: email,
            password: password
        }
    });
    return {
        type: 'LOGIN',
        payload: authPromise
    }
};

export function LogoutAction(){
    var payload = { isLoggedIn: false }
    return {
        type: 'LOGOUT',
        payload
    }
}