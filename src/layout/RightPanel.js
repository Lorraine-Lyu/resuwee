import React, { useState } from 'react';
import {connect} from 'react-redux'

function RightPanel(props) {
    return(
      <div className = {props.className}>
          <CollapseBtn  direction = {props.direction} expandRight = {props.expandRight}/>
          <p>{props.content}</p>
      </div>
    )
}

function CollapseBtn(props) {
    return(
      <button className={"triangle-" + props.direction} onClick = {()=>props.expandRight()}>
        {props.direction === "right" ? (<i className="right" />) : (<i className="left"/>)}
      </button>
    )
}

function mapStateToProps(state) {
  var user = state.updateUser.user;
  return {user};
}

export default connect(mapStateToProps)(RightPanel);