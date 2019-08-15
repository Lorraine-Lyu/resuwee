import React, { Component } from 'react';
import InfoForm from './InfoForm';
import 'element-theme-default';
import { connect } from 'react-redux';

class LeftPanel extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      var person = this.props.profile;
      var update=this.props.upd;
      return(
        <div >
            <InfoForm user={person}></InfoForm>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    const user = state.updateUser.profile;
    return {user};
  }

  export default connect(mapStateToProps)(LeftPanel);
  