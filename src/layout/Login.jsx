import React, { useState } from 'react';
import 'element-theme-default';
import {connect} from 'react-redux';
import API from '../api/api';
import { Redirect } from 'react-router-dom'
import {login, addPassword, addUsername, editName, editRegion, editContact, editEducation, editDate, editWork, editEducationInfo} from '../store/actions'
import {Card, Form, Input, Button} from 'element-react';

function Login ({dispatch, profile, style}) {
    //register state variable, check react hook for detail
    const [mode, setMode] = useState("login"); //record the current mode (login or register)
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("Don't have an account"); //the text on transition button which trigger the switch between "login" and "register"
    const [back, setBack] = useState(false); //the variable recording whether user want to return to homepage
    const [warn, setWarn] = useState("");
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
        if (mode === "login") {
            let userData = await API.get('/login', {
                params: {
                    "name": name,
                    "password":password,
                }
            })
            // console.log(userData);
            if (userData.status == 200) {
                setWarn("");
                var profile = JSON.parse(userData.data.profile);
                // console.log(profile);
                dispatch(editName(profile.name));
                dispatch(editRegion(profile.region));
                dispatch(editEducation(profile.education))
                dispatch(editContact(profile.contact));
                dispatch(editDate(new Date(profile.date)));
                dispatch(editEducationInfo(profile.educationExperience));
                dispatch(editWork(profile.workExperience));
                // dispatch(overWriteAll(userData.data));
                setBack(true);
                dispatch(login());
            } else {
                setWarn("user not found");
            }
        } else {
            let userData = await API.post('/register', {
                    "name": name,
                    "password": password,
                    "profile":JSON.stringify(profile),
                    "style":JSON.stringify(style),
                })
            // console.log(userData);
            if (userData.status == 200) {
                setWarn("register succeeded");
                setBack(true);
                dispatch(login());
            } else {
                setWarn("registration failed, please contact developer")
            }
        }
        
    }

    if (back) {
        return <Redirect to="/"/>
    }
    return (
        <div className="loginPage">
            <Card className="login">
                <Form>
                    <Form.Item label="userName: ">
                        <Input onChange={e =>{ setName(e); dispatch(addPassword(e))}}>
                        </Input>
                    </Form.Item>
                    <Form.Item label="password:">
                        <Input onChange={e => {setPassword(e);dispatch(addUsername(e))}}>
                        </Input>
                    </Form.Item>
                    <Button plain onClick={changeMode}>{text}</Button>
                    <Button onClick={validateLogin}>{mode}</Button>
                    <Button onClick={()=>setBack(true)}>back</Button>
                    <div>{warn}</div>
                </Form>
            </Card>
        </div>
    )
}

//this function is a helper function of connect(). It extract the variable required to render this component(Login)
function mapStateToProps(state) {
    var profile = state.updateUser.profile;
    var style = state.updateStyle.style;
    return {profile, style};
  }

  //connect()(component) connects the component to the global state, which records all global variables 
export default connect(mapStateToProps)(Login);