import React, { useState, Component} from 'react';
import {contact} from '../util';
import { Button, Input, Select} from 'element-react';
import 'element-theme-default';
import {connect} from 'react-redux'
import { editContact } from '../../store/actions';

  const ContactList = ({dispatch}) => {
      let menu = ['other','phone','facebook', 'gmail','linkedin','instagram','qq','wechat'];
      const [isOpen, setIsOpen] = useState(true);
      var con = new contact();
      const [contactLst, setContactLst] = useState([con])
      const [count, setCount] = useState(0);

      function update(index, type, value) {
        var c;
        for (c of contactLst) {
          if (c.index === index) {
            if (type = "type") {
              c.name = value;
            } else {
              c.link = value;
            }
          }
        }
      }

      function add() {
        var newLst = contactLst.slice();
        var c = new contact(count + 1);
        newLst.push(c);
        setContactLst(newLst);
        setCount(count+1);
      }
      
      function switchState() {
        setIsOpen(!isOpen);
      }

      const input = contactLst.map((contact)=>
        <ContactUnit menu={menu} key={contact.index+'unit'} value={contact} callBk={update}></ContactUnit>
      );
  
      if(!isOpen) {
        return(
          <div className="closedContact">
            <Button type="primary small" onClick={switchState}>Expand</Button>
          </div>
        )
      } else {
        return (
          <div>
            <div className="openedContactTitle">
              {input}
              <Button type="primary small" onClick={add}>Add</Button>
              <Button type="primary small" onClick={switchState}>Collapse</Button>
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
      const options = allOptions.map(function(option,curr){
        if (option === curr) {
          return <Select.Option value={option} key={curr} selected >{option}</Select.Option>
        } else {
          return <Select.Option value={option} key={curr}>{option}</Select.Option>
        }
      }
  
    );
      // console.log(curr);
      const select = <Select name='contactMethods' key={curr+'select'} onChange={update(curr, 'type', this.value)}>{options}</Select>
      return (
        <div className="contactUnit" key={this.props.index+'div'}>
          {select} 
          link: <Input type="text" className="contactInput" key={curr+'input'} value={this.props.value.link} onChange={update(curr, 'value', this.value)}></Input>
        </div>
      )
    }
  }

  // function mapStateToProps(state) {
  //   var contactLst = state.user.contact;
  //   return {contactLst};
  // }

  export default connect()(ContactList);
