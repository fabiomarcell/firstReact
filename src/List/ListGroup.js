import React, { Component } from 'react';
import {Link } from 'react-router';
class ListGroup extends Component {
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
    return (
        <section>
            {this.state.deals.map(function(object, i){
                //alert(object.title);
                return <p><Link to={'/detail/'+i}>{object.title}</Link></p>
            })}
        </section>
    );
  }
}

export default ListGroup;
