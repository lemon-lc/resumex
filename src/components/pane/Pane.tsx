import classnames from 'classnames';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
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

const Pane: React.SFC<PaneProps> = ({
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
        <div
          onClick={() => {
            if (disabled || disabledCollapse) return;
            setCollapsed(!collapsed);
            if (onChange) onChange(!collapsed);
          }}
        >
          <Icon type="doubleleft" />
        </div>
      </div>
      <CSSTransition in={!collapsed} timeout={200} classNames="pane-children">
        <div className="pane-children">{children}</div>
      </CSSTransition>
    </div>
  );
};

export default Pane;
