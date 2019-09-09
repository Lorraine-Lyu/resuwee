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
        <Form labelWidth="90">
          <Form.Item label="Name ">
            <Input value={name} placeholder="Please input your name" onChange={(e)=> {setName(e); dispatch(editName(e));}}></Input>
          </Form.Item>
          <Form.Item label="Region ">
            <Select placeholder="The Earth" value={region} onChange={(e)=> {setRegion(e); dispatch(editRegion(e))}}>
              <Select.Option label="Shanghai" value="Shanghai"></Select.Option>
              <Select.Option label="Beijing" value="Beijing"></Select.Option>
              <Select.Option label="Guangdong" value="Guangdong"></Select.Option>
              <Select.Option label="Bay Area" value="Bay Area"></Select.Option>
              <Select.Option label="East Coast" value="East Coast"></Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Birthdate ">
              <DatePicker
                  selectionMode="month"
                  value={date}
                  placeholder="PLease choose month and year"
                  onChange={(e)=> {setDate(e); dispatch(editDate(e))}}
                />
          </Form.Item>
          <Form.Item label="Education ">
            <Select value={edu} placeholder="Please input your highest education level" onChange={(e)=>{setEdu(e); dispatch(editEducation(e))}}>
              <Select.Option label="Junor High" value="Junor High"></Select.Option>
              <Select.Option label="Senior High" value="Senior High"></Select.Option>
              <Select.Option label="Bachelor" value="Bachelor"></Select.Option>
              <Select.Option label="Master" value="Master"></Select.Option>
              <Select.Option label="phD or higher" value="phD or higher"></Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Contact ">
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
            <Button type="primary" onClick={submitEdit}>Deploy my Webpage</Button>
            <Button>Cancel</Button>
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