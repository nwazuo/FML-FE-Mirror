import React from 'react';

let testData = {
	user: {
		userId: 234,
		firstName: 'John',
		lastName: 'Doe',
		photoURL: './user-photo.png',
		address: 'Lagos, Nigeria',
		campaigns: 1,
	},
	campaign: {
		createdAt: '2020-07-25T15:53:09.320Z',
		description:
			'I run a small freelancing business in the heart of Lagos. My former laptop finally packed up after several attempts at refurbishing it, I would like a loan to get a new laptop to continue my business. My business loremipsum.com generates enough money to repay the loan in three months. I would really appreciate funding for this campaign. Thank you for your time 🙂./n I run a small freelancing business in the heart of Lagos. My former laptop finally packed up after several attempts at refurbishing it, I would like a loan to get a new laptop to continue my business. My business loremipsum.com generates enough money to repay the loan in three months. I would really appreciate funding for this campaign. Thank you for your time 🙂.',
		amount: '250000',
		currency: 'NGN',
		funded: '65200',
		fundCount: '24',
	},
	recommendations: [
		{
			photoURL: './user-photo.png',
			lastName: 'Doe',
			firstName: 'Jane',
			text:
				'Highly skilled at what he does. His skills are top notch. He has a vast range of experience in his discipline',
			profileId: '32489',
		},
		{
			photoURL: './user-photo.png',
			lastName: 'Doe',
			firstName: 'Jane',
			text:
				'Highly skilled at what he does. His skills are top notch. He has a vast range of experience in his discipline',
			profileId: '32489',
		},
		{
			photoURL: './user-photo.png',
			lastName: 'Doe',
			firstName: 'Jane',
			text:
				'Highly skilled at what he does. His skills are top notch. He has a vast range of experience in his discipline',
			profileId: '32489',
		},
		{
			photoURL: './user-photo.png',
			lastName: 'Doe',
			firstName: 'Jane',
			text:
				'Highly skilled at what he does. His skills are top notch. He has a vast range of experience in his discipline',
			profileId: '32489',
		},
	],
	fundHistory: [
		{
			funderPhoto: './user-photo.png',
			firstName: 'Mark',
			lastName: 'Essien',
			fundingAmount: '123554',
			fundedTime: '2020-07-25T15:53:09.320Z',
		},
		{
			funderPhoto: './user-photo.png',
			firstName: 'Mark',
			lastName: 'Essien',
			fundingAmount: '123554',
			fundedTime: '2020-07-25T15:53:09.320Z',
		},
		{
			funderPhoto: './user-photo.png',
			firstName: 'Mark',
			lastName: 'Essien',
			fundingAmount: '123554',
			fundedTime: '2020-07-25T15:53:09.320Z',
		},
	],
};

/* 
  - Error handling - incorrect campaign id's, network and request failures
*/

const withDummyData = (WrappedComponent, data) => (props) => {
	return <WrappedComponent {...props} data={data} />;
};

export function CampaignDetail({ match, data }) {
	return (
		<>
			<h1>It works, {match.params.campaignID}</h1>
			{JSON.stringify(data)}
		</>
	);
}

let json = {
	message: 'Campaign data fetched',
	data: {
		campData: {
			occupation: 'student',
			currency: 'NGN',
			amountAccumulated: 123456789,
			isFeatured: false,
			_id: '5d713995b721c3bb38c1f5d1',
			user: {
				photoURL:
					'https://res.cloudinary.com/major-stark/image/upload/v1581430386/samples/imagecon-group.jpg',
				role: 'user',
				_id: '5d7a514b5d2c12c7449be043',
				firstName: 'Saucecode',
				lastName: 'Ifedili',
				email: 'saucecode@gmail.com',
				phone: '2348175044841',
				address: '222 Ikorodu Road, Ilupeju, Lagos',
				createdAt: '2020-07-25T15:53:09.320Z',
				updatedAt: '2020-07-25T15:53:09.320Z',
			},
			title: 'Buy me a macbook air',
			description:
				'13 inches Macbook Air 1.1GHz Dual-Core Core i3 Processor with Turbo Boost up to 3.2GHz 256GB Storage Touch ID',
			photoURL:
				'https://res.cloudinary.com/major-stark/image/upload/v1581430386/samples/imagecon-group.jpg',
			location: 'lagos',
			amount: 111,
			repaymentPeriod: '2020-06-19T08:23:14.075Z',
			repaymentTimes: 5,
			createdAt: '2020-07-25T15:53:09.200Z',
			updatedAt: '2020-07-25T15:53:09.200Z',
		},
		recommenders: [
			{
				_id: '5f1c5565e5e316f1ba4f6da0',
				user: {
					photoURL:
						'https://res.cloudinary.com/major-stark/image/upload/v1581430386/samples/imagecon-group.jpg',
					_id: '5d7a514b5d2c12c7449be043',
					firstName: 'Saucecode',
					lastName: 'Ifedili',
					email: 'saucecode@gmail.com',
					phone: '2348175044841',
					address: '222 Ikorodu Road, Ilupeju, Lagos',
					createdAt: '2020-07-25T15:53:09.320Z',
					updatedAt: '2020-07-25T15:53:09.320Z',
				},
				recUser: '5d7a514b5d2c12c7449be043',
				text: 'jolly good fellow',
				createdAt: '2020-07-25T15:53:09.860Z',
				updatedAt: '2020-07-25T15:53:09.860Z',
				__v: 0,
			},
		],
	},
	success: true,
};

export default withDummyData(CampaignDetail, testData);
