import React, { useState } from 'react';
import { Button, Input, Select, Layout, Form, DatePicker} from 'element-react';
import 'element-theme-default';
import { connect } from 'react-redux';
import {editWork} from '../../store/actions';
import {workExperience} from '../util';

const WorkExperience = ({works, dispatch}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [count, setCount] = useState(1);
    const [workLst, setWorkLst] = useState(works);
    const toShow = workLst.map((work)=>{return <WorkUnit key={work.index+"unit"} index={work.index} work={work} remove={remove} update={update}></WorkUnit>});

    function switchState() {
        setIsOpen(!isOpen);
    }

    function add() {
        const newWork= new workExperience(count);
        setCount(count+1);
        var nlst = workLst.slice();
        nlst.push(newWork);
        setWorkLst(nlst)
        dispatch(editWork(nlst));
    }

    function update(index, obj) {
        var e;
        var nlst = workLst.slice();
        for (e of nlst) {
          if (e.index === index) {
            e = obj;
          }
        }
        setWorkLst(nlst);
        dispatch(editWork(nlst));
    }

    function remove(index){
        var nlst = workLst.slice();
        nlst = nlst.filter((i)=> {return i.index !== index})
        setWorkLst(nlst);
        dispatch(editWork(nlst));
    }

    if (!isOpen) {
        return (
            <Form.Item label="Work Experience ">
              <Button type="primary small" onClick={switchState}>Expand</Button>
            </Form.Item>
        )
    }
    return(
        <Form.Item label="Work Experience ">
            {toShow}
            <Button type="primary small" onClick={add}>Add</Button>
            <Button type="primary small" onClick={switchState}>Collapse</Button>
        </Form.Item>
    )
}

function WorkUnit(props){
    var index = props.index;
    var work = props.work;
    const update = props.update;
    const remove = props.remove;

    function onChange(value, key) {
        work[key] = value;
        update(work.index, work);
    }

    return(
        <div>
        <Form.Item label="Company Name: ">
          <Input placeholder="" value={work.company} onChange={(e)=>onChange(e, 'company') } key={props.index+"place1"}></Input>
        </Form.Item>
        <Form.Item label="Job Title ">
          <Input placeholder="" value={work.jobTitle} onChange={(e)=>onChange(e, 'jobTitle')} key={props.index+"position1"}></Input>
        </Form.Item>
        <Form.Item label="Time Span ">
          <Layout.Col span="3">
            <Form.Item labelWidth="0px">
              <DatePicker
                value={work.startDate}
                placeholder="Start Date"
                onChange={(e)=> onChange.bind(e, 'startDate')}
              />
            </Form.Item>
          </Layout.Col>
          <Layout.Col className="line" span="4">-</Layout.Col>
          <Layout.Col span="3">
            <Form.Item labelWidth="0px">
              <DatePicker
                value={work.endDate}
                placeholder="End Date"
                onChange={(e)=>onChange.bind(e, 'endDate')}
              />
            </Form.Item>
            </Layout.Col>
          </Form.Item>
        <Form.Item label="Job Dscription ">
          <Input placeholder=""  value={work.description} onChange={(e)=> onChange(e, "description")}></Input>
        </Form.Item>
        <Button type="text" icon="delete" onClick={() => {remove(index)}}></Button>
      </div>
    );
}

function mapStateToProps(state) {
    var works = state.updateUser.profile.workExperience;
    // console.log(eduExp);
    return {works};
}

export default connect(mapStateToProps)(WorkExperience);