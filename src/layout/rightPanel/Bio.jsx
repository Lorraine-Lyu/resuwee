import React, { useState } from 'react';
import {connect} from 'react-redux'
import {Card} from 'element-react';
import Contacts from './Contacts';
import 'element-theme-default';

const Bio = ({user}) => {
    console.log("rendered ");
    const curr = user;
    console.log(curr);
    return(
        <div>
            <Card>
                <div>name: {curr.name}</div>
                <div>region: {curr.region}</div>
            </Card>
            <Contacts></Contacts>
        </div>
        
    );
}

function mapStateToProps(state) {
    var user = state.updateUser.user;
    return {user};
  }
  
  export default connect(mapStateToProps)(Bio);