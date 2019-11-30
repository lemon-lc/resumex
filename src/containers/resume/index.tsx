import * as React from 'react';
import { connect } from 'react-redux';

const ResumeEditor: React.FC = () => {
  return (
    <div>
      123
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  editor: state.editor,
});

export default connect(mapStateToProps)(ResumeEditor);
