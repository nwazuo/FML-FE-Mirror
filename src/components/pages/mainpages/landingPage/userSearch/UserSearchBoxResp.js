import React from 'react';
import styles from './userSearchBoxResp.module.css';
import { useSelector } from 'react-redux'

const UserSearchBoxResponsive = ({userData}) => {
  // const searched = useSelector(state => state.searchUser.searched)

  // console.log('ss', searched)
console.log('sss', userData)

  return (
    <div className={styles.UserSearchBoxResp}>
    {userData instanceof Array || userData !== null ? (
      <div className={`card ${styles.UserCardResp}`}>
        <ul className={`list-group list-group-flush ${styles.UserListResp}`}>
          {userData.map(({_id, photoURL, firstName, lastName}) => (
            <li 
              key={_id}
              class={`list-group-item ${styles.UserListItemResp}`}
            >
              <div className={`row py-4 ${styles.UserBoxResp}`}>
                <div className='col-4'>
                  <img src={photoURL} alt='avatar' className='rounded-circle img-fluid'/>
                </div>
                <div className='col-8'>
                    <p className={styles.UserNameResp}>{`${firstName} ${lastName}`}</p>
                    <div className="progress-bar-linear">
                    <div className={`progress my-2 ${styles.UserProgressResp}`}>
                        <div className={`progress-bar ${styles.UserProgressBarResp}`} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className={`progress-bar-text mb-0 ${styles.UserProgressTextResp}`}>N90, 000<span className={styles.UserBreakResp}>90%</span></p>
                    <p className= {`progress-bar-text pt-1 ${styles.UserProgressTintTextResp}`}>Raised of N100,000</p>

                  </div>
                </div>
             </div>
            </li>
          ))}
        </ul>
      </div>
    ) : <div>
    {''}
    </div>}
 
    
</div>


    )
}

export default UserSearchBoxResponsive;
