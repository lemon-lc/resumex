import * as React from 'react';
import Item from '../item';
import './index.less'

export interface SectionProps {
  title: string | React.ReactNode;
}

const Section: React.SFC<SectionProps> = ({ title, children}) => {
  return (
    <section className="resume-education-editor">
      <h3 className="resume-section-title">{title}</h3>
      <div className="resume-section-content">
        {children}
      </div>
    </section>
  )
}

export default Section;
