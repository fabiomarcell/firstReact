import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header id="fh5co-header" role="banner">
            <div className="container">
                <div className="row">
                    <div className="header-inner">
                        <h1><a href="index.html">Estate<span>.</span></a></h1>
                        <nav role="navigation">
                            <ul>
                                <li><a href="buy.html">Best Deal</a></li>
                                <li><a href="rent.html">All Offers</a></li>
                                <li><a href="properties.html">Contact</a></li>
                                
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Header;
