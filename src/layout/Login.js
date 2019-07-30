import React, { useState } from 'react';
import {Card, Form, Input, Button} from 'element-react';

function Login (props) {
    const [mode, setMode] = useState(props.mode);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");
    function changeMode() {
        if (mode == "login") {
            this.setMode("register");
            this.setText("Already have account?")
        } else {
            this.setMode("login");
            this.setText("Don't have an account")
        }
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
                <Button text onClick="changeMode">{text}</Button>
                <Button onClick={validateLogin({name: name, password: password})}>{mode}</Button>
            </Form>
        </Card>
    )
}