import React, { Component } from 'react';
import {contact} from './util';
import { Button } from 'element-react';
import 'element-theme-default';

class LeftPanel extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      // console.log(this.props.profile);
      var person = this.props.profile;
      var update=this.props.upd;
      return(
  
        <div className = "LeftPanel">
            <div className = "Personal Info">
              Name: <input type="text" name="username" value={person.username} onChange={update}></input><br></br>
              Birth Date: <input type="text" name="birth_date" value={person.birth_date} onChange={update}></input><br></br>
              <ContactList className="ContactList"></ContactList>
              Education: <input type="text" name="education"></input><br></br>
              Work Experience: <input type="text" name="work experience"></input><br></br>
              projects: <input type="text" name="projects"></input><br></br>
  
            </div>
        </div>
      )
    }
  }

  class ContactList extends Component {
    constructor(props) {
      super(props);
      this.expand = this.expand.bind(this);
      this.add = this.add.bind(this);
      this.update = this.update.bind(this);
      var c = new contact(1, 'other', 'None');
      this.state = {
        isOpen: true,
        menu :['other','phone','facebook', 'gmail','linkedin','instagram','qq','wechat'],
        info : [c],
        count : 1,
      };
    }
  
    expand(){
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  
    add(){
      const newContact= new contact(this.state.count+1,'other', 'None');
      const nlst = this.state.info;
      nlst.push(newContact);
      this.setState({
        info : nlst,
        count:this.state.count+1,
      });
    }
  
    update(index,type,value){
      const lst = this.state.info;
      console.log(index);
      var c;
        for (c of lst) {
          if (c.index === index) {
            if(type ===  'n') {
              c.name = value;
            } else {
              c.value = value;
            }
          }
        }
      }
  
    render(){
      const contacts = this.state.info;
      const input = contacts.map((contact)=>
        <ContactUnit menu={this.state.menu} key={contact.index+'unit'} value={contact} callBk={this.update}></ContactUnit>
    );
  
      if(!this.state.isOpen) {
        return(
          <div className="closedContact">
            <p>Contact</p>
            <Button type="primary" onClick={this.expand}>Expand</Button>
          </div>
        )
      }
      return (
        <div>
          <div className="openedContactTitle">
            <p>Contact</p>
            {input}
            <Button type="primary" onClick={this.add}>Add</Button>
            <Button type="primary" onClick={this.expand}>Collapse</Button>
          </div>
        </div>
      )
    }
  }

  class ContactUnit extends Component{
    constructor(props) {
      super(props);
    }
    render(){
      const allOptions = this.props.menu;
      const curr = this.props.value.index;
      const update = this.props.callBk;
      const options = allOptions.map(function(option,curr,update){
        if (option === curr) {
          return <option value={option} key={curr} selected >{option}</option>
        } else {
          return <option value={option} key={curr}>{option}</option>
        }
      }
  
    );
      console.log(curr);
      const select = <select name='contactMethods' key={curr+'select'} onChange={update(curr, 'n', this.value)}>{options}</select>
      return (
        <div className="contactUnit" key={this.props.index+'div'}>
          {select}
          link: <input type="text" className="contactInput" key={curr+'input'} value={this.props.value.link} onChange={update(curr, 'l', this.value)}></input>
        </div>
      )
    }
  }

  export default LeftPanel;
  