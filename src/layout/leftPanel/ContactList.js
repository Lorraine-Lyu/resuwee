import React, { Component } from 'react';
import {contact} from '../util';
import { Button, Input, Select} from 'element-react';
import 'element-theme-default';

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
      // console.log(index);
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
            <Button type="primary small" onClick={this.expand}>Expand</Button>
          </div>
        )
      }
      return (
        <div>
          <div className="openedContactTitle">
            {input}
            <Button type="primary small" onClick={this.add}>Add</Button>
            <Button type="primary small" onClick={this.expand}>Collapse</Button>
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
          return <Select.Option value={option} key={curr} selected >{option}</Select.Option>
        } else {
          return <Select.Option value={option} key={curr}>{option}</Select.Option>
        }
      }
  
    );
      // console.log(curr);
      const select = <Select name='contactMethods' key={curr+'select'} onChange={update(curr, 'n', this.value)}>{options}</Select>
      return (
        <div className="contactUnit" key={this.props.index+'div'}>
          {select} 
          link: <Input type="text" className="contactInput" key={curr+'input'} value={this.props.value.link} onChange={update(curr, 'l', this.value)}></Input>
        </div>
      )
    }
  }

  export default ContactList;
