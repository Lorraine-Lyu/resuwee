import React, { useState} from 'react';
import {contact} from '../util';
import { Button, Input, Select, Form} from 'element-react';
import 'element-theme-default';
import {connect} from 'react-redux'
import { editContact } from '../../store/actions';

  const ContactList = ({contacts, dispatch}) => {
      let menu = ['other','phone','facebook', 'gmail','linkedin','instagram','qq','wechat'];
      const [isOpen, setIsOpen] = useState(true);
      const [contactLst, setContactLst] = useState(contacts)
      const [count, setCount] = useState(0);

      function update(index, type, value) {
        var c;
        var nlst = contactLst.slice();
        for (c of nlst) {
          if (c.index === index) {
            if (type === "type") {
              c.name = value;
            } else {
              c.link = value;
            }
          }
        }
        setContactLst(nlst);
        dispatch(editContact(nlst));
      }

      function add() {
        var newLst = contactLst.slice();
        var c = new contact(count + 1);
        newLst.push(c);
        setContactLst(newLst);
        setCount(count+1);
        dispatch(editContact(newLst));
      };

      function remove(index) {
        
        var nlst = contactLst.slice();
        nlst = nlst.filter((i)=> {return i.index !== index})
        setContactLst(nlst);
        dispatch(editContact(nlst))
      };

      function switchState() {
        setIsOpen(!isOpen);
      };

      const input = contactLst.map((contact)=>
        <ContactUnit menu={menu} key={contact.index+'unit'} index={contact.index} value={contact} callBk={update} remove={remove}></ContactUnit>
      );
  
      if(!isOpen) {
        return(
          <div className="closedContact">
            <Button type="primary mini" onClick={switchState}>Expand</Button>
          </div>
        )
      } else {
        return (
          <div className="left-modules">
            <div className="openedContactTitle">
              {input}
              <Button type="plain mini" onClick={add}>Add</Button>
              <Button type="primary mini" onClick={switchState}>Collapse</Button>
            </div>
          </div>
        )
      }

  }

  function ContactUnit (props) {
      const allOptions = props.menu;
      const curr = props.value.index;
      const update = props.callBk;
      const index = props.index;
      const remove = props.remove;
      const options = allOptions.map(function(option,curr){
        if (option === curr) {
          return <Select.Option value={option} key={curr} selected >{option}</Select.Option>
        } else {
          return <Select.Option value={option} key={curr}>{option}</Select.Option>
        }
      }
  
    )
      const select = <Select name='contactMethods' key={curr+'select'} onChange={e => update(curr, 'type', e)}>{options}</Select>
      return (
        <div className="contactUnit">
          <Form.Item className="contactUnit" key={curr+'div'}>
            {select} 
          </Form.Item>
          <Form.Item label="link: " className="contact-link">
            <Input type="text" className="contactInput" key={curr+'input'} value={props.value.link} onChange={e => update(curr, 'value', e)}></Input>
          </Form.Item>
          <Button type="text" icon="delete" onClick={()=>remove(index)}></Button>
        </div>
      )
    
  }

  function mapStateToProps(state) {
    var contacts = state.updateUser.profile.contact;
    return {contacts};
  }

  export default connect(mapStateToProps)(ContactList);
