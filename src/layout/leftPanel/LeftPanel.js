import React, { Component } from 'react';
import InfoForm from './InfoForm';
import 'element-theme-default';

class LeftPanel extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      // console.log(this.props.profile);
      var person = this.props.profile;
      var update=this.props.upd;
      return(
  
        <div className = "LeftPanel">
            <InfoForm user={person}></InfoForm>
        </div>
      )
    }
  }


  export default LeftPanel;
  