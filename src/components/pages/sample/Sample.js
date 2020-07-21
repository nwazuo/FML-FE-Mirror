<<<<<<< HEAD
import React from 'react';
import SampleCss from './Sample.module.css'


const Sample = () => {
    return(

        <div className={SampleCss.sample}>

            <h1>Sample Page</h1>

        </div>
    )
}

=======
import React from 'react';
import SampleCss from './Sample.module.css'
import Navbar from '../../Navbar';
import Footer from '../../Footer';


const Sample = () => {
    return(
      <>
       <Navbar />
        <div className={SampleCss.sample}>
         
            <h1>Sample Page</h1>
          
        </div>
        <Footer />
      </>
    )
}

>>>>>>> 5eaf3abcde4502adf722d93e10ff4ddf7a742ef9
export default Sample;