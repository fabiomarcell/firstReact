import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import '../public/assets/css/animate.css';
import '../public/assets/css/bootstrap.css';
import '../public/assets/css/bootstrap.css.map';
import '../public/assets/css/flexslider.css';
//import '../public/assets/css/icomoon.css';
import '../public/assets/css/style.css';
import '../public/assets/css/style.css.map';

import Header from './Header/Header';
import Slider from './Slider/Slider';
import BestDeal from './BestDeal/BestDeal';

var Home = React.createClass({
  render: function() {
    return (
        <div id="fh5co-page">
            <Header />
            <Slider />
            <BestDeal />
          </div>
      );
  }
});

class App extends Component {
  render() {
    return (
      	
      <Home />
      
    );
  }
}

export default App;
