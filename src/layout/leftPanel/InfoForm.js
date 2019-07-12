import React, { useState } from 'react';
import ContactList from './ContactList';
import EducationInfo from './EducationInfo';
import WorkExperience from './WorkExperience';
import { connect } from 'react-redux'
import {editName, editRegion, editDate, editEducation} from '../../store/actions';
import { Button, Form, Input, Select, DatePicker } from 'element-react';
import 'element-theme-default';

  const InfoForm = ({Name, Region, birthDate, Edu, dispatch}) => {
    const [name, setName] = useState(Name);
    const [region, setRegion] = useState(Region);
    const [date, setDate] = useState(birthDate);
    const [edu, setEdu] = useState(Edu);

      return (
        <Form labelWidth="70">
          <Form.Item label="姓名 ">
            <Input value={name} placeholder="请输入您的姓名" onChange={(e)=> {setName(e); dispatch(editName(e));}}></Input>
          </Form.Item>
          <Form.Item label="所在地 ">
            <Select placeholder="请选择活动区域" value={region} onChange={(e)=> {setRegion(e); dispatch(editRegion(e))}}>
              <Select.Option label="上海" value="shanghai"></Select.Option>
              <Select.Option label="北京" value="beijing"></Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="出生年月 ">
              <DatePicker
                  value={date}
                  placeholder="选择日期"
                  onChange={(e)=> {setDate(e); dispatch(editDate(e))}}
                />
          </Form.Item>
          <Form.Item label="学历 ">
            <Select value={edu} placeholder="请选择您的最高学历" onChange={(e)=>{setEdu(e); dispatch(editEducation({edu}))}}>
              <Select.Option label="初中" value="初中"></Select.Option>
              <Select.Option label="高中" value="高中"></Select.Option>
              <Select.Option label="本科" value="本科"></Select.Option>
              <Select.Option label="研究生" value="研究生"></Select.Option>
              <Select.Option label="硕士" value="硕士"></Select.Option>
              <Select.Option label="博士及以上" value="博士及以上"></Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="联系方式 ">
            <ContactList></ContactList>
          </Form.Item>
          <EducationInfo></EducationInfo>
          <WorkExperience></WorkExperience>
          <Form.Item>
            <Button type="primary" nativeType="submit">立即创建</Button>
            <Button>取消</Button>
          </Form.Item>
        </Form>
      )
  }

  function mapStateToProps(state) {
    var user = state.updateUser.user;
    return {
      Name: user.name,
      birthDate: user.date,
      Region: user.region,
      Edu: user.education
      }
  }

  export default connect(mapStateToProps)(InfoForm);