import React, { useState } from 'react';
import ContactList from './ContactList';
import EducationInfo from './EducationInfo';
import WorkExperience from './WorkExperience';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import API from '../../api/api';
import {editName, editRegion, editDate, editEducation} from '../../store/actions';
import { Button, Form, Input, Select, DatePicker, Dialog, Message} from 'element-react';
import 'element-theme-default';

  const InfoForm = ({Name, Region, birthDate, Edu, dispatch, login, profile, username, password}) => {
    const [name, setName] = useState(Name);
    const [region, setRegion] = useState(Region);
    const [date, setDate] = useState(birthDate);
    const [edu, setEdu] = useState(Edu);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [redirect, setRedirect] = useState(false);

    async function submitEdit() {
      if(!login) {
        setDialogVisible(true);
      } else { 
        let response = await API.post('/edit', {
          "name": username,
          "password": password,
          "profile": JSON.stringify(profile),
        });
        console.log(response);
        if (response.status == 200 && response.data.affectedRows == 1) {
          Message({
            message: "Your profile has been updated.",
            type: "success"});
        } else {
          Message({
            message: 'Profile update failed',
            type: 'warning'
          });
        }
      }
    }

    if (redirect) {
      return <Redirect to="/login" />
    }

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
            <Select value={edu} placeholder="请选择您的最高学历" onChange={(e)=>{setEdu(e); dispatch(editEducation(e))}}>
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
          <Dialog
            title="Alert"
            size="small"
            visible={ dialogVisible }
            onCancel={ () => setDialogVisible(false) }
            lockScroll={ false }
          >
            <Dialog.Body>
              <span>Please login before you update your webpage content</span>
            </Dialog.Body>
            <Dialog.Footer className="dialog-footer">
              <Button onClick={ () => setDialogVisible(false)}>Cancel</Button>
              <Button type="primary" onClick={ () => {setDialogVisible(false); setRedirect(true) }}>Login or Register</Button>
            </Dialog.Footer>
          </Dialog>
          <Form.Item>
            <Button type="primary" onClick={submitEdit}>立即创建</Button>
            <Button>取消</Button>
          </Form.Item>
        </Form>
      )
  }

  function mapStateToProps(state) {
    var user = state.updateUser.profile;
    var login = state.loginStatusChange.login;
    var username = state.loginStatusChange.name;
    var password = state.loginStatusChange.password;
    return {
      profile: user,
      username,
      password,
      Name: user.name,
      birthDate: user.date,
      Region: user.region,
      Edu: user.education,
      login
      }
  }

  export default connect(mapStateToProps)(InfoForm);