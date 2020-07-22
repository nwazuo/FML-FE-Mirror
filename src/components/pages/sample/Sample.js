import React from 'react';
import SampleCss from './Sample.module.css'
import { Navbar,Footer } from '../navigation/navigation';

const Sample = () => {
    return(
        <>
        <Navbar/>
        <div className={SampleCss.sample}>
         
            <h1>Sample Page</h1>
          
        </div>
        <Footer/>
        </>
    )
}

export default Sample;
