
import React, { Component } from 'react'
import'./add.css'

export default class Add extends Component {
   state={
    movieName: "", img: "", rating: ""

   }

   handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }
    render() {
        if(this.props.show){
        return (
            <div className="box-movie">
              <form id="add-movie" action="#" method="post">
                <input name="movieName"type="text" onChange={this.handleChange} value={this.state.movieName}/>
                <input name="img" type="text" onChange={this.handleChange} value={this.state.img}/>
                <input name="rating" type="text" onChange={this.handleChange}  value={this.state.rating}/>
                
                </form>
                <button onClick={()=>{
                    
                    this.props.add ({rating:this.state.rating, img:this.state.img, movieName:this.state.movieName});this.setState({movieName: "", img: "", rating: ""});this.props.hide()}
                    }  > Add</button>
            </div>
         
        )}
        else return null
    }
}




