import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
      	
    <div id="fh5co-page">
      <Header />
      <Slider />
      <BestDeal />
    </div>
    );
  }
}

export default App;
