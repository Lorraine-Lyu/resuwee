import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Menu, Button} from 'element-react';
import 'element-theme-default';

const Contacts = ({contactLst}) => {
    const toShow = contactLst.map((c) => {return <Button key={c.index}>{c.index}</Button>})
    return (
        <div class="contactDiv">
            {toShow}
        </div>
    )
}

function mapStateToProps(state) {
    var contactLst = state.updateUser.user.contact;
    return {contactLst};
  }
  
  export default connect(mapStateToProps)(Contacts);