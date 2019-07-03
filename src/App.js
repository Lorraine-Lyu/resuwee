import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './style/App.css';
import styled from 'styled-components';
import {user} from './layout/util';
import LeftPanel from './layout/LeftPanel'
import RightPanel from './layout/RightPanel'
import NavBar from './layout/NavBar'




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





export default App;
