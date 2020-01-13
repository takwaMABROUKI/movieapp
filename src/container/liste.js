import React from 'react'
import './liste.css'
import Ratting from './ratting.js'
import StarRatingComponent from 'react-star-rating-component';


export default function Liste(props) {
    return (
        <div className="liste-film">
            {props.movies.movieTab.filter(el=>(el.movieName.toUpperCase().includes
           (props.movies.filtre.toUpperCase())) && (el.rating>=props.rate)).map((el,i)=> (
                <div className="film" key={i} >
                    
                    <StarRatingComponent className="star"
          name="rate1" 
          starCount={5}
          value={el.rating}
          
        /> 

                
                <img className="img-film" src= {el.img}/>
                
                <p className="titre">{el.movieName}</p>
                </div>
            ))}
        </div>
    )
}
