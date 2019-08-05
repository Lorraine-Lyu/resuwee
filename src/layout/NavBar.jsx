import React from 'react';
import 'element-theme-default';
import { connect } from 'react-redux';
import {Menu} from 'element-react';

const NavBar = ({login}) => {
  function onSelect() {
    return true;
  }
  var status;
  if (login) {
    status = "Logout";
  } else {
    status = "Login"
  }
  return(
    <div>
      <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" className="bg-light topNav" onSelect={onSelect}>
        <div className="navbar-brand">Resuwee</div>
        <Menu.Item index="1" className="nav-link">Donate</Menu.Item>
        <Menu.SubMenu index="2" title="Settings">
          <Menu.Item index="2-1">{status}</Menu.Item>
          <Menu.Item index="2-2">Help</Menu.Item>
          <Menu.Item index="2-3">选项3</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item index="3" className="nav-link">订单管理</Menu.Item>
      </Menu>
    </div>
  )

}

function mapStateToProps(state) {
  const login = state.loginInStatusChange.login;
  return {login};
}

export default connect(mapStateToProps)(NavBar);