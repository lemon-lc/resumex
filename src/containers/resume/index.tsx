import * as React from 'react';
import Editor from '../../components/editor';
import Pane from '../../components/pane';
import Section from './components/section';
import Item from './components/item';

import './index.less';

const BaseInfo = [
  {title: '姓名', key: 'name', type: 'input'},
  {title: '生日', key: 'birthday', type: 'input'},
  {title: '性别', key: 'sex', type: 'input'},
  {title: '所在城市', key: 'city', type: 'input'},
  {title: '详细地址', key: 'address', type: 'input'},
  {title: '手机号码', key: 'phone', type: 'input'},
  {title: '电子邮箱', key: 'email', type: 'input'},
  {title: '出生地', key: 'birthPlace', type: 'input'},
  {title: '民族', key: 'nationality', type: 'input'},
  {title: '驾照', key: 'drivingLicense', type: 'input'},
]

const JobIntention = [
  {title: '求职状态', key: 'status', type: 'input'},
  {title: '期望地点', key: 'workplace', type: 'input'},
  {title: '期望职业', key: 'jobTitle', type: 'input'},
  {title: '期望薪资', key: 'expectedSalary', type: 'input'},
]

const JobInfos = [
  {title: '职位', key: 'status', type: 'input'},
  {title: '起止时间', key: 'workplace', type: 'input'},
  {title: '公司名称', key: 'jobTitle', type: 'input'},
  {title: '所在城市', key: 'expectedSalary', type: 'input'},
]


export default class ResumeEditor extends React.Component {
  public render() {
    return (
      <div className="resume-editor">
        <Section title="基本信息">
          <ul className="resume-editor-block">
            {BaseInfo.map(item => (
              <li
                key={item.key}
                className="resume-editor-item"
              >
                <Item
                  title={item.title}
                  value=""
                  onChange={e => {console.log(item.key ,e.target.value)}}/>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="求职意向">
          <ul className="resume-editor-block">
            {JobIntention.map(item => (
              <li
                key={item.key}
                className="resume-editor-item"
              >
                <Item
                  title={item.title}
                  value=""
                  onChange={e => {console.log(item.key ,e.target.value)}}/>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="个人简介">
          <Editor />
        </Section>
        <Section title="工作经历">
          <Pane title="职位" subTitle="工作起止时间">
            <ul className="resume-editor-block">
              {JobInfos.map(item => (
                <li
                  key={item.key}
                  className="resume-editor-item"
                >
                  <Item
                    title={item.title}
                    value=""
                    onChange={e => {console.log(item.key ,e.target.value)}}/>
                </li>
              ))}
            </ul>
            <Editor />
          </Pane>
          <div>+添加工作经验</div>
        </Section>
        <Section title="教育经历">
          <Pane title="职位" subTitle="工作起止时间">
            <ul className="resume-editor-block">
              {JobInfos.map(item => (
                <li
                  key={item.key}
                  className="resume-editor-item"
                >
                  <Item
                    title={item.title}
                    value=""
                    onChange={e => {console.log(item.key ,e.target.value)}}/>
                </li>
              ))}
            </ul>
            <Editor />
          </Pane>
          <div>+添加工作经验</div>
        </Section>
        <Section title="社交主页">
          <ul>
            <li>+添加社交主页</li>
          </ul>
        </Section>
        <Section title="专业技能">
          <ul>
            <li>+添加专业技能</li>
          </ul>
        </Section>
      </div>
    );
  }
}
