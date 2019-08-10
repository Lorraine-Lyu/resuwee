import React, { useState } from 'react';
import 'element-theme-default';
import {connect} from 'react-redux'
import {Card, Form, Input, Button} from 'element-react';

function Login ({login}) {
    const [mode, setMode] = useState((login)=>{return login? "login": "register"});
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState((login)=>{return login? "Don't have an account":"Already have account?"});
    function changeMode() {
        if (mode == "login") {
            setMode("register");
            setText("Already have account?")
        } else {
            setMode("login");
            setText("Don't have an account")
        }
    }

    function validateLogin() {
        return true;
    }

    return (
        <Card className="login">
            <Form>
                <Form.Item label="userName: ">
                    <Input onChange={e => setName(e)}>
                    </Input>
                </Form.Item>
                <Form.Item label="password:">
                    <Input type="password" onChange={e => setPassword(e)}>
                    </Input>
                </Form.Item>
                <Button plain onClick={changeMode}>{text}</Button>
                <Button onClick={validateLogin}>{mode}</Button>
            </Form>
        </Card>
    )
}

//this function is a helper function of connect(). It extract the variable required to render this component(Login)
function mapStateToProps(state) {
    var login = state.loginStatusChange.login;
    return {login};
  }

  //connect()(component) connects the component to the global state, which records all global variables 
export default connect(mapStateToProps)(Login);