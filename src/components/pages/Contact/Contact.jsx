import React from 'react'
import "./contact.css"
import cont001 from "./CnFoto/cont1.png"

import cont002 from "./CnFoto/cont2.png";

const Contact = () => {
  return (
		<div className='contPop'>
			<div className='contBlok'>
				<div>
					{/*  */}
					<br />
					<br />
					<br />

					<img className='cont0001' src={cont001} alt='' />

					<div className='contddcc'>
						<div className='contddcc11'>
							<div className='conss1'>
								<a href='https://instagram.com/rsk.sh.sydykov'>. </a>
							</div>

							<div className='conss2'>
								<a href='https://goo.gl/maps/hfne5T3sYXbyDFMr6'>.</a>
							</div>

							<div className='conss3'>
								{" "}
								<a href='https://telegram.me/'>.</a>{" "}
							</div>

							<div className='conss4'>
								{" "}
								<a href='https://m.youtube.com/channel/UCiX_MQK7gYPjf8PxunaoS4g?fbclid=PAAaYnTW9IEy4i7zOgoEzIv88vhldsU3ioOrDIYjoyAY0ddwUI_QvdIxUK8VI'>
									.
								</a>{" "}
							</div>

							<div className='conss5'>
								{""}
								<a href=''>.</a>{" "}
							</div>

							<div className='conss6'>
								{""}
								<a href=''>.</a>{" "}
							</div>
						</div>
					</div>

					{/*  */}
				</div>
				<div>
					<br />
					<br />
					<img className='cont0002' src={cont002} alt='' />
				</div>
				<br />
				<br />
				<br />
				<div className='confooter'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7102729256085!2d74.66763607476462!3d42.87895900216345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7910740aff5%3A0xe81db0391e2d818!2z0KDQtdGB0L_Rg9Cx0LvQuNC60LDQvdGB0LrQuNC5INGB0L_QvtGA0YLQuNCy0L3Ri9C5INC60L7Qu9C70LXQtNC2INC40LwuINCoLiDQodGL0LTRi9C60L7QstCw!5e0!3m2!1sru!2skg!4v1682474593130!5m2!1sru!2skg'
						width='600'
						height='400'
						allowfullscreen=''
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'></iframe>
				</div>
			</div>
		</div>
	);
}

export default Contact
