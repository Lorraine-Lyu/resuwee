import React, { Component } from 'react';
import {contact} from './util';
import { Button, Form, Input, Select, DatePicker } from 'element-react';
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
            <InfoForm user={person}></InfoForm>
        </div>
      )
    }
  }

  class InfoForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user : this.props.user,
      }
    }

    onSubmit(e) {
      e.preventDefault();
    }

    onChange(key, value) {
      this.state.user[key] = value;
      this.forceUpdate();
    }

    render() {
      return (
        <Form model={this.state.user} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
          <Form.Item label="姓名 ">
            <Input value={this.state.user.name} onChange={this.onChange.bind(this, 'name')}></Input>
          </Form.Item>
          <Form.Item label="所在地 ">
            <Select value={this.state.user.region} placeholder="请选择活动区域">
              <Select.Option label="区域一" value="shanghai"></Select.Option>
              <Select.Option label="区域二" value="beijing"></Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="出生年月 ">
              <Form.Item prop="date1" labelWidth="0px">
                <DatePicker
                  value={this.state.user.date}
                  placeholder="选择日期"
                  onChange={this.onChange.bind(this, 'date')}
                />
              </Form.Item>
          </Form.Item>
          <Form.Item label="学历 ">
            <Select value={this.state.user.education} placeholder="请选择活动区域">
              <Select.Option label="初中" value="初中"></Select.Option>
              <Select.Option label="高中" value="高中"></Select.Option>
              <Select.Option label="本科" value="本科"></Select.Option>
              <Select.Option label="研究生" value="研究生"></Select.Option>
              <Select.Option label="硕士" value="硕士"></Select.Option>
              <Select.Option label="博士及以上" value="博士及以上"></Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="联系方式 ">
            <ContactList></ContactList>
          </Form.Item>
          <Form.Item label="活动形式">
            <Input type="textarea" value={this.state.user.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" nativeType="submit">立即创建</Button>
            <Button>取消</Button>
          </Form.Item>
        </Form>
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

  export default LeftPanel;
  