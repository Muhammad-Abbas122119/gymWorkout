import React from 'react'
import {ScrollMenu} from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { LeftArrow , RightArrow } from '../utls/horizotalScroll';

const SimilarMuscles = (props) => {
  const {target , actualData} = props;

  const targetMuscles = actualData && actualData.filter(exercise=>exercise.target === target);


  return (
    <div id='similar-muscles'>
      <div className="container">

        <h3 style={{ color: 'var(--main-color)', fontFamily: "Roboto Serif", fontWeight: "bolder", textTransform: "capitalize",marginBottom:"35px" }}> exercises that target the same muscles </h3>

        <ScrollMenu LeftArrow = {LeftArrow} RightArrow = {RightArrow}>
          {
            targetMuscles && targetMuscles.map(item => {
              return (

                <div className="card mx-2" key={item}>

                  <img src={item.gifUrl} style={{ width: '250px', height: "250px" }} className="card-img-top" alt="Card Gift is loading..." />

                  <div className="card-body">
                    <button className='btn btn-success btn-sm me-3 rounded-pill opacity-75'>{item.bodyPart}</button>
                    <button className="btn btn-warning btn-sm rounded-pill opacity-75">{item.target}</button>
                    <h5 className="card-title mt-4">{item.name}</h5>
                  </div>
                </div>
        )
      })
    }
    </ScrollMenu>
      </div>
    </div>
  )
}

export default SimilarMuscles