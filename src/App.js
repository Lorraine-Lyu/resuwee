import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
  render() {
    return (
      <div>
        <NavBar />
        <LeftPanel className = "LeftPanel"/>
        <RightPanel className = "RightPanel"/>
      </div>
    );
  }
}

class LeftPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = "LeftPanel">
          <p>Here is the left panel</p>
      </div>
    )
  }
}

class RightPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = "RightPanel">
          <p>Here is the Right Panel</p>
      </div>
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

class NavBarUnit extends Component {
    render() {
        return (<p>...</p>)
    }
}

export default App;
