import * as React from 'react';
import Editor from '../../components/editor';

import './index.less';

export default class Tasks extends React.Component {
  public render() {
    return (
      <div className="resumes">
        <Editor />
      </div>
    );
  }
}
