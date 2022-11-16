import React from 'react';
import {NavigationDots,SocialMedia} from '../components';
 var year = new Date().getFullYear();

const appWrapp = (Component,idName,classNames) => function HOC() {
  return (
    /*Taking sections, give it an id so that know where we are at*/
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia/>
      <div className='app__wrapper app__flex'> 
      <Component/>
      <div className='copyright'>
        <p className='p-text'>@{year} Sahira.</p>
        <p className='p-text'>All rights reserved</p>
      </div>
      </div>
      <NavigationDots active={idName}/>
    </div>
  )
}

export default appWrapp
