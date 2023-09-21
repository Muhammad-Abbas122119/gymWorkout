import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    
    const myActive = (indicator) => {
        // console.log(indicator);
        let exerciseLabel = document.getElementsByClassName('exercise-label')[0];

        let homeLabel = document.getElementsByClassName('home-label')[[0]];
        
        let aboutLabel = document.getElementsByClassName('about-label')[0];
        // console.log(exerciseLabel);

        if (indicator === 'home') {
            homeLabel.classList.add('my-active');
            exerciseLabel.classList.remove('my-active');
            aboutLabel.classList.remove('my-active');
            exerciseLabel.style.display  = 'block';
        }
        else if(indicator === 'exercise'){
            aboutLabel.classList.remove('my-active');
            homeLabel.classList.remove('my-active');
            exerciseLabel.classList.add('my-active');
        }
        else if(indicator === 'about') {
             aboutLabel.classList.add('my-active');
             homeLabel.classList.remove('my-active');
             exerciseLabel.style.display = 'none'
         }
    }

    return (
        <div id='navbar'>
            <div className="container">
            <div className='py-3 align-items-center d-flex'>
                <Link to="/" className=''>
                    <i 
                     className="fa-solid fa-dumbbell logo"
                     title='Gym Workout dispaly banner'
                     onClick={()=>myActive('home')} 
                    ></i>
                </Link>

                <span className='d-flex ps-lg-5 nav-menu'>

                    <h5 className='my-active home-label' onClick={() => myActive('home')}>
                        <Link to="/">HOME</Link>
                    </h5>

                    <h5 className='exercise-label' onClick={() => myActive('exercise')}>
                        <a href="#search-result">Exercises</a>
                    </h5>

                    <h5 className="about-label" onClick={()=>myActive('about')}>
                        <Link to='/about'>About</Link>
                    </h5>
                </span>
            </div>
            </div>
        </div>
    )
}

export default Navbar