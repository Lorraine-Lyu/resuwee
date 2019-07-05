import React, { Component } from 'react';
import {education} from '../util';
import { Button, Input, Select, Layout, Form} from 'element-react';
import 'element-theme-default';

class EducationInfo extends Component {
    constructor(props) {
      super(props);
      this.expand = this.expand.bind(this);
      this.add = this.add.bind(this);
      this.state = {
        isOpen: true,
        lst: this.props.parentEducation,
      }
    }

    expand(){
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
      add(){
        const newEdu= new education(this.state.count+1,'other', 'None');
        const nlst = this.state.info;
        nlst.push(newEdu);
        this.setState({
          info : nlst,
          count:this.state.count+1,
        });
      }

    render() {
        if(!this.state.isOpen) {
            return(
                <Button type="primary small" onClick={this.expand}>Expand</Button>
            )
        } else {
            return(
                <Form.Item label="学术经历 ">
                    <Button type="primary small" onClick={this.add}>Add</Button>
                    <Button type="primary small" onClick={this.expand}>Collapse</Button>
                </Form.Item>
            )
        }
    }
}

class EducationUnit extends Component {
    constructor(props){
        super(props);
    }
}

export default EducationInfo;