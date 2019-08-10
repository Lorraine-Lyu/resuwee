import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Layout, Button} from 'element-react';
import 'element-theme-default';

const Contacts = ({contactLst}) => {
    const toShow = contactLst.map((c) => {return <Button key={c.index}>{c.name}</Button>})
    return (
        <Layout.Row gutter="20" className="contactDiv">
            <Layout.Col span="12" offset="6">
                {toShow}
            </Layout.Col>
        </Layout.Row>
    )
}

function mapStateToProps(state) {
    var contactLst = state.updateUser.profile.contact;
    return {contactLst};
  }
  
  export default connect(mapStateToProps)(Contacts);