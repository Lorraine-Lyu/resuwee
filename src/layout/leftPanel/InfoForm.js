import React, { Component } from 'react';
import ContactList from './ContactList';
import EducationInfo from './EducationInfo';
import {contact, education} from '../util';
import { Button, Form, Input, Select, DatePicker } from 'element-react';
import 'element-theme-default';

  class InfoForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user : this.props.user,
      }
    }

    onSubmit(e) {
        console.log(this.state.user);
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
            <Select value={this.state.user.region} placeholder="请选择活动区域" onChange={this.onChange.bind(this, 'region')}>
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
            <Select value={this.state.user.education} placeholder="请选择您的最高学历" onChange={this.onChange.bind(this, 'education')}>
              <Select.Option label="初中" value="初中"></Select.Option>
              <Select.Option label="高中" value="高中"></Select.Option>
              <Select.Option label="本科" value="本科"></Select.Option>
              <Select.Option label="研究生" value="研究生"></Select.Option>
              <Select.Option label="硕士" value="硕士"></Select.Option>
              <Select.Option label="博士及以上" value="博士及以上"></Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="联系方式 ">
            <ContactList parentContact={this.state.user.contact} parentUpdate={this}></ContactList>
          </Form.Item>
          <EducationInfo parentEducation={this.state.user.educationExperience} parentUpdate={this}></EducationInfo>
          <Form.Item>
            <Button type="primary" nativeType="submit">立即创建</Button>
            <Button>取消</Button>
          </Form.Item>
        </Form>
      )
    }
  }

  export default InfoForm;