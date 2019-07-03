import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './style/App.css';
import styled from 'styled-components';
import {contact, user, education} from './layout/util.js';
import LeftPanel from './layout/LeftPanel.js'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    var u = new user("Tim", "32");
    this.binded = this.expandRight.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      rightIsExpanded: false,
      content: "This is the collapsed right panel",
      user: u,
    };

  }
  expandRight() {
    console.log(this.state.rightIsExpanded);
    this.setState({rightIsExpanded:!this.state.rightIsExpanded});
  };

  update(event) {
      var newUser = JSON.parse(JSON.stringify(this.state.user));
      // console.log(event.target);
      newUser[event.target.name] = event.target.value;
      console.log(newUser);
      this.setState({
        user: newUser,
      });
      // console.log(this.state.user);
  }
  render() {
    // console.log(this.state.user);
      const newContent = "This is the expanded right panel";
      if(this.state.rightIsExpanded){
        const styleDiv = styled(RightPanel)`width:100%`;
        return(
        <div>
          <NavBar />
          <RightPanel className = "expanded" content = {newContent} profile={this.state.user} expandRight = {this.binded} direction = "right" />
        </div>);
      } else{
        return(
        <div>
          <NavBar />
          <LeftPanel className = "LeftPanel" profile={this.state.user} upd={this.update}/>
          <RightPanel className = "RightPanel" content = {this.state.content} profile={this.state.user} expandRight = {this.binded} direction = "left"/>
        </div>);
      }

  }
}


class RightPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = {this.props.className}>
          <CollapseBtn  direction = {this.props.direction} expandRight = {this.props.expandRight}/>
          <p>{this.props.content}</p>
      </div>
    )
  }
}

class CollapseBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightIsExpanded:true,
    }
  }

  render() {
    // console.log(this.props.direction);
    return(
      <button className={"triangle-" + this.props.direction} onClick = {()=>this.props.expandRight()}>
        {this.props.direction === "right" ? (<i className="right" />) : (<i className="left"/>)}
      </button>
    )
      }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="topNav">
          <NavbarBrand href="/">Resuwee</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink href="/components/">Edit Mode</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Resume Generator</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Donate</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Settings
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Help
                  </DropdownItem>
                  <DropdownItem>
                    My Profile
                  </DropdownItem>
                  <DropdownItem>
                    Manage Resumes
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



export default App;
