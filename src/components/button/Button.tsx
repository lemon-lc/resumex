import classnames from 'classnames';
import * as React from 'react';
import PropTypes from 'prop-types';
import { tuple } from '../../utils/type';

const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
const ButtonTypes = tuple('primary', 'dashed', 'danger', 'default');
const ButtonSizes = tuple('small', 'large', 'default');
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];
export type ButtonType = (typeof ButtonTypes)[number];
export type ButtonSize = (typeof ButtonSizes)[number];
export interface ButtonProps {
  htmlType?: ButtonHTMLType;
  type?: ButtonType;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
  size?: ButtonSize;
  onClick?: () => void;
}

const Button: React.SFC<ButtonProps> = ({
  htmlType = 'button',
  type,
  loading = false,
  className,
  size,
  icon,
  children,
  onClick,
}) => {
  const handleClick = React.useCallback(() => {
    if (onClick && !loading) onClick();
  }, [loading]);
  const classStrings = React.useMemo(() => {
    const prefixCls = 'x-button';
    return classnames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-loading`]: loading,
    });
  }, []);
  const iconNode = React.useMemo(() => {
    return loading ? 'loading' : icon || null;
  }, [loading, icon]);
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classStrings} onClick={handleClick} type={htmlType}>
      {iconNode}
      {children}
    </button>
  );
};

Button.propTypes = {
  htmlType: PropTypes.oneOf(ButtonHTMLTypes),
  type: PropTypes.oneOf(ButtonTypes),
  size: PropTypes.oneOf(ButtonSizes),
  className: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
