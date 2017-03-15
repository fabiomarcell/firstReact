import React, { Component } from 'react';
//import Request from 'react-http-request';

//http://127.0.0.1:3000/bestRent.json
class AllDeals extends Component {
  
  
  constructor(){
    super();

  
  }

  render() {
    return (
      <div id="best-deal">
        <div className="container">
          <div className="row">
            
            <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">
                <div className="fh5co-property">
                  <figure>
                    <img src="/assets/images/slide_1.jpg" alt="Free Website Templates FreeHTML5.co" className="img-responsive" />
                    <a href="#" className="tag">All Deals</a>
                  </figure>
                  <div className="fh5co-property-innter">
                    <h3><a href="#">401 Biscayne Boulevard, Miami</a></h3>
                    <div className="price-status">
                            <span className="price">$1,540,000</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.</p>
                      </div>
                      <p className="fh5co-property-specification">
                        <span><strong>3500</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>  <span><strong>2</strong> Garages</span>
                      </p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    );
  }


}

export default AllDeals;
