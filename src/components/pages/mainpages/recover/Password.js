import React from 'react';
import ResetPasswordCss from './Password.module.css';
import { Navbar,Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import {ResetPasswordController} from '../../../dataservices'
import {Button,Status} from '../../../utilities'
import pageurl from '../../../router/url/pageurl'
import {connect} from 'react-redux'
import {recoverPassword} from '../../../../actions'

const Password = ({...props}) => {
    const[isStatus,setIsStatus]=React.useState(false);
    const[isRequested,setIsRequested]=React.useState(false);
    const[isLoading,setIsLoading]=React.useState(false);
    const[inputDetails,setInputDetails] = React.useState({email:""});
    const[inputError,setInputError] = React.useState({email:(<p></p>)});
    
    function handleForm(e){
        let stat = ResetPasswordController.validateEmailInput(e.target.value);
        setInputDetails({...inputDetails,[e.target.name]:e.target.value});
        e.target.style.border = `1px solid ${stat}`
        setInputError({...inputError,[e.target.name]:
            stat === "green" ? (<p style={{color:"green",fontWeight:"bold"}}>Valid Email Address</p> ) : 
            stat === "red" ? (<p style={{color:"red",fontWeight:"bold"}}>Invalid Email Address</p>) : (<p></p>)})        
    }

    function handleSubmit(e){
        e.preventDefault();
        if(ResetPasswordController.validateEmail(inputDetails,setInputError)){setIsLoading(true);props.recoverPassword(inputDetails)}        
    }
    
    return(
        <ScrollIntoView><Navbar/>
        {(props.status || isRequested) && <Status buttonTxt={props.status ? "" : "TRY AGAIN"} 
                showButton={props.status} buttonUrl={props.status ? pageurl.LANDING_PAGE_URL : pageurl.RECOVER_PASSWORD_URL} 
    closeStatus={()=>{setIsRequested(false);setIsLoading(false);props.status && window.open(pageurl.LOGIN_PAGE_URL,'_self')}} status_message={props.status ? props.msg : props.error} />}
        <div className={ResetPasswordCss.reset_password_anon}>
            <div className={ResetPasswordCss.main_container_anon}>
              <div className={ResetPasswordCss.reset_password_header_anon}><h1>Recover Password</h1>
              <p>Enter your email address and we'll send you an email with<br /> instructions to reset your password.</p></div>
              <form>  
                <div className={ResetPasswordCss.reset_password_body_anon}>
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email address" name="email" value={inputDetails.email} onChange={(e)=>handleForm(e)} />
                  {inputError.email}
                  <Button load={isLoading} propsTitle={"Continue"} onClick={(e)=>{handleSubmit(e)}}></Button>
                </div>
            </form>
          </div>
        </div>
        <Footer/>
        </ScrollIntoView>
    )
}
const mapStateToProps=(state)=>{
  return{
    status : state.password.recoverPassword.success,
    msg : state.password.recoverPassword.message,
    error : state.password.passwordError.name
  }
}
const mapDispatchTpProps=()=>{return{recoverPassword}}
export default connect(mapStateToProps,mapDispatchTpProps())(Password);