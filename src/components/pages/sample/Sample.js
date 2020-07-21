import React from 'react';
import SampleCss from './Sample.module.css'
import Footer from '../../Footer';
import Navbar from '../../Navbar';


const Sample = () => {
    return(

        <div className={SampleCss.sample}>
          <Navbar />
            <h1>Sample Page</h1>
          <Footer />
        </div>
    )
}

export default Sample;