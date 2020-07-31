import React from 'react';
import userPhoto from './img/user-photo.png';
import campaignPoster from './img/campaign-poster.jpg';

let testData = {
	user: {
		userId: 234,
		firstName: 'John',
		lastName: 'Doe',
		photoURL: userPhoto,
		address: 'Lagos, Nigeria',
		campaigns: 1,
	},
	campaign: {
		createdAt: '2020-07-25T15:53:09.320Z',
		description:
			'I run a small freelancing business in the heart of Lagos. My former laptop finally packed up after several attempts at refurbishing it, I would like a loan to get a new laptop to continue my business. My business loremipsum.com generates enough money to repay the loan in three months. I would really appreciate funding for this campaign. Thank you for your time 🙂.\n I run a small freelancing business in the heart of Lagos. My former laptop finally packed up after several attempts at refurbishing it, I would like a loan to get a new laptop to continue my business. My business loremipsum.com generates enough money to repay the loan in three months. I would really appreciate funding for this campaign. Thank you for your time 🙂.',
		target: '250000',
		currency: 'NGN',
		funded: '65200',
		fundCount: '24',
		posterURL: campaignPoster,
	},
	recommendations: [
		{
			photoURL: userPhoto,
			lastName: 'Doe',
			firstName: 'Jane',
			text:
				'Highly skilled at what he does. His skills are top notch. He has a vast range of experience in his discipline',
			email: 'janedoe@email.com',
			profileId: '32489',
		},
		{
			photoURL: userPhoto,
			lastName: 'Doe',
			firstName: 'Jane',
			text:
				'Highly skilled at what he does. His skills are top notch. He has a vast range of experience in his discipline',
			email: 'janedoe@email.com',
			profileId: '32489',
		},
		{
			photoURL: userPhoto,
			lastName: 'Doe',
			firstName: 'Jane',
			text:
				'Highly skilled at what he does. His skills are top notch. He has a vast range of experience in his discipline',
			email: 'janedoe@email.com',
			profileId: '32489',
		},
		{
			photoURL: userPhoto,
			lastName: 'Doe',
			firstName: 'Jane',
			text:
				'Highly skilled at what he does. His skills are top notch. He has a vast range of experience in his discipline',
			email: 'janedoe@email.com',
			profileId: '32489',
		},
	],
	fundHistory: [
		{
			funderPhoto: userPhoto,
			firstName: 'Mark',
			lastName: 'Essien',
			fundingAmount: '123554',
			currency: 'NGN',
			fundedTime: '2020-07-25T15:53:09.320Z',
		},
		{
			funderPhoto: userPhoto,
			firstName: 'Mark',
			lastName: 'Essien',
			fundingAmount: '123554',
			currency: 'NGN',
			fundedTime: '2020-07-25T15:53:09.320Z',
		},
		{
			funderPhoto: userPhoto,
			firstName: 'Mark',
			lastName: 'Essien',
			fundingAmount: '123554',
			currency: 'NGN',
			fundedTime: '2020-07-25T15:53:09.320Z',
		},
	],
};

export default testData;
