import React from 'react';
import ResetPasswordCss from './ResetPassword.module.css';
import '../../../assets/bootstrap.css';
import { Navbar,Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import {ResetPasswordController} from '../../../dataservices'
import {Button,Status} from '../../../utilities'
import pageurl from '../../../router/url/pageurl'

const ResetPassword = ({...props}) => {

    const[token,setToken] = React.useState({});
    const[isStatus,setIsStatus]=React.useState(false);const[isRequested,setIsRequested]=React.useState(false);
    const[isLoading,setIsLoading]=React.useState(false);
    const[inputDetails,setInputDetails] = React.useState({password:"",confirmPassord:""});
    const[inputError,setInputError] = React.useState({});
    React.useEffect(()=>{ const {match:{params}} = props; setToken(params.token);})
    function handleForm(e){setInputDetails({...inputDetails,[e.target.name]:e.target.value});}
    function handleSubmit(e){e.preventDefault();
        if(ResetPasswordController.validatePasswordInput(inputDetails,setInputError)){
          ResetPasswordController.resetPasswordCss(token,inputDetails,setIsStatus,setIsRequested,setIsLoading,setInputError,inputError);
        }
    }
    return(
        <ScrollIntoView><Navbar/>
        {isRequested && <Status closeStatus={()=>{setIsRequested(false);setIsLoading(false);isStatus && window.open(pageurl.RESET_PASSWORD_URL,'_self')}} status_message={isStatus ? "Password Reset Successful" : "Password Not Reset"} />}
        <div className={ResetPasswordCss.reset_password_anon}>
            <div className={ResetPasswordCss.main_container_anon}>
              <div className={ResetPasswordCss.reset_password_header_anon}><h1>Reset Password</h1><p>Enter your new password and confirm to continue.</p></div>
              <form>  
                <div className={ResetPasswordCss.reset_password_body_anon}>
                  <label className="formGroupExampleInput1" >Enter New Password</label>
                  <input type="password" placeholder="Enter new password" name="password" className="form-control" id="password" value={inputDetails.password} onChange={(e)=>handleForm(e)} />
                  <label className="formGroupExampleInput">Enter New Password</label>
                  <input type="password" placeholder="Re-enter new password" name="confirmPassword" className="form-control" id="passsword" style={{marginBottom: '10%' }} value={inputDetails.confirmPassord} onChange={(e)=>handleForm(e)} />
                  <Button load={isLoading} propsTitle={"Continue"} onClick={(e)=>{handleSubmit(e)}}></Button>
                </div>
            </form>
          </div>
        </div>
        <Footer/></ScrollIntoView>
    )
}
export default ResetPassword;