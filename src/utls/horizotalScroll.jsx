import React, { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

export const LeftArrow = () =>{
  const {scrollPrev} = useContext(VisibilityContext);
  return(
    <button className='scroll-left' onClick={()=>{scrollPrev()}}><span><i className="fa-solid fa-arrow-left pe-3"></i></span></button>
  );
};

export const RightArrow = ()=>{
  const {scrollNext} = useContext(VisibilityContext);
  return(
    <button className='scroll-right' onClick={()=>scrollNext()}><span><i className="fa-solid fa-arrow-right ps-3"></i></span></button>
  );
};
// const HorezontalScroll = () => {

//   return (
//     <div>
//       <ScrollMenu LeftArrow = {LeftArrow} RightArrow={RightArrow}>
//          <div>data will be here....</div>
//       </ScrollMenu>
//     </div>

//   )
// }

// export default HorezontalScroll;   