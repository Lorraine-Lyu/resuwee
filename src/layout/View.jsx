import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Menu, Button} from 'element-react';
import Contacts from './Contacts';
import Bio from './rightPanel/Bio';
import Edu from './rightPanel/Edu';
// import 'element-theme-default';

function RightPanel({user}) {
    const [page, setPage] = useState("bio"); //three states (bio, edu, work)
    var show;
    if (page === "bio") {
        show = <Bio></Bio>;
    } else if (page=== "edu") {
        show = <Edu></Edu>;
    }
    return(
      <div className = {props.className}>
          <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" >
            <Menu.Item index="1">基础信息</Menu.Item>
            <Menu.Item index="2">学术经历</Menu.Item>
            <Menu.Item index="3">就业经历</Menu.Item>
          </Menu>
          {show}
          <Contacts></Contacts>
      </div>
    )
}

function mapStateToProps(state) {
  var user = state.updateUser.user;
  return {user};
}

export default connect(mapStateToProps)(RightPanel);