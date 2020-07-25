import React, { useState, useEffect } from "react";
import "../pages/mainpages/landingPage/landingPage.css";
import axios from "axios";

const Testimonial = () => {
	const [testimonials, setTestimonial] = useState("");
	useEffect(() => {
		const apiUrl = "https://api.github.com/users/hacktivist123/repos";
		axios(apiUrl).then((response) => setTestimonial(response.data));
		//
		//lets see how this goes
	});

	return testimonials ? (
		<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<section
						className=" container-fluid testimonials-section mt-md-5 row justify-content-center">
						<h3 className="col-md-8 text-center text-white mb-4">
							Testimonials</h3>
						<div className="testimonials-text col-md-9 mb-4">
							<p className=" text-white px-5">
								“Graduating university without a job, I needed a laptop computer
								to kickstart my freelance business. A friend referred my to Fund
								my Laptop, I had my doubts but they were easily erased, Within
								an hour of posting a campaign i got full funding for my laptop
								and my account was immediately credited, Within three months i
								was able to pay back the loan and grow my business”</p>
						</div>
						<div className=" col-md-10 text-center ">
							<img className="mb-3 " src="" alt="testimonial" />
							<h5 className="mb-0" style={{ color: "white" }}>
								Abiodun Popoola</h5>
							<span style={{ color: "white" }} className="card-subtitle">
								Raise 500k for his macbook pro</span>
						</div>
					</section>
				</div>
				{testimonials.map((testimonial) => {
					<div class="carousel-item">
						<section
							className=" container-fluid testimonials-section mt-md-5 row justify-content-center">
							<h3 className="col-md-8 text-center text-white mb-4">
								Testimonials</h3>
							<div className="testimonials-text col-md-9 mb-4">
								<p className=" text-white px-5">
									“Graduating university without a job, I needed a laptop computer
									to kickstart my freelance business. A friend referred my to Fund
									my Laptop, I had my doubts but they were easily erased, Within
									an hour of posting a campaign i got full funding for my laptop
									and my account was immediately credited, Within three months i
								was able to pay back the loan and grow my business”</p>
							</div>
							<div className=" col-md-10 text-center ">
								<img className="mb-3 " src={testimonial.id} alt="testimonial" />
								<h5 className="mb-0" style={{ color: "white" }}>
									Abiodun Popoola</h5>
								<span style={{ color: "white" }} className="card-subtitle">
									Raise 500k for his macbook pro</span>
							</div>
						</section>
					</div>
				})}
			</div>
		</div>
	) : ''


























	// return testimonials ? (
	// 	<div
	// 		id="carouselExampleIndicators"
	// 		class="carousel slide"
	// 		data-ride="carousel"
	// 	>
	// 		<ol class="carousel-indicators">
	// 			<li
	// 				data-target="#carouselExampleIndicators"
	// 				data-slide-to="0"
	// 				class="active"
	// 			></li>
	// 			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	// 			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	// 		</ol>
	// 		<div class="carousel-inner">
	// 			<div class="carousel-item active">
	// 				<section
	// 					className=" container-fluid testimonials-section mt-md-5
	//    row
	//    justify-content-center
	//   "
	// 				>
	// 					<h3 className="col-md-8 text-center text-white mb-4">
	// 						Testimonials
	//         </h3>
	// 					<div className="testimonials-text col-md-9 mb-4">
	// 						<p className=" text-white px-5">
	// 							“Graduating university without a job, I needed a laptop computer
	// 							to kickstart my freelance business. A friend referred my to Fund
	// 							my Laptop, I had my doubts but they were easily erased, Within
	// 							an hour of posting a campaign i got full funding for my laptop
	// 							and my account was immediately credited, Within three months i
	// 							was able to pay back the loan and grow my business”
	//           </p>
	// 					</div>
	// 					<div className=" col-md-10 text-center ">
	// 						<img className="mb-3 " src="" alt="testimonial" />
	// 						<h5 className="mb-0" style={{ color: "white" }}>
	// 							Abiodun Popoola
	//           </h5>
	// 						<span style={{ color: "white" }} className="card-subtitle">
	// 							Raise 500k for his macbook pro
	//           </span>
	// 					</div>
	// 				</section>
	// 			</div>


	// 			{/* 2nd Carousel */}
	// 			<div class="carousel-item">
	// 				<section
	// 					className=" container-fluid testimonials-section mt-md-5
	//    row
	//    justify-content-center
	//   "
	// 				>
	// 					<h3 className="col-md-8 text-center text-white mb-4">
	// 						Testimonials
	//         </h3>
	// 					<div className="testimonials-text col-md-9 mb-4">
	// 						<p className=" text-white px-5">
	// 							“Graduating university without a job, I needed a laptop computer
	// 							to kickstart my freelance business. A friend referred my to Fund
	// 							my Laptop, I had my doubts but they were easily erased, Within
	// 							an hour of posting a campaign i got full funding for my laptop
	// 							and my account was immediately credited, Within three months i
	// 							was able to pay back the loan and grow my business”
	//           </p>
	// 					</div>
	// 					<div className=" col-md-10 text-center ">
	// 						<img className="mb-3 " src="" alt="testimonial" />
	// 						<h5 className="mb-0" style={{ color: "white" }}>
	// 							Abiodun Popoola
	//           </h5>
	// 						<span style={{ color: "white" }} className="card-subtitle">
	// 							Raise 500k for his macbook pro
	//           </span>
	// 					</div>
	// 				</section>
	// 			</div>

	// 			<div class="carousel-item">
	// 				<section
	// 					className=" container-fluid testimonials-section mt-md-5
	//    row
	//    justify-content-center
	//   "
	// 				>
	// 					<h3 className="col-md-8 text-center text-white mb-4">
	// 						Testimonials
	//         </h3>
	// 					<div className="testimonials-text col-md-9 mb-4">
	// 						<p className=" text-white px-5">
	// 							“Graduating university without a job, I needed a laptop computer
	// 							to kickstart my freelance business. A friend referred my to Fund
	// 							my Laptop, I had my doubts but they were easily erased, Within
	// 							an hour of posting a campaign i got full funding for my laptop
	// 							and my account was immediately credited, Within three months i
	// 							was able to pay back the loan and grow my business”
	//           </p>
	// 					</div>
	// 					<div className=" col-md-10 text-center ">
	// 						<img className="mb-3 " src="" alt="testimonial" />
	// 						<h5 className="mb-0" style={{ color: "white" }}>
	// 							Abiodun Popoola
	//           </h5>
	// 						<span style={{ color: "white" }} className="card-subtitle">
	// 							Raise 500k for his macbook pro
	//           </span>
	// 					</div>
	// 				</section>
	// 			</div>
	// 		</div>
	// 		<a
	// 			class="carousel-control-prev"
	// 			href="#carouselExampleIndicators"
	// 			role="button"
	// 			data-slide="prev"
	// 		>
	// 			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
	// 			<span class="sr-only">Previous</span>
	// 		</a>
	// 		<a
	// 			class="carousel-control-next"
	// 			href="#carouselExampleIndicators"
	// 			role="button"
	// 			data-slide="next"
	// 		>
	// 			<span class="carousel-control-next-icon" aria-hidden="true"></span>
	// 			<span class="sr-only">Next</span>
	// 		</a>
	// 	</div>
	// ) : ''
};

export default Testimonial;
