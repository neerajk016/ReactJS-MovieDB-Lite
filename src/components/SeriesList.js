
import React, { Component } from 'react'
import "../App.css"
import {
  Link
} from "react-router-dom";







const SeriesListItem=({series})=>(
  <div>
    <Link to={`series/${series.show.id}`}>{series.show.name}</Link>
  </div>
  

)

// const SeriesListItem=(props)=>(
//   <div>
//     <li >{props.series.show.name}</li>
//   </div>
  

// )





export class SeriesList extends Component {


  render() {
    return (
      <div>
        <ul className='series-list'>
            {this.props.list.map(series=>(
                <SeriesListItem key={series.show.id} series={series} />
            ))}
        </ul>
        
      </div>
    )
  }
}

export default SeriesList










