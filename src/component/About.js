import React from 'react'

const About = () => {
  return (
    <div className='container pt-4' style={{minHeight:"75vh"}}>
        <div>
            <h5>
                <p>The Gym workout website is created to help those who wants to be fit and healthy and they do not want to go to a gym. This website using APIs so make sure that your internet connection is stable. </p>
            </h5>
            <p>This website has a beautyful navbar through which people can easly access the exercises, home page and about page. </p>
            <p>It also a logo through which user cameback to the home page. </p>
            
            <h5>
              There is search field,
            </h5>
            <p>where user can search any type of exercise exesting in the website database.</p>
            <h5>
              <p>Below the search field there are beautyful cards which are scrollable and has the body names.</p>
            </h5>
            <p> When ever user click on the card it will serve exercises related to the card title</p>

            <h5> The SEARCH RESULT section also has beautyful cards which represents impressive way to learn an exercise technique.</h5>
            <p>On clicking at the exercise card user can see the details of the exercise. </p>

            <h5>The exercise details shows the specific detail, real YouTube exercise videos, similar equipments that can be used by the exercise and the exercises that target the same muscles. The last two components are also horizotally scrollable.</h5>
        </div>
    </div>
  )
}

export default About