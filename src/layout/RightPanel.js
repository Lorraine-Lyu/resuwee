import React, { Component } from 'react';

class RightPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = {this.props.className}>
          <CollapseBtn  direction = {this.props.direction} expandRight = {this.props.expandRight}/>
          <p>{this.props.content}</p>
      </div>
    )
  }
}

class CollapseBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightIsExpanded:true,
    }
  }

  render() {
    // console.log(this.props.direction);
    return(
      <button className={"triangle-" + this.props.direction} onClick = {()=>this.props.expandRight()}>
        {this.props.direction === "right" ? (<i className="right" />) : (<i className="left"/>)}
      </button>
    )
      }
}

export default RightPanel;