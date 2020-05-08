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

// the component in the left panel containing all input text areas.
// the input (i.e. name, region, birthdate etc. ) are provided by redux(the global variable manager) before InfoForm is rendered, see the bottom of the file
  const InfoForm = ({Name, Region, birthDate, Edu, dispatch, login, profile, username, password}) => {
    
    //React Hook demo
    //all variables here are local variables, their status are monitored by react
    //once one of their value is changed, the entire info form is re-rendered
    const [name, setName] = useState(Name);
    const [region, setRegion] = useState(Region);
    const [date, setDate] = useState(birthDate);
    const [edu, setEdu] = useState(Edu);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [redirect, setRedirect] = useState(false);

    //API Demo
    //When the user clicked "Deploy My Webpage"
    //send request to backend server to update user's data
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

    //Router Demo
    //redirect to the login page if the login button is selected
    if (redirect) {
      return <Redirect to="/login" />
    }

    // The actual definition for infoForm component
    // The html <InfoForm props1=xxx props2=xxx><\InfoForm> actually refers to the code below
    // include all html (capsulated by react) sub-components in Infoform
    // The compoennt <From>, <Select>, <Dialog>, <Button>, <DatePicker> are imported from Element Ui react library
    // The component <ContactList> <EducationInfo> <WorkExperience> are defined in the same directory
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

  //Redux demo:
  // before the element (InfoForm) is rendered, it needs to get user's info from the 
  // global state, this function retrieves all information from the global state 
  // and map it to the argument in the constuctor of InfoForm.
  // @arg state: the global state passed in by redux(not sure)
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

  //for redux: connect Infoform to redux global state manager
  export default connect(mapStateToProps)(InfoForm);