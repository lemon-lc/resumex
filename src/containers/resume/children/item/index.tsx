import * as React from 'react';
import Input from '../../../../components/input';
import './index.less';

export interface SectionProps {
  title: string | React.ReactNode;
  value: string;
  span: number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Section: React.SFC<SectionProps> = ({ title, value = '', placeholder, span, onChange }) => {
  return (
    <li className="resume-item" style={{ flex: `${(span / 24) * 100}%` }}>
      <label className="resume-item-title">{title}</label>
      <div className="resume-item-content">
        <Input value={value} placeholder={placeholder} onChange={onChange} />
      </div>
    </li>
  );
};

export default Section;
