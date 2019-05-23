import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {contact, user, education} from './util.js';

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
          <LeftPanel className = "LeftPanel" profile={this.state.user}/>
          <RightPanel className = "RightPanel" content = {this.state.content} profile={this.state.user} expandRight = {this.binded} direction = "left"/>
        </div>);
      }

  }
}

class LeftPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.profile);
    return(

      <div className = "LeftPanel">
          <div className = "Personal Info">
            Name: <input type="text" name="name" value={this.props.profile.name}></input><br></br>
          Birth Date: <input type="text" name="birth date" value={this.props.profile.age}></input><br></br>
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
        {this.props.direction === "right" ? (<i className="right" />) : (<i className="left"/>)}
      </button>
    )
      }
}

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.expand = this.expand.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    var c = new contact(1, 'other', 'None');
    this.state = {
      isOpen: true,
      menu :['other','phone','facebook', 'gmail','linkedin','instagram','qq','wechat'],
      info : [c],
      count : 1,
    };
  }

  expand(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  add(){
    const newContact= new contact(this.state.count+1,'other', 'None');
    const nlst = this.state.info;
    nlst.push(newContact);
    this.setState({
      info : nlst,
      count:this.state.count+1,
    });
  }

  update(index,type,value){
    const lst = this.state.info;
    console.log(index);
    var c;
      for (c of lst) {
        if (c.index === index) {
          if(type ===  'n') {
            c.name = value;
          } else {
            c.value = value;
          }
        }
      }
    }




  render(){
    const contacts = this.state.info;
    const input = contacts.map((contact)=>
      <ContactUnit menu={this.state.menu} key={contact.index+'unit'} value={contact} callBk={this.update}></ContactUnit>
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
          {input}
          <button className="addBtn" onClick={this.add}>Add</button>
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
    const curr = this.props.value.index;
    const update = this.props.callBk;
    const options = allOptions.map(function(option,curr,update){
      if (option === curr) {
        return <option value={option} key={curr} selected >{option}</option>
      } else {
        return <option value={option} key={curr}>{option}</option>
      }
    }

  );
    console.log(curr);
    const select = <select name='contactMethods' key={curr+'select'} onChange={update(curr, 'n', this.value)}>{options}</select>
    return (
      <div className="contactUnit" key={this.props.index+'div'}>
        {select}
        link: <input type="text" className="contactInput" key={curr+'input'} value={this.props.value.link} onChange={update(curr, 'l', this.value)}></input>
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
