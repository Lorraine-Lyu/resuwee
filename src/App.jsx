import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './style/App.css';
import LeftPanel from './layout/leftPanel/LeftPanel'
import RightPanel from './layout/rightPanel/RightPanel'
import NavBar from './layout/NavBar'
import { Layout } from 'element-react';
import 'element-theme-default';
import { connect } from 'react-redux';



class App extends Component {
  constructor(props){
    super(props);
    this.binded = this.expandRight.bind(this);
    this.state = {
      rightIsExpanded: false,
    };

  }
  expandRight() {
    this.setState({rightIsExpanded:!this.state.rightIsExpanded});
  };

  render() {
      if(this.state.rightIsExpanded){
        return(
        <div>
          <NavBar />
          <Layout.Col span='24'>
            <RightPanel className = "expanded" expandRight = {this.binded}/>  
          </Layout.Col>
          
        </div>);
      } else {
        return(
        <div>
          <NavBar />
          <Layout.Col span='12'>
            <LeftPanel className="LeftPanel"/>
          </Layout.Col>
          <Layout.Col span="12">
            <RightPanel className="RightPanel" expandRight = {this.binded}/>
          </Layout.Col>
        </div>);
      }

  }
}


function mapStateToProps(state) {
  return {};
}


export default connect(mapStateToProps)(App);
