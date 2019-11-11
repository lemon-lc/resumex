import * as React from 'react';
import Editor from '../../../components/editor';
import Pane from '../../../components/pane';
import Section from '../section';
import Item from '../item';

const BaseInfo = [
  { title: '姓名', key: 'name', type: 'input' },
  { title: '头像', key: 'drivingLicense', type: 'input' },
  { title: '生日', key: 'birthday', type: 'input' },
  { title: '性别', key: 'sex', type: 'input' },
  { title: '所在城市', key: 'city', type: 'input' },
  { title: '详细地址', key: 'address', type: 'input' },
  { title: '手机号码', key: 'phone', type: 'input' },
  { title: '电子邮箱', key: 'email', type: 'input' },
  { title: '出生地', key: 'birthPlace', type: 'input' },
  { title: '民族', key: 'nationality', type: 'input' },
  { title: '驾照', key: 'drivingLicense', type: 'input' }
];

const Detail: React.FC = () => {
  return (
    <Section title="基本信息">
      <ul className="resume-editor-block">
        {BaseInfo.map(item => (
          <li key={item.key} className="resume-editor-item">
            <Item
              title={item.title}
              value=""
              onChange={e => {
                console.log(item.key, e.target.value);
              }}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Detail;
