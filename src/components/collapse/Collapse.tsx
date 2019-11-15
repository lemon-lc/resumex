import cx from 'classnames';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';

import './collapse.less';

export interface CollapseProps {
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

const Collapse: React.SFC<CollapseProps> = ({
  className,
  title,
  subTitle,
  collapse,
  defaultCollapse = true,
  children,
  disabled,
  disabledCollapse,
  onChange
}) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(
    !disabledCollapse || (collapse === undefined ? defaultCollapse : collapse)
  );

  const classString = cx(className, 'collapse', {
    'collapse-disabled': disabled,
    'collapse-collapsed': collapsed
  });

  return (
    <div className={classString}>
      <div className="collapse-header">
        <div className="collapse-title">
          <div>{title}</div>
          {subTitle && <div className="collapse-sub-title">{subTitle}</div>}
        </div>
        <div
          className="collapse-collapse-btn"
          onClick={() => {
            if (disabled || disabledCollapse) return;
            setCollapsed(!collapsed);
            if (onChange) onChange(!collapsed);
          }}
        >
          <Icon type="down" />
        </div>
      </div>
      <CSSTransition in={!collapsed} timeout={200} classNames="collapse-children">
        <div className="collapse-children">{children}</div>
      </CSSTransition>
    </div>
  );
};

export default Collapse;
