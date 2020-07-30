import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
import '../../../assets/bootstrap.css';
import Campaign from './style/campaign.module.scss';
import { Row } from 'react-bootstrap';
import { Navbar, Footer } from '../../navigation';

// import dummy data (for initial testing purposes)
import testData from './dummyData';

// controller for data fetching logic
import CampaignDetailController from '../../../dataservices/campaignDetailController';

// campaign page fragments
import CampaignDetails from './campaignDetails';
import CampaignRecommendations from './campaignRecommendations';
import CampaignFundingHistory from './campaignFundingHistory';

import ClipLoader from 'react-spinners/ClipLoader';
import ErrorImg from '../../../assets/images/Error.svg';

/* 
  - Error handling - incorrect campaign id's, network and request failures
*/

// Higher Order Component to handle data fetching and facilitate use of dummy data(for initial testing)
const withData = (WrappedComponent, dummyData) => (props) => {
	const [campaignData, setCampaignData] = useState(); // campaign data state
	const [getError, setGetError] = useState(); // error state
	const [isLoading, setIsLoading] = useState(true); // loading boolean state

	// handle error
	function handleError(error) {
		console.log('Error came o', error);
		if (error) {
			if (error.response.status === 400) {
				setGetError('Campaign not found!');
			}
		}
		setIsLoading(false);
	}

	// handle successful data receipt
	function handleSuccess(responseData) {
		console.log('response data', responseData);
		let resObj = responseData;
		let userInfo = resObj.campaignData.user;
		let campaignInfo = resObj.campaignData;
		let fundingInfo = resObj.campaignfundings;
		let recommendations = resObj.recommenders;
		let campaignFundings = resObj.campaignfundings;
		let mapData = {
			user: {
				userId: userInfo._id,
				firstName: userInfo.firstName,
				lastName: userInfo.lastName,
				photoURL: userInfo.photoURL,
				address: userInfo.address,
			},
			campaign: {
				createdAt: campaignInfo.createdAt,
				description: campaignInfo.description,
				target: campaignInfo.amount,
				currency: campaignInfo.currency,
				funded: campaignInfo.amountAccumulated,
				fundCount: fundingInfo.length,
				posterURL: campaignInfo.photoURL,
			},
			recommendations: recommendations,
			fundHistory: campaignFundings,
		};

		setCampaignData(mapData);
		setIsLoading(false);
	}

	// fetch campaign data from API
	useEffect(() => {
		setIsLoading(true);
		CampaignDetailController.getCampaignDetails(
			props.match.params.campaignID,
			handleSuccess,
			handleError
		);
	}, []);

	return (
		<WrappedComponent {...props} data={campaignData} loading={isLoading} />
	);
};

// page loading indicator component
const Loading = ({ loading }) => {
	return (
		<div class={`${Campaign.loading}`}>
			<ClipLoader size={45} loading={loading} color={'var(--fml-secondary)'} />
		</div>
	);
};

// no-campaign/campaign not found indicator
const NoCampaign = () => {
	return (
		<div class={`${Campaign.noCampaign}`}>
			<img src={ErrorImg} alt="error" />
			<p className="mt-2 mt-md-3 font-weight-bold text-fml-primary">
				Campaign not found!
			</p>
		</div>
	);
};

// main page component
export function CampaignDetail({ match, data, loading }) {
	return (
		<ScrollIntoView>
			<Navbar />
			{loading ? (
				<Loading loading={loading} />
			) : !loading && isEmpty(data) ? (
				<NoCampaign />
			) : (
				<div className={`${Campaign.pageWrapper} container-fluid`}>
					<CampaignDetails data={data} />

					<div className={`${Campaign.recFundWrapper} container`}>
						<Row>
							<CampaignFundingHistory data={data} />
							<div class={`${Campaign.recommendations} col-lg-7`}>
								<CampaignRecommendations data={data} />
								{/* Insert Recommendation form component here  */}
							</div>
						</Row>
					</div>
				</div>
			)}
			<Footer />
		</ScrollIntoView>
	);
}

export default withData(CampaignDetail, testData);
