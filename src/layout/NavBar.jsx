import React, {useState} from 'react';
import 'element-theme-default';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import {Menu, Dialog, Button} from 'element-react';

const NavBar = ({login, name}) => {
  const [needToLogin, setNeedToLogin] = useState(login);
  const [redirectToView, setRedirectToView] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [needToLogOut, setNeedToLogOut] = useState(false);

  function onSelect(e) {
    if (e==="2-1" ) {
      if (!login) { setNeedToLogin(!needToLogin) }
      else {
        setNeedToLogOut(true);
        // setNeedToLogin(true);
      }     
    } else if (e==='1') {
      if (!login) {
        setDialogVisible(true);
        // setNeedToLogin(true);
      } else {
        setRedirectToView(true);
      }
    }
  }

  var status = login ? "log out":"login"
  if (needToLogin) {
    return (<Redirect to="/login"></Redirect>)
  } else if (redirectToView) {
    return (<Redirect to={"/home/"+name} />)
  } else if (needToLogOut) {
    return (<Redirect to="/"></Redirect>)
  }
  return(
    <div>
      <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" className="bg-light topNav" onSelect={onSelect}>
        <div className="navbar-brand">Cloud Resume</div>
        <Menu.Item index="1" className="nav-link">Visit My Webpage</Menu.Item>
        <Menu.Item index="2-1" className="nav-link">{status}</Menu.Item>
        {/* <Menu.SubMenu index="2" className="nav-link" title="About">
          <Menu.Item index="2-2">Help</Menu.Item>
          <Menu.Item index="2-3">Contact Us</Menu.Item>
        </Menu.SubMenu> */}
        {/* <Menu.Item index="3" className="nav-link">Donate</Menu.Item> */}
        <Dialog
            title="Alert"
            size="small"
            visible={ dialogVisible }
            onCancel={ () => setDialogVisible(false) }
            lockScroll={ false }
          >
            <Dialog.Body>
              <span>Please login before you can preview your webpage</span>
            </Dialog.Body>
            <Dialog.Footer className="dialog-footer">
              <Button onClick={ () => setDialogVisible(false)}>Cancel</Button>
              <Button type="primary" onClick={ () => {setDialogVisible(false); setNeedToLogin(true) }}>Login or Register</Button>
            </Dialog.Footer>
          </Dialog>
      </Menu>
    </div>
  )

}

function mapStateToProps(state) {
  const login = state.loginStatusChange.login;
  const name = state.updateUser.name;
  return {login,name};
}

export default connect(mapStateToProps)(NavBar);