import React, { Component, useState} from 'react';
import {education} from '../util';
import { Button, Input, Select, Layout, Form} from 'element-react';
import 'element-theme-default';

const EducationInfo = ({dispatch}) => {
      var edu1 = new education(0);
      const [isOpen, setIsOpen] = useState(true);
      const [count, setCount] = useState(0);
      const [eduLst, setEduLst] = useState([edu1])

      function switchState() {
        setIsOpen(!isOpen);
      }
    
      function add() {
        setCount(count+1);
        const newEdu= new education(count);
        var nlst = eduLst.slice();
        nlst.push(newEdu);
        setEduLst(nlst)
      }

      if(!isOpen) {
          return(
            <Form.Item label="学术经历 ">
              <Button type="primary small" onClick={switchState}>Expand</Button>
            </Form.Item>
          )
      } else {
          return(
              <Form.Item label="学术经历 ">
                  <Button type="primary small" onClick={add}>Add</Button>
                  <Button type="primary small" onClick={switchState}>Collapse</Button>
              </Form.Item>
          )
      }
}

class EducationUnit extends Component {
    constructor(props){
        super(props);
    }
}

export default EducationInfo;