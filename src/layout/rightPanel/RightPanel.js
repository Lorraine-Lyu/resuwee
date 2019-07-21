import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Menu, Button} from 'element-react';
import Contacts from './Contacts';
import 'element-theme-default';

function RightPanel(props) {
    return(
      <div className = {props.className}>
          <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" >
            <Menu.Item index="1">基础信息</Menu.Item>
            <Menu.Item index="2">学术经历</Menu.Item>
            <Menu.Item index="3">就业经历</Menu.Item>
          </Menu>
          <Contacts></Contacts>
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