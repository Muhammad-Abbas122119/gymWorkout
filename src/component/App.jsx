import React, { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import BodyParts from './BodyParts'
import SearchResult from './SearchResult'
import ExerciseDetails from './ExerciseDetails'
import Footer from './Footer'
import About from './About'

import { dataFetching, options } from '../utls/fitchData'

const App = () => {
  const [bodyPart, setBodyPart] = useState(null);
  const [exercises, setExercises] = useState(null);
  const [actualData, setActualData] = useState();
  const [detailCardId, setDetailCardId] = useState('');

  useEffect(() => {

    const fetchDataNow = async () => {
      try{

        const bodyPartData = await dataFetching('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
        
        const exerciseData = await dataFetching('https://exercisedb.p.rapidapi.com/exercises', options)
        
        setBodyPart(['all', ...bodyPartData])
        setExercises(exerciseData);
        setActualData(exerciseData);
        
        // console.log(bodyPartData, exerciseData);
      }catch(error){
        alert(`Plaese check your internet connection. ${'\n'} ${error} exercises data`);
      }

    }

    fetchDataNow();
  }, [])
  return (
    <div>
      <Router>

        <a className='arrow-up' href="#home"><i className="fa-solid fa-arrow-up fa-bounce"></i></a>
        <Navbar />
        <Routes>

          <Route exact path='/' element={<>
            <Home />

            <BodyParts
              bodyPart={bodyPart}
              exercises={exercises}
              setExercises={setExercises}
              actualData={actualData}
            />

            <SearchResult
              exercises={exercises}
              setDetailCardId={setDetailCardId}
            />
          </>

          } />

          <Route exact path='/detail' element={<ExerciseDetails
            detailCardId={detailCardId}
            exercises = {exercises}
            actualData = {actualData}
          />
          } />

          <Route exact path='/about' element = {<About />}/>

        </Routes>

          <Footer />
      </Router>
    </div>
  )

}

export default App;

/*

define an onclick function at card in search reaselt component which will take an id and assign that id to a state and send that state to the detail component.itrate the exercise array and match the id to exercise if id matched extract that card information. 
*/