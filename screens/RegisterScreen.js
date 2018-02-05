import React from 'react';

import AuthContainer from '../containers/AuthContainer';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none',
        }
    };

    render() {
        return (
            <AuthContainer screen={'register'} />
        );
    };
};