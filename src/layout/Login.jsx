import React, { useState } from 'react';
import 'element-theme-default';
import {connect} from 'react-redux';
import API from '../api/api';
import { Redirect } from 'react-router-dom'
import {login, addPassword, addUsername, editName, editRegion, editContact, editEducation, editDate, editWork, editEducationInfo} from '../store/actions'
import {Card, Form, Input, Button} from 'element-react';

function Login ({dispatch, profile, style}) {
    let bio = profile;
    //register state variable, check react hook for detail
    const [mode, setMode] = useState("login"); //record the current mode (login or register)
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("Don't have an account"); //the text on transition button which trigger the switch between "login" and "register"
    const [back, setBack] = useState(false); //the variable recording whether user want to return to homepage
    const [warn, setWarn] = useState("");
    var userData;
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
            try {
                userData = await API.get('/login', {
                    params: {
                        "name": name,
                        "password":password,
                    }
                })
            }
        catch(e) {
            console.log(e);
        }
      
            console.log(userData);
            if (userData!=null && userData.status == 200) {
                setWarn("");
                setBack(true);
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
                dispatch(login());
            } else {
                setWarn("user not found");
            }
        } else {
            try {
                console.log(bio);
                userData = await API.post('/register', {
                    "name": name,
                    "password": password,
                    "profile":JSON.stringify(bio),
                    "style":JSON.stringify(style),
                })
            } catch(e) {
                console.log(e);
            }
            console.log(userData);
            if (userData!= null&&userData.status == 200) {
                console.log("here");
                setBack(true);
                dispatch(login());
                setWarn("register succeeded");
            } else {
                setWarn("registration failed, please contact developer")
            }
        }
        
    }
    console.log(back);
    if (back) {
        return <Redirect to="/"/>
    }
    return (
        <div className="loginPage">
            <Card className="login">
                <Form>
                    <Form.Item label="userName: ">
                        <Input onChange={e =>{ setName(e); dispatch(addUsername(e))}}>
                        </Input>
                    </Form.Item>
                    <Form.Item label="password:">
                        <Input onChange={e => {setPassword(e);dispatch(addPassword(e))}}>
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