import React from 'react'
import "./sport.css"
import foto from "./spImagess/fff1.png"
import foto2 from "./spImagess/fff2.png"
import foto3 from "./spImagess/ff3.png"
import spFoto from "./spImagess/gr.png"




const Sport = () => {
 
 
  
  return (
    <div className='spWrapper'>
    
      <div className='spBlockContent'>
      <img src={spFoto} alt="" />
      <div>

        <div className='spCard'>
          <img src={foto} alt="" />
          <button className='buttonTag'><h3 className='spH3'>Тренерский состав</h3></button>
        </div>
        <div className='spCard'>
          <img src={foto2} alt="" />
          <button className='buttonTag'><h3 className='spH3'>Спортивные достижения</h3></button>
        </div>
        <div className='spCard'>
          <img src={foto3} alt="" />
          <button className='buttonTag'><h3 className='spH3'>Виды спорта</h3></button>
         
        </div>
      </div>
      </div>
    </div>
  )
}

export default Sport
