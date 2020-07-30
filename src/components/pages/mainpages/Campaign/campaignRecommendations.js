import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import '../../../assets/bootstrap.css';
import Campaign from './style/campaign.module.scss';
import { Row } from 'react-bootstrap';

const CampaignRecommendations = ({ data }) => {
	return (
		<>
			<h3>Recommendations</h3>
			<div className="container">
				<div class={`${Campaign.recommends}`}>
					{isEmpty(data.recommendations) ? (
						<p className="text-center text-muted font-weight-bold">
							No recommendations yet...
						</p>
					) : (
						data.recommendations.map((item) => (
							<div className={`${Campaign.mediaBox}`}>
								<div className={`${Campaign.media}`}>
									<img src={item.photoURL} alt="profile" />
								</div>
								<div className={`${Campaign.content}`}>
									<p
										className={`${Campaign.name}`}
									>{`${item.firstName} ${item.lastName}`}</p>
									<Link
										to={`mailto:${item.email}`}
										className="d-block text-fml-secondary"
									>
										{item.email}
									</Link>
									<p className={`${Campaign.recommendText}`}>{item.text}</p>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</>
	);
};

export default CampaignRecommendations;
