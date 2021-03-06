import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { Menu, Button} from 'element-react';
import Bio from './Bio';
import Edu from './Edu';
import Work from './Work';
// import 'element-theme-default';

function RightPanel(props, {user}) {
  const [page, setPage] = useState("bio"); //three states (bio, edu, work)
  var show;
  if (page === "bio") {
      show = <Bio></Bio>;
  } else if (page=== "edu") {
      show = <Edu></Edu>;
  } else if (page === "work") {
      show = <Work></Work>
  }

  // useEffect(() =>{
  //     // console.log("update")
  //   }
  // );

    function onSelect(e) {
      setPage(e);
    };

    return(
      <div className = "RightPanel">
          <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={onSelect.bind(this)}>
            <Menu.Item index="bio">Basic Info</Menu.Item>
            <Menu.Item index="edu">Education</Menu.Item>
            <Menu.Item index="work">Work Experience</Menu.Item>
          </Menu>
          <div className="right-panel-body">
            {show}
          </div>
          <CollapseBtn expandRight = {props.expandRight}/>
      </div>
    )
}

function CollapseBtn(props) {
    return(
      <Button  type="primary" onClick = {()=>props.expandRight()} icon="view">
      </Button>
    )
}

function mapStateToProps(state) {
  var user = state.updateUser.profile;
  return {user};
}

export default connect(mapStateToProps)(RightPanel);