import React, { Component } from 'react';
import InfoForm from './InfoForm';
import 'element-theme-default';
import { connect } from 'react-redux';

// the panel on the left
//NOTE: I used class here to define left panel but other files direct define 
//components as variables. To use react hook, please use the other one.

class LeftPanel extends Component {
    constructor(props) {
      super(props);
    }
  
    //define the behavior when this component is rendered
    render() {
      var person = this.props.profile;
      var update=this.props.upd;
      return(
        <div className="LeftPanel">
            <InfoForm user={person}></InfoForm>
        </div>
      )
    }
}

  //used for redux: pass in the required data before rendering the LeftPanel
  function mapStateToProps(state) {
    const user = state.updateUser.profile;
    return {user};
  }

  //used for redux: connect the LeftPanel to the Global state 
  export default connect(mapStateToProps)(LeftPanel);
  