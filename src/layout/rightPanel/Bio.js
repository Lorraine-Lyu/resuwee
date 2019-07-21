import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Menu, Button} from 'element-react';
import Contacts from './Contacts';
import 'element-theme-default';

const Bio = ({user}) => {
    return(
        <Contacts></Contacts>
    );
}

function mapStateToProps(state) {
    var user = state.updateUser.user;
    return {user};
  }
  
  export default connect(mapStateToProps)(Bio);