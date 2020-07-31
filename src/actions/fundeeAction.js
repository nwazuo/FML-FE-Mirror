import  axios from 'axios'
import {FETCH_FUNDEE_DASHBOARD_INFOS} from '../reducers/types'

let baseURL = 'https://api.fundmylaptop.com';

export function  fetchFundeeDashboard  () {
   return dispatch=>{
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('FMLToken');
       axios.get(`${baseURL}/api/campaigns/fundeeOverview`)
      .then(function (response) {
        
        dispatch({
            type:FETCH_FUNDEE_DASHBOARD_INFOS,
            payload:response.data.data
        })
      
      })
      .catch(function (error) {
        console.log('not dispatched',error);
      })
     
        }
    
}

export const fetchFundeeCampaigns = async () =>{
	try{
		   return await axios.get(`${baseURL}/api/campaigns/listRequests`, {
        headers:{ Authorization: localStorage.getItem('FMLToken')}
		   });
	   } catch (err){
		   throw err;
	  }
}


export const fetchFundeeInvestments = async () =>{
	try{
		   return await axios.get(`${baseURL}/api/campaigns/listCampaigns`, {
        headers:{ Authorization: localStorage.getItem('FMLToken')}
		   })
	   } catch (err){
		   throw err;
	  }
}

