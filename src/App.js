import React from 'react';
import { About,Header,Contact} from './container';
import { Navbar} from './components';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
         <Navbar/>      
        <Header/>
        <About/>
        <Contact/>
    </div>
  )
}

export default App
