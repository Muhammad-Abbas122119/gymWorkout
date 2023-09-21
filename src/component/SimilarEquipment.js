import React from 'react'
import {ScrollMenu} from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { LeftArrow , RightArrow } from '../utls/horizotalScroll';



const SimilarEquipment = (props) => {

  const {equipment , actualData} = props;

  const similarEquipment = actualData && actualData.filter(exercise =>exercise.equipment === equipment);

  return (
    <div id='similar-equipments'>
      <div className="container">

        <h3 style={{ color: 'var(--main-color)', fontFamily: "Roboto Serif", fontWeight: "bolder", textTransform: "capitalize",margin:"60px 0 35px" }}>exercises that used similar equipments </h3>

        <ScrollMenu LeftArrow = {LeftArrow} RightArrow = {RightArrow}>
          {
            similarEquipment && similarEquipment.map((item,index) => {
              return (
                
                <div className="card mx-2" key={index}>

                  <img src={item.gifUrl} style={{ width: '250px', height: "250px" }} className="card-img-top" alt="Card Gift is loading..." />

                  <div className="card-body">
                    <button className='btn btn-success btn-sm me-3 rounded-pill opacity-75'>{item.bodyPart}</button>
                    <button className="btn btn-warning btn-sm rounded-pill opacity-75">{item.target}</button>
                    <h5 className="card-title mt-4" title='equipment Name'>{item.equipment}</h5>
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

export default SimilarEquipment