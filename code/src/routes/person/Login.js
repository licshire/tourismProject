import React from 'react';
import {connect} from 'react-redux';

class Login extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>Login</div>
        )
    }
}


export default connect()(Login);