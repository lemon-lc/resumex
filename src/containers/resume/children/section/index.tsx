import * as React from 'react';
import './index.less'

export interface SectionProps {
  title: string | React.ReactNode;
}

const Section: React.SFC<SectionProps> = ({ title, children}) => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">{title}</h3>
      <div className="resume-section-content">
        {children}
      </div>
    </section>
  )
}

export default Section;
