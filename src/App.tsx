import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Layout from './components/layout';
// import Header from './containers/header';
// import Slider from './containers/slider';
// import RouterMap from './router';
import Resume from './containers/resume';

export default class App extends Component {
  // public state = { color: 'green' };

  public componentDidMount() {}

  public render() {
    return (
      <div className="resumex">
        <Resume />
      </div>
    );
  }
}
