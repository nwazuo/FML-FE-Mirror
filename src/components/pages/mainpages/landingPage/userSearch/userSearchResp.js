import React, { useState, useEffect, useRef } from 'react';
import styles from './userSearchResp.module.css';
import UserSearchBoxResponsive from './UserSearchBoxResp'
import axios from 'axios';
import { useDispatch } from 'react-redux';


const UserSearchResponsive = () => {
  const [search, setSearch] = useState('');
  const [clear, setClear] = useState(false);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();


  const onChange = (e) => {
    e.preventDefault()
    const value = e.target.value;
    setSearch(value)
    setClear(true)

  };

  const onTextClear = () => {
    if (clear) {
      setSearch('')
      setClear(false)
    }
  }
  
  const isInitialMount = useRef(true);


  useEffect(() => {
    if( isInitialMount.current || search === '' ) {
      isInitialMount.current = false
    } else {
      const timer = setTimeout(() => {
        axios.get(`https://api.fundmylaptop.com/api/search/users?q=${search}`, {
        })
        .then((response) => {
          const data = response.data.data;
          setUserData(data)
          console.log('dataaa', data)
         
          // dispatch(searchedUsers(data))
        })
        .catch((error) => {
          console.log('error ---->>>', error.message);
        });
      }, 300);
  
      return () => clearTimeout(timer);
    }
  }, [search, dispatch]);
  


  return (
    <div className='nav-item w-100'>
      <div className='container'>
     <div className = {`${styles.UserSearchResp} nav-item`}>
     <div className={`${styles.FormGroupResp} form-group`}>
     <label htmlFor='searchUsersResp'></label>

     <input 
       type='text'
       placeholder='Search'
       id='searchUsersResp'
       className={`${styles.SearchFormResp} form-control`}
       value= {search}
       onChange={onChange}
     />
   </div>
   <button
   className={styles.SearchIconResp}
   ><i className={`fa fa-search ${styles.schIcResp}`} aria-hidden="true"></i>
   </button>
   {clear ? (
     <button 
       className={styles.CloseIconResp}
       onClick={onTextClear}>
     <i className={`fa fa-times ${styles.schIcResp}`} aria-hidden="true"></i>
     </button>
   ) : null}

   <UserSearchBoxResponsive 
   userData = {userData}
 />
     </div>


      </div>
      

    </div>
  )
}

export default UserSearchResponsive;

