import React from 'react'
import "./coledj.css"
import cljFoto from "./cljImgg/Снимок экрана 2023-05-22 221338.png"
import cljFoto2 from "./cljImgg/cljFoto2.png"
import cljFoto3 from "./cljImgg/cljFoto3.png"
import cljFoto4 from "./cljImgg/cljFoto4.png"
import cljFoto5 from "./cljImgg/cljFoto5.png"
import cljFoto6 from "./cljImgg/cljFoto6.png"
import cljFoto7 from "./cljImgg/cljFoto7.png"
import cjF1 from "./cljImgg/Cj1.png"
import cjF2 from "./cljImgg/Cj2.png"
import cjF3 from "./cljImgg/Cj3.png"
import cjF4 from "./cljImgg/Cj5.png"

const Colledj = () => {
  return (
    <div className='cljWrapper'>
      <div className='cljCoteinerBlock'>
        <div className='cljBlockFirst'>
          <img style={{width:"240px",height:"300px"}} src={cljFoto} alt="" />
          <div className='cljConteinerText'>
            <h2>Кожомат уулу Тилек</h2>
            <p>
              Назначен на должность заместителя директора по воспитательной работе Республиканского спортивного колледжа имени Сыдыкова.</p>
              <p>Место рождения: село 8-март, Нарынский район, Нарынская область Год рождения: 20.08.1992</p>
              <p>Образование: 2013-2016 Нарынский Педагогический Колледж им. С. Нааматова 2017-2021 гг. на заочной основе, Нарынский государственный университет, факультет педагогики.</p>
              <p>2017-2021 Всемирный университет Иордании, юридический факультет.

              </p>
          </div>
        </div>
        <div className='cljBlockFoto'>
          <div style={{display:"flex",flexDirection:"row"}}>
            <img style={{height:"300px",marginRight:"60px"}} src={cljFoto2} alt="" />
           
            <img style={{width:"450px",height:"300px"}}  src={cljFoto3} alt="" />
          </div>
          <p className='pp'>В целях духовного воспитания детей, обучающихся в школе, проводятся воспитательные часы в комнате отдыха, расположенной в нашем общежитии №2.</p>
        </div>
        <div className='cljBlockFoto'>
          <div style={{display:"flex",flexDirection:"row"}}>
            <img style={{height:"300px",marginRight:"60px"}} src={cljFoto4} alt="" />
           
            <img style={{width:"450px",height:"300px"}}  src={cljFoto5} alt="" />
          </div>
          <p className='pp'>С целью физического воспитания наших студентов организуются специальные спортивные игры.</p>
        </div>
        <div className='cljBlockFoto'>
          <div style={{display:"flex",flexDirection:"row"}}>
            <img style={{height:"300px",marginRight:"60px"}} src={cljFoto7} alt="" />
           
            <img style={{width:"450px",height:"300px"}}  src={cljFoto6} alt="" />
          </div>
          <p className='pp'>По инициативе заместителя директора по воспитательной работе г-на Кожомат уулу Тилек были привлечены спонсоры, и в целях повышения интеллектуальных способностей детей была оформлена комната отдыха нашего общежития №2 и организована книжная полка.

Комната отдыха названа в честь Кумушбекова Чынгыза, скончавшегося по болезни во время плодотворной работы в школе.</p>
        </div>
        <div className='cljBlockFotos'>
          <img src={cjF1} alt="" />
          <img src={cjF2} alt="" />
          <img src={cjF3} alt="" />
          <img src={cjF4} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Colledj
