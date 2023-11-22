
import React, { Component } from 'react'
import {
    useParams
  } from "react-router-dom";




function withParams(Component){
    return props =><Component {...props} params={useParams()}/>
}




 class SingleSeries extends Component {


    state ={
        show:null
    }

    

    componentDidMount(){
        const {id}=this.props.params
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response=>response.json())
        .then(json=>this.setState({show:json}));
    }


  render() {


    console.log(this.props.params)
    const {show}=this.state;
    console.log(show)



    return (
      <div>
        {show ===null && <p>Loading...</p>}

        {show !== null && 
            <div>

                <p>{show .name}</p>
                <p>Premiered - {show.premiered}</p>
                <p>Rating - {show.rating.average}</p>
                <p>Episodes - {show._embedded.episodes.length}</p>
                <p>
                    <img alt='show' src={show.image.medium}/>
                </p>
            
            
            
            </div>}
        
      </div>
    )
  }
}export default withParams(SingleSeries);