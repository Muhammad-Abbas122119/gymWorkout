import { Pagination } from '@mui/material'
import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const SearchResult = (props) => {
  const { exercises , setDetailCardId } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8; // it is the number exercises that we wants to show using pagination

  const indexOfLastExerciseInPartition = exercisesPerPage * currentPage;
  const indexOfFirstExerciseInPartition = indexOfLastExerciseInPartition - exercisesPerPage;
  // the above two varibales will be used to get the slice for the whole data which is exercises;

  let exercisesPartition = []; // it will be used to save the exercises at per page in pagination;

  if (exercises) {

    exercisesPartition = exercises.slice(indexOfFirstExerciseInPartition, indexOfLastExerciseInPartition)
  }
  const paginate = (e, value) => {
    setCurrentPage(value); // the value variable in the above parameters come from the pagination numbers which is a predefualt process;
    
    window.scrollTo({ top: 1000, behavior: 'smooth' })
  }



  return (
    <div id='search-result'>
      <div className="pt-5 container">

        <h1 className='py-5' style={{ color: "var(--main-color)", fontFamily: "Roboto Serif", fontWeight: "bold" }}>Search Results</h1>

        <div className='row'>
          {
            exercises ? exercisesPartition.map((exercise) => {

              return (
                <div className=" col-sm-10 col-md-6 col-lg-4 col-xl-3 mb-3" key={exercise.id} onClick={()=>{setDetailCardId(exercise.id); window.scrollTo({ top: 10, behavior: 'smooth' })}}>
                  
                  <Link to ="/detail" className='text-decoration-none'>

                    <div className="card">
                      <img src={exercise.gifUrl} className="card-img-top" alt="Card Gift is loading..." />
                      <div className="card-body">
                        <button className='btn btn-success btn-sm me-3 rounded-pill opacity-75'>{exercise.bodyPart}</button>
                        <button className="btn btn-warning btn-sm rounded-pill opacity-75">{exercise.target}</button>
                        <h5 className="card-title mt-4">{exercise.name}</h5>
                      </div>
                    </div>

                  </Link>
                </div>
              )
            })
              : <div className="d-flex justify-content-center mt-5 ms-5" style={{ width: '100vw', color: "var(--main-color)" }}>
                <div className="spinner-border" role="status">
                </div>
              </div>
          }

        </div>
      </div>
      {
        exercises && exercises.length > 8 && (
          <div style={{paddingLeft:'35%'}}>
            <Pagination
              className='mt-5'
              count={Math.ceil(exercises.length / exercisesPerPage)}
              variant='outlined'
              color='primary'
              page={currentPage}
              onChange={paginate}
            />
          </div>
        )}
    </div>
  )
}

export default SearchResult