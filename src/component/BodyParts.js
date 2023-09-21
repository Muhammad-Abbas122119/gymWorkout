import React, { useState } from "react";
import logo from '../images/awesome.png'
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { LeftArrow , RightArrow } from "../utls/horizotalScroll";

const BodyParts = (props) => {
    const {bodyPart, setExercises , actualData} = props; 
    
   const handleClick = (bodyPartCardSender) =>{
    // console.log('button click')
    const search = document.getElementById('search').value.toLowerCase()+bodyPartCardSender;
    
    

    if(search){
        if(search === 'all'){
            setExercises(actualData)
        }
        else{
            const searchedData = actualData.filter((exercise)=>{
                return exercise.bodyPart.toLowerCase().includes(search)||
                        exercise.name.toLowerCase().includes(search)||
                        exercise.target.toLowerCase().includes(search)||
                        exercise.equipment.toLowerCase().includes(search)
            })
            // console.log(searchedData);
            setExercises(searchedData);
        }
            window.scrollTo({top:1100 , behavior:'smooth'})
    }
   

    // console.log(search);
    document.getElementById('search').value = '';
   }
    return (
        <div id="exercises">
            <div className="container">

                <div className="text-center pt-5">

                    <h2 className="text-capitalize pt-4 fs-1 fw-bold" style={{ color: 'var(--main-color)', fontFamily: "Roboto Serif", letterSpacing: '3px' }}>exercises that you may know</h2>

                    <div className="container col-10 py-4">
                        <div className="input-group ">

                            <input type="text" className="form-control" placeholder="Search Exsercise" id="search"/>

                            <button className="btn btn-lg btn-danger" onClick={()=>handleClick('')}>Search</button>

                        </div>
                    </div>

                </div>
                <ScrollMenu LeftArrow ={LeftArrow} RightArrow={RightArrow}>
                    {
                       bodyPart?bodyPart.map((item, index) => {
                            return (
                                    <div key={item} className="exercises-card me-4 text-center bg-light py-4" style={{width:'200px',cursor:'pointer'}} onClick={()=>handleClick(item)}>

                                        <img src={logo} alt="" style={{ width: '80px', height: "80px" }} />

                                        <div>
                                            <h5 style={{ color: 'var(--main-color)', fontFamily: 'Roboto Serif', paddingTop: "20px" }}>{item}</h5>
                                        </div>
                                    </div>
                            )
                        })
                        :<div className="d-flex justify-content-center mt-5" style={{width:'100vw',color:"var(--main-color)"}}>
                        <div className="spinner-border" role="status">
                        </div>
                      </div>
                    }

                </ScrollMenu>

            </div>
            
        </div>
    )
}

export default BodyParts;