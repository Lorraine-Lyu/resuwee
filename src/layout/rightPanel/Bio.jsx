import React from 'react';
import {connect} from 'react-redux'
import {Card} from 'element-react';
import Contacts from './Contacts';
import 'element-theme-default';

const Bio = ({name, region, date, education}) => {
    // console.log("rendered ");
    const userName = name;
    const userRegion = region;
    const userDate = date;
    const userEdu = education;
    return(
        <div>
            <Card>
                <div>My name is {userName}</div>
                {/* <div>birthday: {userDate}</div> */}
                <div>I currently live in {userRegion}</div>
                <div>Education: {userEdu}</div>
            </Card>
            <Contacts></Contacts>
        </div>
        
    );
}


function mapStateToProps(state) {
    var user = state.updateUser.profile;
    return {"name": user.name,
            "region": user.region,
            "date": user.date,
            "education":user.education};
  }
  
  export default connect(mapStateToProps)(Bio);