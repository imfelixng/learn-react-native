import React, { Component } from 'react'

export default class RatingProduct extends Component {

  showRating = (rating) => {
      let arrRate = [1,2,3,4,5];

      let elmRate = arrRate.map((R) => {
          if(R <= rating){
            return <li key= {R} className = "active-rate">
                    <i className="fas fa-star"></i>
                </li>;
          }else{
            return <li key= {R}>
                    <i className="fas fa-star"></i>
                </li>; 
          }
      });
      return elmRate;
  }

  render() {
    let {rating} = this.props;
    return (
      <ul className = "rating">
        {this.showRating(rating)}
      </ul>
    )
  }
}
