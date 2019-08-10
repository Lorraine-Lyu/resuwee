import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Card,Layout} from 'element-react';

function Edu({eduExp}) {
    const eduLst = eduExp;
    const show = eduLst.map(edu => {return <Card key={edu.index}>
        <div>School Name: {edu.school}</div>
        <div>Major: {edu.major}</div>
        <div>Fields of study: {edu.courses}</div>
    </Card>})
    return(
      <Layout.Row  className = "educationExperience">
          {show}
      </Layout.Row>
    )
}


function mapStateToProps(state) {
  var user = state.updateUser.profile;
  return {eduExp : user.educationExperience};
}

export default connect(mapStateToProps)(Edu);