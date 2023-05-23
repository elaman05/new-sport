import React from 'react'
import new01 from "./NewImg/Снимок экрана 2023-05-23 122611.png"
import new02 from "./NewImg/new1.png"
import new03 from "./NewImg/new2.png";
import new04 from "./NewImg/new3.png";
import new05 from "./NewImg/new4.png";
import new06 from "./NewImg/new5.png";
import new07 from "./NewImg/mew7.png";
import new08 from "./NewImg/new8.png";
import "./new.css"
const New = () => {
  return (
		<div className='newBlok'>
			<div className='newww'>
				<div className='new0001'>
					<img width={1250} src={new01} alt='' />
					<br />
					<br />
					<img width={1250} src={new02} alt='' />
					<br />
					<br />

					<img width={950} src={new03} alt='' />
					<br />
					<br />
					<img width={1300} src={new04} alt='' />
					<br />
					<br />
					<img width={900} src={new05} alt='' />

					<br />
					<br />
					<br />
					<img width={1250} src={new06} alt='' />



	<div className='newter'>
					<img width={1250} src={new07} alt='' />
					<br />
					<br />
					<img width={1250} src={new08} alt='' />
				</div>

				</div>

			
			</div>
		</div>
	);
}

export default New
