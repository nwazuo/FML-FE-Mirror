import React from 'react';
import '../../../assets/bootstrap.css';
import Style from './ComingSoon.module.scss';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

//Media Assets
import Logo from '../../../assets/images/logo.svg';
import Illustration from '../../../assets/images/landing-illustration.svg';
import FindCampaignSvg from '../../../assets/images/find-campaign-icon.svg';
import FundCampaignSvg from '../../../assets/images/fund-campaign-icon.svg';
import GetReturnsSvg from '../../../assets/images/get-returns-icon.svg';
import BorrowersStock from '../../../assets/images/borrowers-stock.png';
import LendersStock from '../../../assets/images/lenders-stock.png';
import SellersStock from '../../../assets/images/sellers-stock.png';
import ArrowIcon from '../../../assets/images/arrow-icon.svg';
import Twitter from '../../../assets/images/twitter.svg';
import Linkedin from '../../../assets/images/linkedin.svg';

const EmailForm = () => {
	return (
		<Form className={Style.emailForm}>
			<Form.Row>
				<Col xs={12} lg>
					<Form.Control
						className="w-100 m-0 mb-2 mb-sm-0"
						id="waitlistEmail"
						placeholder="Enter your email"
					/>
				</Col>
				<Col xs={12} lg="auto" className="px-lg-0">
					<Button
						type="submit"
						className="h-100 w-100 w-lg-auto btn-fml-secondary mt-1 mt-lg-0 px-4"
					>
						Join waitlist
					</Button>
				</Col>
			</Form.Row>
		</Form>
	);
};

const ComingSoon = () => {
	return (
		<>
			<header
				className={`container d-flex justify-content-between ${Style.landingHeader} mt-3 mt-md-5 px-3 px-lg-0`}
			>
				<div className="logo">
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
				</div>
				<Link to="/" className="text-dark font-weight-bold align-self-center">
					Join waitlist
				</Link>
			</header>
			<Container
				className={`${Style.heroSection} container d-flex flex-wrap px-3 px-lg-0 mt-5`}
			>
				<Row className="align-items-center">
					<Col xs={12} lg={6}>
						<h1>Invest in people by funding a laptop purchase</h1>
						<p className={Style.heroText}>
							Join other people who invest and touch lives by contributing to a
							laptop purchase.
						</p>
						<EmailForm />
					</Col>
					<Col xs={12} lg={6} className=" mt-4 mt-lg-0">
						<img
							className="w-100"
							src={Illustration}
							alt="Invest Illustration"
						/>
					</Col>
				</Row>
			</Container>
			<Container fluid className={`${Style.howItWorks}`}>
				<h2>How it works</h2>
				<Container
					className={`${Style.howItWorks__contain} d-flex flex-wrap justify-content-between`}
				>
					<Col lg={3} className={`${Style.howItWorks__item}`}>
						<img src={FindCampaignSvg} alt="find campaign icon" />
						<h4>Find a Campaign</h4>
						<p>Start by selecting a campaign that catches your attention</p>
					</Col>
					<Col lg={3} className={`${Style.howItWorks__item}`}>
						<img src={FundCampaignSvg} alt="find campaign icon" />
						<h4>Fund a Campaign</h4>
						<p>Fund the campaign with any amount of money you want</p>
					</Col>
					<Col lg={3} className={`${Style.howItWorks__item}`}>
						<img src={GetReturnsSvg} alt="find campaign icon" />
						<h4>Get High Returns</h4>
						<p>Get high returns depending on the amount of money you invest</p>
					</Col>
				</Container>
			</Container>
			<Container className={`${Style.actors} px-3 px-lg-0`}>
				<Row className={`${Style.actors__item}`}>
					<div class={`${Style.actors__photo} order-2`}>
						<img src={BorrowersStock} alt="borrow borrow guy" />
					</div>
					<div class={`${Style.actors__aside}`}>
						<h4>For Borrowers</h4>
						<p>
							Get quick loans to fund your laptop needs, its fast and
							hassle-free, all you have to do is signup, create a fund my laptop
							campaign watch your campaign reach the goal, pay back the money
							throughout a chosen period
						</p>
						<Button className="btn-fml-outline-secondary">
							Join List
							<i class="d-inline-block pl-1">
								<img src={ArrowIcon} alt="arrow icon" />
							</i>
						</Button>
					</div>
				</Row>
				<Row className={`${Style.actors__item}`}>
					<div class={`${Style.actors__photo}`}>
						<img src={LendersStock} alt="borrow borrow guy" />
					</div>
					<div class={`${Style.actors__aside}`}>
						<h4>For Lenders</h4>
						<p>
							Help a course and get a great return on investment over the period
							you choose to invest. All you have to do is, select a campaign,
							enter the amount you want to invest in the course, seat back and
							relax.
						</p>
						<Button className="btn-fml-outline-secondary">
							Join List
							<i class="d-inline-block pl-1">
								<img src={ArrowIcon} alt="arrow icon" />
							</i>
						</Button>
					</div>
				</Row>
				<Row className={`${Style.actors__item}`}>
					<div class={`${Style.actors__photo} order-2`}>
						<img src={SellersStock} alt="borrow borrow guy" />
					</div>
					<div class={`${Style.actors__aside}`}>
						<h4>For Sellers</h4>
						<p>
							Sell faster using our platform as our audience are your customers,
							you can always be sure of getting customer orders while selling at
							a profitable rate.
						</p>
						<Button className="btn-fml-outline-secondary">
							Join List
							<i class="d-inline-block pl-1">
								<img src={ArrowIcon} alt="arrow icon" />
							</i>
						</Button>
					</div>
				</Row>
			</Container>
			<footer className={`${Style.footer} container-fluid px-3 px-lg-0`}>
				<Container>
					<h3>Signup now to gain early access</h3>
					<p>Be the first to know when we launch</p>
					<div className={`${Style.emailFormContain}`}>
						<EmailForm />
					</div>
					<Row className={`${Style.footerCredits} mx-0`}>
						<p className="mr-auto">
							(c)2020, Fund My Laptop. All rights reserved.
						</p>
						<span class="pl-3 pl-sm-0">
							<a href="https://twitter.com/fundmylaptop">
								<img src={Twitter} alt="follow on twitter" />
							</a>
							<a className="pl-2" href="https://linkedin.com/fundmylaptop">
								<img src={Linkedin} alt="follow on linkedin" />
							</a>
						</span>
					</Row>
				</Container>
			</footer>
		</>
	);
};

export default ComingSoon;
