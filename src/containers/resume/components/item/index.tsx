import * as React from 'react';
import Input from '../../../../components/input';
import './index.less'

export interface SectionProps {
  title: string | React.ReactNode;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Section: React.SFC<SectionProps> = ({ title, value = '', placeholder, onChange}) => {
  return (
    <section className="resume-item">
      <label className="resume-item-title">{title}</label>
      <div className="resume-item-content">
        <Input value={value} placeholder={placeholder} onChange={onChange}/>
      </div>
    </section>
  )
}

export default Section;
