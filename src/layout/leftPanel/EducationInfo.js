import React, { Component, useState} from 'react';
import {education} from '../util';
import { Button, Input, Select, Layout, Form, DatePicker} from 'element-react';
import 'element-theme-default';
import { editContact } from '../../store/actions';

const EducationInfo = ({dispatch}) => {
      var edu1 = new education(0);
      const [isOpen, setIsOpen] = useState(true);
      const [count, setCount] = useState(0);
      const [eduLst, setEduLst] = useState([edu1]);
      const toShow = eduLst.map((edu)=> <EducationUnit key={edu.index} value={edu} callBk={update}></EducationUnit>);

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

      function update() {
        console.log(update);
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
                  {toShow}
                  <Button type="primary small" onClick={add}>Add</Button>
                  <Button type="primary small" onClick={switchState}>Collapse</Button>
              </Form.Item>
          )
      }
}

function EducationUnit (props) {
  let edu = props.value;
  let index = props.index;
  let update = props.callBk;

  function onChange(key, value) {
    edu[key] = value;
    this.forceUpdate();
  };

  return(
    <div>
      <Form.Item label="所在学校： ">
        <Input placeholder="请输入就读学校名称"></Input>
      </Form.Item>
      <Form.Item label="时间： ">
        <Layout.Col span="8">
          <Form.Item labelWidth="0px">
            <DatePicker
              value={edu.startDate}
              placeholder="选择开始日期"
              onChange={onChange.bind(this, 'startDate')}
            />
          </Form.Item>
        </Layout.Col>
        <Layout.Col className="line" span="2">-</Layout.Col>
        <Layout.Col span="8">
          <Form.Item labelWidth="0px">
            <DatePicker
              value={edu.endDate}
              placeholder="选择结束日期"
              onChange={onChange.bind(this, 'endDate')}
            />
          </Form.Item>
          </Layout.Col>
        </Form.Item>
      <Form.Item label="专业： ">
        <Input placeholder="请输入主要专业"></Input>
      </Form.Item>
      <Form.Item label="专业课程： " key={index+"courses"}>
        <Input placeholder="请输入主要学习课程"></Input>
      </Form.Item>
    </div>

  );
}

export default EducationInfo;