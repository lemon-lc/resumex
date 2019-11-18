import * as React from 'react';
import { connect } from 'react-redux';
import Editor from '../../components/editor';
import Collapse from '../../components/collapse';
import Section from './children/section';
import Block from './children/block';

import './index.less';

// eslint-disable-next-line react/prefer-stateless-function
class ResumeEditor extends React.Component<any> {
  public render() {
    const {editor} = this.props;
    return (
      <div className="resume-editor">
        <Section title="基本信息">
          <Block data={editor.baseInfo} />
        </Section>
        <Section title="求职意向">
          <Block data={editor.jobIntention} />
        </Section>
        <Section title="个人简介">
          <Editor />
        </Section>
        <Section title="工作经历">
          <Collapse title="职位" subTitle="工作起止时间">
            <Block data={editor.jobInfos} />

            <Editor />
          </Collapse>
          <div>+添加工作经验</div>
        </Section>
        <Section title="教育经历">
          <Collapse title="职位" subTitle="工作起止时间">
            <Block data={editor.jobInfos} />
            <Editor />
          </Collapse>
          <div>+添加工作经验</div>
        </Section>
        <Section title="社交主页">
          <Block data={editor.websites} />
        </Section>
        <Section title="专业技能">
          <Block data={editor.skills} />
        </Section>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  editor: state.editor,
});

export default connect(mapStateToProps)(ResumeEditor);
