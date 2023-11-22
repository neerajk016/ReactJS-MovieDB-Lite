import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Series from './Series';
import SingleSeries from './SingleSeries';
  

export default function Main() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Series/>}/>

                <Route exact path="/series/:id" element={<SingleSeries />}/>


            
            </Routes>
        </Router>

      
    </div>
  )
}
