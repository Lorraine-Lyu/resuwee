import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import { Menu} from 'element-react';
import API from '../api/api';
import Bio from './rightPanel/Bio';
import Edu from './rightPanel/Edu';
import Work from './rightPanel/Work';
import {editName, editContact, editDate, editEducation, editEducationInfo, editRegion, editWork} from '../store/actions'
// import 'element-theme-default';

function View(props, {user, login, dispatch}) {
  console.log(props.location.pathname);
  var name = props.location.pathname.split("/")[-1];
  if (!login) {
    getData();
  }
  async function getData(){
    let userData = await API.get('/view', {
      params: {
          "name": name,
      }
    })
    if (userData.status == 200) {
      var profile = userData.data;
      dispatch(editName(profile.name));
      dispatch(editRegion(profile.region));
      dispatch(editEducation(profile.education))
      dispatch(editContact(profile.contact));
      dispatch(editDate(new Date(profile.date)));
      dispatch(editEducationInfo(profile.educationExperience));
      dispatch(editWork(profile.workExperience));
    }
  }
  const [page, setPage] = useState("bio"); //three states (bio, edu, work)
  var show;
  if (page === "bio") {
      show = <Bio></Bio>;
  } else if (page=== "edu") {
      show = <Edu></Edu>;
  } else if (page === "work") {
      show = <Work></Work>
  }

    function onSelect(e) {
      setPage(e);
    };

    return(
      <div className = {props.className}>
          <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={onSelect.bind(this)}>
            <Menu.Item index="bio">基础信息</Menu.Item>
            <Menu.Item index="edu">学术经历</Menu.Item>
            <Menu.Item index="work">就业经历</Menu.Item>
          </Menu>
          {show}
      </div>
    )
}

function mapStateToProps(state) {
  var user = state.updateUser.profile;
  var login = state.loginStatusChange.login;
  return {user, login};
}

export default withRouter(connect(mapStateToProps)(View));