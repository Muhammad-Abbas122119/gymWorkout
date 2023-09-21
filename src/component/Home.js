import React from 'react'
import cover from '../images/cover.jpg'
const Home = () => {



    return (
        <div id='home'>
            <div className="container ">
                <div className="row">

                    <div className=' col col-md-6' >

                        

                        <div className="home-body ps-5 text-center text-md-start">

                            <div className='pt-md-4'>
                                <div className="text-uppercase fs-4 fw-bold" style={{paddingTop:'100px', color:'var(--main-color)',fontFamily:'Roboto Serif'}}>let's do an exercise</div>
                            </div>

                            <div className='text-capitalize pt-5 mt-md-2'>
                                <h2 className='fw-bold' style={{ fontFamily:'Roboto Serif,serif', textShadow:"0 0 var(--main-color)"}}>digital fitness club</h2>
                                
                            </div>
                            
                            <div className='pt-3 lead fs-4'>
                                <p>Check out the most effictive exercise personalized to you</p>
                                <button 
                                 style={{color:'var(--main-color)'}}
                                 className="btn-lg btn btn-danger fw-bold"
                                 onClick={()=>window.scrollTo({top : 700 , behavior : 'smooth'})}
                                >Explore Exercise</button>
                                </div>
                        </div>

                    </div>

                    <div className=" col col-md-6">
                        <img src={cover} alt="coverImage" className='cover d-none d-sm-block' />
                    </div>
                    <div className='pt-3 text-uppercase fw-bold d-none d-sm-block'><h1 className="bg-text">gym Exercise</h1></div>
                </div>

            </div>
        </div>
    )
}

export default Home