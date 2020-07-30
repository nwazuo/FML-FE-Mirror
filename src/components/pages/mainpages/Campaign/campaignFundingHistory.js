import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import '../../../assets/bootstrap.css';
import Campaign from './style/campaign.module.scss';
import { Row } from 'react-bootstrap';
import timeago from './timeago';

const FundingHistory = ({ data }) => {
	return (
		<div className="col-lg-5 order-lg-2">
			<div className="container">
				<div className={`${Campaign.funding}`}>
					<h5>FUNDING({data.fundHistory.length})</h5>
					<Link
						to="#"
						className={`${Campaign.cta} btn btn-fml-secondary w-100 font-weight-bold`}
					>
						FUND THIS CAMPAIGN
					</Link>
					<div className={`${Campaign.funds}`}>
						{isEmpty(data.fundHistory) ? (
							<p className="text-center text-muted font-weight-bold">
								No funding yet...
							</p>
						) : (
							data.fundHistory.map((item) => (
								<>
									<div className={`${Campaign.mediaBox}`}>
										<div className={`${Campaign.media}`}>
											<img src={item.user.photoURL} alt="profile" />
										</div>
										<div className={`${Campaign.content}`}>
											<p>
												{`${item.user.firstName} ${item.user.lastName} donated`}{' '}
												<span className="w-100 d-block d-lg-none"></span>
												{
													/* ${item.currency} */ `${Number(
														item.amount
													).toLocaleString()}`
												}
											</p>
											<p className={`${Campaign.timeago}`}>
												{timeago(new Date(item.createdAt).getTime())}
											</p>
										</div>
									</div>
									<button
										className={`${Campaign.seeMoreBtn} btn btn-outline-fml-secondary mx-auto`}
									>
										SEE ALL
									</button>
								</>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FundingHistory;
