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
      <div className = {props.className}>
          <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={onSelect.bind(this)}>
            <Menu.Item index="bio">基础信息</Menu.Item>
            <Menu.Item index="edu">学术经历</Menu.Item>
            <Menu.Item index="work">就业经历</Menu.Item>
          </Menu>
          {show}
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
  var user = state.updateUser.user;
  return {user};
}

export default connect(mapStateToProps)(RightPanel);