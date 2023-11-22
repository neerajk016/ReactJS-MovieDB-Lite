
import React, { Component } from 'react'
import SeriesList from './SeriesList'
import Intro  from './Intro';
export default class Series extends Component {


    state={
        series:[],
        seriesname:"",
        isfetching:false
      }
    
    
      


      const

    
      onseriesinputchange=(e)=>{
        
        this.setState({seriesname:e.target.value,isfetching:true})


        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response=>response.json())
        .then(json=>this.setState({series:json,isfetching:false}))

        

      }



  render() {
    // console.log(this.state.series)
    const {series,seriesname,isfetching}=this.state;
    return (
      <div>
        <Intro message="Here You can Find most of your loved series"/>
        <div>
          <input value={seriesname} type="text" onChange={this.onseriesinputchange}/>
        </div>
        {
          series.length===0 && seriesname.trim()===""&& <p>Please Enter Series Name Into the Input</p>
        }
        {
          !isfetching && series.length===0 && seriesname.trim()!==""&& <p>No TV Series Have Found</p>
        }
        {
          isfetching && <p>Loading...</p>
        }
        {
          !isfetching && <SeriesList list={this.state.series}/>
        }
        

        
        
      </div>
    )
  }
}







