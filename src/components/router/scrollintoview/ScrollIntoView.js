import React from 'react'
import {createBrowserHistory} from 'history';

<<<<<<< HEAD
let oldpath = "";
const ScrollIntoView =(props)=> {  
  let history = createBrowserHistory();
=======
const ScrollIntoView =(props)=> {  
  let history = createBrowserHistory();
  let oldpath = "";
>>>>>>> d0a38130cf095017cab25253bf9e1648a46a1261
  React.useEffect(()=>{  
    function doit(){
      if(history.location.pathname !== oldpath){
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'},0)
        // eslint-disable-next-line
        oldpath = history.location.pathname;
      }
    }doit()
  })
  return(<>{props.children}</>)
}
export default ScrollIntoView;