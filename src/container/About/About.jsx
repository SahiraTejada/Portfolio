import React from 'react';
import {motion} from 'framer-motion';
import { images } from '../../constants';
import { AppWrapp } from '../../wrapper';
import './About.scss';

const abouts =[
  {title: 'Web Development', description:'I am a good web developer.',imgURL:images.web},
  {title: 'Web Design', description:'Design websites that are displayed.',imgURL:images.webdesign},
  {title: 'Databases', description:'Can assist in  managing your clients and your business',imgURL:images.database},
  {title: 'UI/UX', description:'Provide positive experiences that keep users loyal to your brand.',imgURL:images.ux}];


const About = () => {
  return (
    <div>
    <h2 className='head-text'>
      Any Bussiness <span> Needs</span><br></br> a
      <span> Software Solution</span> 
    </h2>

    <div className='app__profiles'>
      {abouts.map((about,index)=> (
        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration: 0.5,type: 'tween'}}
        className='app__profile-item'
        key={about.title + index}
        >
          <img src={about.imgURL} alt={about.title} style={{objectFit:'cover'}}/>
          <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
           <p className='p-text' style={{marginTop:10}}>{about.description}</p>
        </motion.div>
      ))}

    </div>
    </div>
  )
}

export default AppWrapp(About,'about');

