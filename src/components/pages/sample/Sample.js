import React from 'react';
import SampleCss from './Sample.module.css'
import Navbar from '../../Navbar';


const Sample = () => {
    return(

        <div className={SampleCss.sample}>
          <Navbar />
            <h1>Sample Page</h1>
          
        </div>
    )
}

export default Sample;