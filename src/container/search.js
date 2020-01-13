import "./search.css"
import StarRatingComponent from 'react-star-rating-component';

import React, { Component } from 'react'

export default class Search extends Component {
    state={
          
    }
    
    render() {
        return (
            <div className="header">
                <form id="auto-suggest" action="#" method="post">
                <input type="search" id="site-search" name="q" 
       aria-label="Search through site content" placeholder="Search for movies..." onChange={(event)=>this.props.Change(event.target.value)}/>


<StarRatingComponent className="star" 
          name="rate1" 
          starCount={5}
          onStarClick={this.props.ratting}
          
        /> 

</form>
            </div>
        )
    }
}

