import React, { useState} from 'react';
import {education} from '../util';
import { Button, Input, Select, Layout, Form, DatePicker} from 'element-react';
import 'element-theme-default';
import { editEducationInfo } from '../../store/actions';
import { connect } from 'react-redux';

const EducationInfo = ({eduExp, dispatch}) => {
      var edu1 = eduExp;
      // console.log(eduExp);
      const [isOpen, setIsOpen] = useState(true);
      const [count, setCount] = useState(1);
      const [eduLst, setEduLst] = useState(edu1);
      const toShow = eduLst.map((eduUnit)=> {return <EducationUnit key={eduUnit.index} index={eduUnit.index} value={eduUnit} callBk={update} delete={remove}></EducationUnit>});

      function switchState() {
        setIsOpen(!isOpen);
      }
    
      function add() {

        const newEdu= new education(count);
        setCount(count+1);
        var nlst = eduLst.slice();
        nlst.push(newEdu);
        setEduLst(nlst)
        dispatch(editEducationInfo(nlst));
      };

      function remove(index) {
        var nlst = eduLst.slice();
        nlst = nlst.filter((i)=> {return i.index != index})
        setEduLst(nlst);
        dispatch(editEducationInfo(nlst));
      };

      function update(index, obj) {
        var e;
        var nlst = eduLst.slice();
        // console.log(obj);
        for (e of nlst) {
          if (e.index === index) {
            e = obj;
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
  let eduUnit = props.value;
  let index = props.index;
  let update = props.callBk;
  let remove = props.delete;

  function onChange(value, key) {
    eduUnit[key] = value;
    update(eduUnit.index, eduUnit);
    // forceUpdate();
  };

  return(
    <div>
      <Form.Item label="所在学校： ">
        <Input placeholder="请输入就读学校名称" value={eduUnit.school} onChange={(e)=>onChange(e, 'school')}></Input>
      </Form.Item>
      <Form.Item label="时间： ">
        <Layout.Col span="5">
          <Form.Item labelWidth="0px">
            <DatePicker
              value={eduUnit.startDate}
              placeholder="选择开始日期"
              onChange={(e)=> onChange.bind(e, 'startDate')}
            />
          </Form.Item>
        </Layout.Col>
        <Layout.Col className="line" span="1">-</Layout.Col>
        <Layout.Col span="5">
          <Form.Item labelWidth="0px">
            <DatePicker
              value={eduUnit.endDate}
              placeholder="选择结束日期"
              onChange={(e)=>onChange.bind(e, 'endDate')}
            />
          </Form.Item>
          </Layout.Col>
        </Form.Item>
      <Form.Item label="专业： ">
        <Input placeholder="请输入主要专业" value={eduUnit.major} onChange={(e)=> onChange(e, 'major')}></Input>
      </Form.Item>
      <Form.Item label="专业课程： ">
        <Input placeholder="请输入主要学习课程"  value={eduUnit.courses} onChange={(e)=> onChange(e, "courses")}></Input>
      </Form.Item>
      <Button type="text" icon="delete" onClick={() => {remove(index)}}></Button>
    </div>
  );
}

function mapStateToProps(state) {
    var eduExp = state.updateUser.profile.educationExperience;
    // console.log(eduExp);
    return {eduExp};
}

export default connect(mapStateToProps)(EducationInfo);