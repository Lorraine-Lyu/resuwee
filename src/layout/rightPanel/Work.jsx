import React from 'react';
import {connect} from 'react-redux'
import {Card} from 'element-react';
import Contacts from './Contacts';
import 'element-theme-default';

const Work = ({work}) => {
    const curr = work;
    const show = curr.map((w)=> {
        return <Card key={w.index+ "card"}>
            <div>Comapny Name: {w.company}</div>
            <div>Job Title: {w.jobTitle}</div>
            <div>Description: {w.description}</div>
        </Card>
    })
    return(
        <div>
            {show}
        </div>
        
    );
}


function mapStateToProps(state) {
    var work = state.updateUser.profile.workExperience;
    return {work};
  }
  
  export default connect(mapStateToProps)(Work);