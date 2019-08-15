import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Menu, Message, Card} from 'element-react';
import API from '../api/api';
import Bio from './rightPanel/Bio';
import Edu from './rightPanel/Edu';
import Work from './rightPanel/Work';
import {editName, editContact, editDate, editEducation, editEducationInfo, editRegion, editWork} from '../store/actions'
// import 'element-theme-default';

function View(props, {user, login, dispatch}) {
  console.log(window.location.href);
  const container = props.dispatch;
  console.log(container);
  // console.log(props.location.pathname);
  // props.dispatch(editName("test"));
  const path = props.location.pathname.split("/");
  const name = path[2];
  const [profile, setProfile] = useState(user);
  const [bio, setBio] = useState("");

  useEffect(()=>{
    async function fetchData(){
      let userData = await API.get('/view', {
        params: {
            "name": name,
        }
      })
      // console.log(userData);
      if (userData.status == 200) {
        var temp = JSON.parse(userData.data.profile);
        setProfile(userData.data.profile);
        // console.log(profile);
        // setName(userData.data.profile.name);
        console.log(temp);
        container(editName(temp.name));
        container(editRegion(temp.region));
        container(editEducation(temp.education));
        container(editContact(temp.contact));
        container(editWork(temp.workExperience));
        container(editEducationInfo(temp.educationExperience));
      } else {
        Message({
          showClose: true,
          message: 'Network Error',
          type: 'error'
        });
      }

    }
    fetchData();
  }, [])
  
  const [page, setPage] = useState("bio"); //three states (bio, edu, work)
  var show;
  // console.log(profile);
  if (page === "bio") {
      show = <Bio></Bio>
      // dispatch(editName("test"));
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

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    // dispatching plain actions
    // setName: (e) => dispatch(editName(e)),
    // setRegion: (e) => dispatch(editRegion(e)),
    // setEducation: (e) => dispatch(editEducation(e))
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(View);