import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Card} from 'element-react';

function Edu({eduExp}) {
    const eduLst = eduExp;
    const show = eduLst.map(edu => {return <Card key={edu.index}>
        <div>School Name: {edu.school}</div>
        <div>Major: {edu.major}</div>
        <div>Fields of study: {edu.courses}</div>
    </Card>})
    return(
      <div className = "educationExperience">
          {show}
      </div>
    )
}


function mapStateToProps(state) {
  var user = state.updateUser.user;
  return {eduExp : user.educationExperience};
}

export default connect(mapStateToProps)(Edu);