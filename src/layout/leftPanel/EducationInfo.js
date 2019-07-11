import React, { Component, useState} from 'react';
import {education, user} from '../util';
import { Button, Input, Select, Layout, Form, DatePicker} from 'element-react';
import 'element-theme-default';
import { editEducationInfo } from '../../store/actions';
import { connect } from 'react-redux';
import { store } from '../../store';

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
        dispatch(editEducationInfo(nlst));
      }

      function update(index, obj) {
        var e;
        var nlst = eduLst.slice();
        for (e of nlst) {
          if (e.index === index) {
            e = JSON.parse(JSON.stringify(obj));
          }
        }
        setEduLst(nlst);
        dispatch(editEducationInfo(nlst));
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

  function onChange(value, key) {
    edu[key] = value;
    update(index, edu);
    // forceUpdate();
  };

  return(
    <div>
      <Form.Item label="所在学校： ">
        <Input placeholder="请输入就读学校名称" onChange={(e)=>onChange(e, 'school')}></Input>
      </Form.Item>
      <Form.Item label="时间： ">
        <Layout.Col span="8">
          <Form.Item labelWidth="0px">
            <DatePicker
              value={edu.startDate}
              placeholder="选择开始日期"
              onChange={(e)=> onChange.bind(e, 'startDate')}
            />
          </Form.Item>
        </Layout.Col>
        <Layout.Col className="line" span="2">-</Layout.Col>
        <Layout.Col span="8">
          <Form.Item labelWidth="0px">
            <DatePicker
              value={edu.endDate}
              placeholder="选择结束日期"
              onChange={(e)=>onChange.bind(e, 'endDate')}
            />
          </Form.Item>
          </Layout.Col>
        </Form.Item>
      <Form.Item label="专业： ">
        <Input placeholder="请输入主要专业"></Input>
      </Form.Item>
      <Form.Item label="专业课程： " onChange={(e)=> onChange(e, "courses")}>
        <Input placeholder="请输入主要学习课程"></Input>
      </Form.Item>
    </div>

  );
}

function mapStateToProps(state) {
    // console.log();
    var {user} = state.updateUser.user.educationExperience;
    return {user};
}

export default connect(mapStateToProps)(EducationInfo);