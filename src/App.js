import React from 'react';
import logo from './logo.svg';
import './App.css';
import Liste from './container/liste.js'
import Search from './container/search.js'
import Add from './container/add.js'



class App extends React.Component{

  constructor(){
    super()
    this.state={
      movieTab: [
        { movieName: "Terminator", img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thanksgiving-movies-2019-theaters-terminator-dark-fate-1573596902.jpg?crop=1xw:0.960960960960961xh;center,top&resize=480:*", rating: 4 },
        { movieName: "Joker", img: "http://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg", rating: 5 },
        { movieName: "avatar", img: "https://www.cartoonbrew.com/wp-content/uploads/2019/12/avatar_sequels-1280x600.jpg", rating: 5 },
        { movieName: "inception", img: "http://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg", rating: 4 },
        { movieName: "Roi Lion", img: "http://fr.web.img3.acsta.net/pictures/19/02/25/12/06/2908996.jpg", rating: 4 },
        { movieName: "Avant toi", img: "http://fr.web.img6.acsta.net/pictures/16/05/02/17/27/063880.jpg", rating: 3 },
        { movieName: "the proigy", img: "https://img.filmsactu.net/datas/fiches/f/i/films-d-horreur-fantastique/xl/films-d-horreur-fantastique-5bc89402b7b13.jpg", rating: 3 },
        { movieName: "Faut pas lui dire", img: "https://sf1.viepratique.fr/wp-content/uploads/sites/5/2017/01/287884.jpg-r_1920_1080-f_jpg-q_x-xxyxx-303x410.jpg", rating: 4 },
        
        
      ],

     show:false,
     filtre:"",
     rating:0,
     loading: true
     

    }
  }
  handleAdd=(movie)=>{
    this.setState({
        movieTab:[...this.state.movieTab,movie],
        myInput:""
    })
  
}
showModal=(event)=>{
  this.setState({
    show:!event.target.value

  });
}
hideModal=(event)=>{
  this.setState({
    show: false

  });
}
handelChange=(input)=>{
  this.setState( {filtre:input})
}
onStarClick=(nextValue, prevValue, name)=> {
  this.setState({rating: nextValue});
}

componentDidMount=()=>{
  setTimeout(()=>{this.setState({loading:false} ) },2000)
}
  render(){
    return(
  <div className="carte"> 
    <Search Change={this.handelChange} ratting={this.onStarClick} />
    <Liste movies={this.state} rate={this.state.rating} loading={this.state.loading}/>
    <button className="plus" onClick={this.showModal} > + </button>
    <Add add={this.handleAdd} show={this.state.show} hide={this.hideModal}/>
  </div>
    )
  }
}


export default App;
