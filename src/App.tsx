import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Resume from './containers/resume';

export default class App extends Component {
  // public state = { color: 'green' };

  public componentDidMount() {}

  public render() {
    return (
      <div className="resumex">
        <Resume />
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>
    );
  }
}
