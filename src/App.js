import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import './util.js';

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
    this.state = {
      rightIsExpanded: false,
      content: "This is the collapsed right panel",
    };

  }
  expandRight() {
    console.log(this.state.rightIsExpanded);
    this.setState({rightIsExpanded:!this.state.rightIsExpanded});
  };
  binded = this.expandRight.bind(this);
  render() {
      const newContent = "This is the expanded right panel";
      if(this.state.rightIsExpanded){
        const styleDiv = styled(RightPanel)`width:100%`;
        return(
        <div>
          <NavBar />
          <RightPanel className = "expanded" content = {newContent} expandRight = {this.binded} direction = "right" />
        </div>);
      } else{
        return(
        <div>
          <NavBar />
          <LeftPanel className = "LeftPanel"/>
          <RightPanel className = "RightPanel" content = {this.state.content} expandRight = {this.binded} direction = "left"/>
        </div>);
      }

  }
}

class LeftPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = "LeftPanel">
          <div className = "Personal Info">
            Name: <input type="text" name="name"></input><br></br>
            Birth Date: <input type="text" name="birth date"></input><br></br>
            <ContactList className="ContactList"></ContactList>
            Education: <input type="text" name="education"></input><br></br>
            Work Experience: <input type="text" name="work experience"></input><br></br>
            projects: <input type="text" name="projects"></input><br></br>

          </div>
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
        {this.props.direction == "right" ? (<i className="right" />) : (<i className="left"/>)}
      </button>
    )
      }
}


class contact{
  constructor(name ,link){
    this.name = name;
    this.link = link;
  }
}


class ContactList extends Component {
  constructor(props) {
    super(props);
    this.expand = this.expand.bind(this);
    this.add = this.add.bind(this);
    var c = new contact('other', 'None');
    this.state = {
      isOpen: true,
      menu :['other','phone','facebook', 'gmail','linkedin','instagram','qq','wechat'],
      info : [c],
    };
  }

  expand(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  add(){
    const newContact= new contact('other', 'None');
    const nlst = this.state.info;
    nlst.push(newContact);
    this.setState({
      info : nlst
    });
  }

  render(){
    const contacts = this.state.info;
    const allOptions = this.state.menu;
    const options = allOptions.map((option)=>
      <option value={option}>{option}</option>
  );
    const select = <select name='contactMethods'>{options}</select>
    const input = contacts.map((contact)=>
      <div className="contactUnit">
        {select}
        link: <input type="text" className="contactInput"></input>
      </div>
  );

    if(!this.state.isOpen) {
      return(
        <div className="closedContact">
          <p>Contact</p>
          <button className="expandBtn" onClick={this.expand}>Expand</button>
        </div>
      )
    }
    return (
      <div>
        <div className="openedContactTitle">
          <p>Contact</p>
          {select}
          <button className="addBtn" onClick={this.add}>add</button>
          <button className="expandBtn" onClick={this.expand}>Collapse</button>
        </div>
      </div>
    )
  }
}

class ContactUnit extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const allOptions = this.props.menu;
    const options = allOptions.map((option)=>
      <option value={option}>{option}</option>
  );
    const select = <select name='contactMethods'>{options}</select>
    return (
      <div className="contactUnit">
        {select}
        link: <input type="text" className="contactInput"></input>
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



export default App;
