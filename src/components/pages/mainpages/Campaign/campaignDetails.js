import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import Campaign from './style/campaign.module.scss';
import { Row } from 'react-bootstrap';

//Helper function to convert JSX output to array for use in String.replace() to output JSX instread of a string
//specific to the usecase in this file
const wrapTags = (text, regex, className) => {
	const textArray = text.split(regex);
	return textArray.map((str) => {
		if (regex.test(str)) {
			return (
				<a href={str} className={className}>
					{str}
				</a>
			);
		}
		return str;
	});
};

const CampaignDetails = ({ data }) => {
	let created = new Date(data.campaign.createdAt);
	let dd = String(created.getDate()).padStart(2, '0');
	let mm = String(created.getMonth() + 1).padStart(2, '0');
	let yyyy = created.getFullYear();

	let createdDate = `${mm}/${dd}/${yyyy}`;
	return (
		<div className={`${Campaign.detail} container`}>
			<Row>
				<div className={`${Campaign.detail__img} col-lg-6`}>
					<img src={data.campaign.posterURL} alt="campaign poster" />
				</div>
				<div className={`${Campaign.detail__desc} col-lg-6`}>
					<h1>
						Fund {`${data.user.firstName} ${data.user.lastName}`} Laptop
						Purchase
					</h1>
					<div
						className={`${Campaign.detail__desc__mediaObj} d-flex justify-content-start`}
					>
						<div className={`${Campaign.mediaImg}`}>
							<img src={`${data.user.photoURL}`} alt="profile" />
						</div>
						<div className={`${Campaign.mediaContent}`}>
							<span className="d-block">
								by{' '}
								<Link
									className="text-fml-secondary"
									to="#"
								>{`${data.user.firstName} ${data.user.lastName}`}</Link>
							</span>
							<div className="d-flex flex-wrap">
								<span>{data.user.campaigns} campaign created</span>
								<span>{data.user.address}</span>
								<span>{createdDate}</span>
							</div>
						</div>
					</div>
					<div className={`${Campaign.fundProgress}`}>
						<div className="d-flex justify-content-between">
							<span>
								Raised:{' '}
								{`${data.campaign.currency} ${Number(
									data.campaign.funded
								).toLocaleString()} of ${data.campaign.currency} ${Number(
									data.campaign.target
								).toLocaleString()}`}
							</span>
							<span className="font-weight-bold">
								{(function () {
									let percentage =
										(Number(data.campaign.funded) /
											Number(data.campaign.target)) *
										100;
									return percentage + '%';
								})()}
							</span>
						</div>
						<div className={`${Campaign.fundProgress__bar}`}>
							<div
								style={{
									width: `${
										(Number(data.campaign.funded) /
											Number(data.campaign.target)) *
										100
									}%`,
								}}
							></div>
						</div>
					</div>
					<div className={`${Campaign.detail__cta}`}>
						<Link
							to="#"
							className={`${Campaign.cta} btn btn-fml-secondary w-100 font-weight-bold`}
						>
							FUND THIS CAMPAIGN
						</Link>
						<Link
							to="#"
							className={`${Campaign.cta} btn btn-outline-fml-secondary w-100 font-weight-bold`}
						>
							SHARE THIS CAMPAIGN
						</Link>
					</div>
				</div>
			</Row>
			<div className={`${Campaign.description}`}>
				<h3>Description</h3>
				{data.campaign.description.split('\n').map((para) => {
					//match for new line characters in description text and split string into paragraph blocks
					return <p>{para}</p>;
					// let paragraphWithLink = wrapTags(
					// 	para,
					// 	/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
					// 	'text-fml-secondary'
					// );
					// return <p>{paragraphWithLink}</p>;
				})}
			</div>
		</div>
	);
};

export default CampaignDetails;
