import React from 'react';
import './Contact.scss';
import {AppWrapp} from '../../wrapper';
import { images } from '../../constants';

const Contact = () => {
  return (
    <div style={{marginBottom:'80px'}}>
      <h2 className='head-text'>
        Contact <span> Me  </span> 
      </h2>
      <div className="app__work-filter">
     <div className='app_contact' style={{marginBottom:'30px'}}>
      <div className='app_contact-imgs'>
        <img src={images.gmail} className='app__logo-gmail' alt="" />
      </div> 
      <div className='app_contact-email'>sahiratejada@gmail.com </div>
      </div>
      <div className='app_contact'>
      <div className='app_contact-imgs'>
        <img src={images.outlook} className='app__logo-gmail' alt="" />
      </div> 
      <div className='app_contact-email'>sahira2208@hotmail.com</div> 
      </div>
      </div>
    </div>
  )
}

export default AppWrapp(Contact,'contact');