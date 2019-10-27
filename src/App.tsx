import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Layout from './components/layout';
// import Header from './containers/header';
// import Slider from './containers/slider';
// import RouterMap from './router';
import Resume from './containers/resume';

import './assets/style/index.less';
import './assets/style/normalize.less';


export default class App extends Component {
  public render() {
    return (
      <Resume />
    );
  }
}
