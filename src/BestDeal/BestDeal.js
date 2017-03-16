import React, { Component } from 'react';
//import Request from 'react-http-request';

//http://127.0.0.1:3000/bestRent.json
class BestDeal extends Component {
  
  
  constructor(){
    super();
    this.state = {
      deals : []
    }
    this.getList();
  }

  async getList(){
    let response = await fetch("http://127.0.0.1:3000/bestRent.json");
    let body = await response.json();
    this.setState({
      deals: body
    });
    //return body;
  }

  render() {
    
        let a ;
    return (
      <div id="best-deal">
        <div className="container">
          <div className="row">
            {this.state.deals.map(function(object, i){
              
               return <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">
                        <div className="fh5co-property">
                          <figure>
                            <img src={object.image} alt={object.title} className="img-responsive" />
                            <a href="#" className="tag">{object.status}</a>
                          </figure>
                          <div className="fh5co-property-innter">
                            <h3><a href="#">{object.title}</a></h3>
                            <div className="price-status">
                                    <span className="price">{object.price}</span>
                                </div>
                                <p>{object.description}</p>
                              </div>
                              
                        </div>
                      </div>;
            })}

          </div>
        </div>
      </div>
    );
  }


}

export default BestDeal;
