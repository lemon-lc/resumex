import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '../icon';

import './pane.less';

export interface PaneProps {
  className?: string;
  value?: string;
  collapse?: boolean;
  title?: string;
  subTitle?: string;
  defaultCollapse?: boolean;
  disabledCollapse?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  onChange?: (collapse: boolean) => void;
}

const CheckBox: React.SFC<PaneProps> = ({
  className,
  title,
  subTitle,
  collapse,
  defaultCollapse = false,
  children,
  disabled,
  disabledCollapse,
  onChange
}) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(
    !disabledCollapse || (collapse === undefined ? defaultCollapse : collapse)
  );

  const classString = classnames(className, 'pane', {
    'pane-disabled': disabled,
    'pane-collapsed': collapsed
  });

  return (
    <div className={classString}>
      <div>
        <div>
          <h3>{title}</h3>
          {subTitle && <h4>{subTitle}</h4>}
        </div>
        <div onClick={() => {
          if(disabled || disabledCollapse) return;
          setCollapsed(!collapsed)
          if(onChange) onChange(!collapsed)
        }}><Icon type="doubleleft"/></div>
      </div>
      <span>{children}</span>
    </div>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.any,
  onChange: PropTypes.func,
};

export default CheckBox;
