import React, { useState } from 'react';
import 'element-theme-default';
import {connect} from 'react-redux';
import API from '../api/api';
import { Redirect } from 'react-router-dom'
import {Card, Form, Input, Button} from 'element-react';

function Login (props) {
    //register state variable, check react hook for detail
    const [mode, setMode] = useState("login"); //record the current mode (login or register)
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("Don't have an account"); //the text on transition button which trigger the switch between "login" and "register"
    const [back, setBack] = useState(false); //the variable recording whether user want to return to homepage
    function changeMode() {
        if (mode === "login") {
            setMode("register");
            setText("Already have account?")
        } else {
            setMode("login");
            setText("Don't have an account")
        }
    }

    async function validateLogin() {  
            // Load async data.
        let userData = await API.get('/login', {
            params: {
                "name": name,
                "password":password,
            }
        })
        console.log(userData);
    }

    if (back) {
        return <Redirect to="/"/>
    }
    return (
        <div className="loginPage">
            <Card className="login">
                <Form>
                    <Form.Item label="userName: ">
                        <Input onChange={e => setName(e)}>
                        </Input>
                    </Form.Item>
                    <Form.Item label="password:">
                        <Input onChange={e => setPassword(e)}>
                        </Input>
                    </Form.Item>
                    <Button plain onClick={changeMode}>{text}</Button>
                    <Button onClick={validateLogin}>{mode}</Button>
                    <Button onClick={()=>setBack(true)}>back</Button>
                </Form>
            </Card>
        </div>
    )
}

//this function is a helper function of connect(). It extract the variable required to render this component(Login)
function mapStateToProps(state) {
    // var login = state.loginStatusChange.login;
    return {};
  } //后来我发现login这个component不需要参考全局变量。。但是它需要修改全局变量，所以还是把connect写上了

  //connect()(component) connects the component to the global state, which records all global variables 
export default connect(mapStateToProps)(Login);