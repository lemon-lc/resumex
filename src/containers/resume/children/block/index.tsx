import * as React from 'react';
import Item from '../item';
import './index.less';

interface ItemProps {
  key: string;
  value: string;
}

interface IProps {
  data: ItemProps[];
}

const config = {
  name: { label: '姓名', type: 'input', span: 12 },
  birthday: { label: '生日', type: 'input', span: 12 },
  sex: { label: '性别', type: 'input', span: 12 },
  city: { label: '所在城市', type: 'input', span: 12 },
  address: { label: '详细地址', type: 'input', span: 12 },
  phone: { label: '手机号码', type: 'input', span: 12 },
  email: { label: '电子邮箱', type: 'input', span: 12 },
  birthPlace: { label: '出生地', type: 'input', span: 12 },
  nationality: { label: '民族', type: 'input', span: 12 },
  drivingLicense: { label: '驾照', type: 'input', span: 12 },
  status: { label: '求职状态', type: 'input', span: 12 },
  workplace: { label: '期望地点', type: 'input', span: 12 },
  jobTitle: { label: '期望职业', type: 'input', span: 12 },
  expectedSalary: { label: '期望薪资', type: 'input', span: 12 },
  job: { label: '职位', type: 'input', span: 12 },
  time: { label: '起止时间', type: 'input', span: 12 },
  company: { label: '公司名称', type: 'input', span: 12 },
  companyCity: { label: '所在城市', type: 'input', span: 12 },
  label: { label: '名称', type: 'input', span: 12 },
  link: { label: '链接', type: 'input', span: 12 },
  skill: { label: '技能', type: 'input', span: 12 },
  level: { label: '熟练度', type: 'input', span: 12 }
};

const Block: React.SFC<IProps> = ({ data }) => {
  return (
    <ul className="resume-editor-block">
      {data.map(item => (
        <Item
          key={item.key}
          span={config[item.key].span}
          title={config[item.key].label}
          value={item.value}
          onChange={e => {
            console.log(item.key, e.target.value);
          }}
        />
      ))}
    </ul>
  );
};

export default Block;
