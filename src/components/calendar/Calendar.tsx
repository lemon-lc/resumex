import classnames from 'classnames';
import day from 'dayjs';
import * as React from 'react';
import Icon from '../icon';
import TBody from './Tbody';

import './calendar.less';

export interface CalendarProps {
  fullscreen?: boolean;
}

export default class Calendar extends React.Component<CalendarProps> {
  public static defaultProps = {
    fullscreen: true
  };

  public state = {
    current: day()
  };

  private handleSetCurrent = (day: day.Dayjs) => {
    this.setState({ current: day });
  }

  private handleClickPrevMonth = () => {
    const { current } = this.state;
    this.handleSetCurrent(current.subtract(1, 'month'));
  }

  private handleClickNextMonth = () => {
    const { current } = this.state;
    this.handleSetCurrent(current.add(1, 'month'));
  }

  public render() {
    const { fullscreen } = this.props;
    const { current } = this.state;
    const classString = classnames('l-calendar', {
      'l-calendar-fullscreen': fullscreen
    });
    return (
      <div className={classString}>
        <header className="l-calendar-header">
          <span
            className="l-calendar-prev-month"
            onClick={this.handleClickPrevMonth}
          >
            <Icon type="prev" />
          </span>
          <span className="l-calendar-date">
            <span className="l-calendar-year">{current.year()}年</span>
            <span className="l-calendar-month">{current.month() + 1}月</span>
          </span>
          <span
            className="l-calendar-next-month"
            onClick={this.handleClickNextMonth}
          >
            <Icon type="next" />
          </span>
        </header>
        <TBody current={current} onClick={this.handleSetCurrent} />
      </div>
    );
  }
}
