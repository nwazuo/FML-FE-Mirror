import Server from '../../services/server/Server';

const token = localStorage.getItem('FMLToken');
const getCampaignDetailsEndPoint = process.env.REACT_APP_GET_CAMPAIGN_END_POINT;

function getCampaignDetails(uID, setCampaignDetails, handleError) {
	console.log({ uID, token });
	Server.authGetCampaign(`${getCampaignDetailsEndPoint}/${uID}`, token)
		.then((response) => {
			console.log('request successful', response);
			response && setCampaignDetails(response.data.data);
		})
		.catch((error) => {
			console.log('error  in catch', { error });
			handleError(error);
		});
}

const CampaignDetailController = {
	getCampaignDetails,
};

export default CampaignDetailController;
