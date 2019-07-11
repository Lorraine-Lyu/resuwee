import React, { Component } from 'react';
import InfoForm from './InfoForm';
import 'element-theme-default';
import { connect } from 'react-redux';

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

  // function mapStateToProps(state) {
  //   const user = state.user;
  //   return {user};
  // }

  export default connect()(LeftPanel);
  