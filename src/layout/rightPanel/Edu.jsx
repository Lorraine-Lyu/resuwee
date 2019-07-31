import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Card} from 'element-react';

function Edu({eduExp}) {
    const eduLst = eduExp;
    const show = eduLst.map(edu => {return <Card>
        <div>{edu.school}</div>
        <div>{edu.major}</div>
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