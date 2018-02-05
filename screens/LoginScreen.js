import React from 'react';

import AuthContainer from '../containers/AuthContainer';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none',
        }
    };

    render() {
        return (
            <AuthContainer screen={'login'} />
        );
    };
};