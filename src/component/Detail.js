import React from 'react'
import bodyPartIcon from '../images/bodyPart.jpg'
import targetIcon from '../images/target.jpg'
import equipmentIcon from '../images/equipment.jpg'
const Detail = (props) => {
    const {cardDetail} = props;

   const spanStyles = {color:"var(--main-color)" , fontWeight:'bold'}
  return (
    <div id='detail'>
        <div className="container">
            <div className="row">
                <div className="col-sm-10 col-md-6" style={{fontFamily:'Roboto Serif'}}>

                    <h1 className='fw-bold mt-5 mb-3 text-capitalize'style={spanStyles}>{cardDetail[0].name} </h1>

                    <p>Exercise is the best way to be strong and healthy. <span style={spanStyles}> {cardDetail[0].name} </span> is one of the best exercise to target your <span style={{color:"var(--main-color)",}}>{cardDetail[0].target}</span>. It will help you to improve your body and gain more energy.</p>
                    <div>
                        <div className='extra-detail'><img src={bodyPartIcon} alt="" /> <span className='h4'>{cardDetail[0].target}</span></div>
                        <div className='extra-detail'><img src={targetIcon} alt="" /> <span className='h4'> {cardDetail[0].bodyPart}</span></div>
                        <div className='extra-detail'><img src={equipmentIcon} alt="" /> <span className='h4'>{cardDetail[0].equipment}</span></div>
                    </div>
                </div>

                <div className="col-sm-10 col-md-6 mt-5">
                    <img src={cardDetail[0].gifUrl} alt="" style={{height:'450px'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail