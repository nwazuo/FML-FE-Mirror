import React from "react";
import "./bootstrap.css";
import "./landingPage.css";
import trendingGirl from "./img/trending-girl.png";
import about from "./img/about.png";
import arrow from "./img/arrow.png";
import campaign1 from "./img/campaign1.png";
import campaign2 from "./img/campaign2.png";
import campaign3 from "./img/campaign3.png";
import campaign4 from "./img/campaign4.png";
import campaign5 from "./img/campaign5.png";
import campaign6 from "./img/campaign6.png";
import testimonial from "./img/testimonial-pic.png";

const LandingPage = () => {
  return (
      <div>
        <div className="jumbotron jumbotron px-0 px-md-4 mb-0 mb-md-4 landing-top">
          <div className="row mt-lg-5 px-2 px-md-5 mx-auto mt-5">
            <div
              className="col-xl-8 px-0  mb-2 mb-sm-5 px-md-5 header-text mt-5
        d-flex
        flex-column
        justify-content-center"
            >
              <h1 className="mb-lg-5">Support or Start a Campaign today</h1>
              <p className="pr-md-5">
                Fundmylaptop is a platform where fundees can place requests for
                help to either get funding for the purchase of a new laptop or
                repair an existing one.
              </p>
            </div>
            <div className="  header-form col-xl-4 my-5  pt-3 pb-5 bg-white">
              {/* here should be form */}
              <form className=" px-md-3 d-flex flex-column justify-content-center">
                <h5 className=" text-center mb-5 mt-0">Laptop Funding</h5>
                <div className="form-group">
                  <label htmlFor="inputAddress">Campaign Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="CampaignName"
                    placeholder="Campaign name here.."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputState">Target</label>
                  <select id="inputState" className="form-control">
                    <option selected>$1000</option>
                    <option>$10000</option>
                  </select>
                </div>
                {/* date row */}
                <div className="row">
                  <div className="form-group col-md-6 pr-lg-1">
                    <label
                      htmlFor="example-date-input"
                      className=" col-form-label"
                    >
                      Start Date
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="example-date-input"
                    />
                  </div>
                  <div className="form-group col-md-6  pl-lg-1">
                    <label
                      htmlFor="example-date-input"
                      className=" col-form-label"
                    >
                      End Date
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="example-date-input"
                    />
                  </div>
                </div>
                <button
                  className="btn-form mx-auto my-4"
                  onclick="window.location.href=('login.html')"
                >
                  Start Campaign
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* ***** Header content Finish here********/}
        {/* ******* Main section Start Here ******** */}
        <main>
          {/* trending section */}
          <section className="container trending-section my-md-5">
            <h3 className="mb-4">Trending Now !</h3>
            <div className="row trending-cards ">
              {/* card start here */}
              <div className="col-lg-4 mb-4">
                <div className="card ">
                  <img
                    className="card-img-top"
                    src={trendingGirl}
                    alt="Card1"
                  />
                  {/* card body */}
                  <div className="card-body">
                    <h5 className="card-title mb-0">Adelanke Doe</h5>
                    <span className="card-subtitle ">Laptop purchase</span>
                    <p className="card-text mt-4">
                      I need a laptop to complete my final year school
                      project...
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        id="card-progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex justify-content-between mt-3 mb-2">
                      <span className="card-price"> N90,000</span>
                      <span className="card-progress-num">90%</span>
                    </div>
                    <span className="card-fonds">Raised of N100,000</span>
                  </div>
                  {/* card footer */}
                  <div className="card-footer d-flex align-center justify-content-between p-0">
                    <a href className="m-auto ">
                      {" "}
                      view details <img src={arrow} alt="a1" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* card start here */}
              <div className="col-lg-4 mb-4">
                <div className="card ">
                  <img
                    className="card-img-top"
                    src={trendingGirl}
                    alt="Card2"
                  />
                  {/* card body */}
                  <div className="card-body">
                    <h5 className="card-title mb-0">Adelanke Doe</h5>
                    <span className="card-subtitle ">Laptop purchase</span>
                    <p className="card-text mt-4">
                      I need a laptop to complete my final year school
                      project...
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        id="card-progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex justify-content-between mt-3 mb-2">
                      <span className="card-price"> N90,000</span>
                      <span className="card-progress-num">90%</span>
                    </div>
                    <span className="card-fonds">Raised of N100,000</span>
                  </div>
                  {/* card footer */}
                  <div className="card-footer d-flex align-center justify-content-between p-0">
                    <a href className="m-auto ">
                      {" "}
                      view details <img src={arrow} alt="a2" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* card start here */}
              <div className="col-lg-4 mb-4">
                <div className="card ">
                  <img
                    className="card-img-top"
                    src={trendingGirl}
                    alt="Card3"
                  />
                  {/* card body */}
                  <div className="card-body">
                    <h5 className="card-title mb-0">Adelanke Doe</h5>
                    <span className="card-subtitle ">Laptop purchase</span>
                    <p className="card-text mt-4">
                      I need a laptop to complete my final year school
                      project...
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        id="card-progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex justify-content-between mt-3 mb-2">
                      <span className="card-price"> N90,000</span>
                      <span className="card-progress-num">90%</span>
                    </div>
                    <span className="card-fonds">Raised of N100,000</span>
                  </div>
                  {/* card footer */}
                  <div className="card-footer d-flex align-center justify-content-between p-0">
                    <a href className="m-auto ">
                      {" "}
                      view details <img src={arrow} alt="a3" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about us section */}
          <section className="container-fluid bg-white about-us-section my-5">
            <div className="container">
              <h3 className="mb-4">About Us</h3>
              <div className="  row">
                <div className="col-lg-6">
                  <img
                    className="aboutus-img img-fluid "
                    src={about}
                    alt="mm"
                  />
                </div>
                <div
                  className="col-lg-6 pr-4 pl-lg-5
                d-flex flex-column
                justify-content-center
                "
                >
                  <h3 className=" mb-4 mt-4 mt-md-0 mb-md-5  about-us-title">
                    We are here because of you
                  </h3>
                  <p className="aboutus-text">
                    We are a group of tech experts trying to help the younger
                    generation of tech enthusiast get into tech with the
                    limitation of gadgets and other important stuff limiting the
                    african tech community
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Compaign Section */}
          <section className="compaign-section">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <h3 className="col-7">Featured Campaigns </h3>
                <span className="mt-1 btn-view-all ">View All+</span>
              </div>
              <div className="row compaign-cards ">
                {/* card start here */}
                <div className="col-lg-4 my-3">
                  <div className="card ">
                    <img className="card-img-top" src={campaign1} alt="Camp1" />
                    {/* card body */}
                    <div className="card-body">
                      <h5 className="card-title mb-0">Babe Doe</h5>
                      <span className="card-subtitle ">Laptop purchase</span>
                      <p className="card-text mt-4">
                        I need a laptop to complete my final year school
                        project...
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          id="card-progress-bar"
                          role="progressbar"
                          style={{ width: "20%" }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex justify-content-between mt-3 mb-2">
                        <span className="card-price"> N90,000</span>
                        <span className="card-progress-num">20%</span>
                      </div>
                      <span className="card-fonds">Raised of N100,000</span>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex align-center justify-content-between p-0">
                      <a href className="m-auto ">
                        {" "}
                        view details <img src={arrow} alt="a4" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                {/* card start here */}
                <div className="col-lg-4 my-3">
                  <div className="card ">
                    <img className="card-img-top" src={campaign2} alt="Camp2" />
                    {/* card body */}
                    <div className="card-body">
                      <h5 className="card-title mb-0">Baba Doe</h5>
                      <span className="card-subtitle ">Laptop purchase</span>
                      <p className="card-text mt-4">
                        I need a laptop to complete my final year school
                        project...
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          id="card-progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex justify-content-between mt-3 mb-2">
                        <span className="card-price"> N90,000</span>
                        <span className="card-progress-num">90%</span>
                      </div>
                      <span className="card-fonds">Raised of N100,000</span>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex align-center justify-content-between p-0">
                      <a href className="m-auto ">
                        {" "}
                        view details <img src={arrow} alt="a5" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                {/* card start here */}
                <div className="col-lg-4 my-3">
                  <div className="card ">
                    <img className="card-img-top" src={campaign3} alt="Camp3" />
                    {/* card body */}
                    <div className="card-body">
                      <h5 className="card-title mb-0">Adelanke Doe</h5>
                      <span className="card-subtitle ">Laptop purchase</span>
                      <p className="card-text mt-4">
                        I need a laptop to complete my final year school
                        project...
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          id="card-progress-bar"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex justify-content-between mt-3 mb-2">
                        <span className="card-price"> N90,000</span>
                        <span className="card-progress-num">60%</span>
                      </div>
                      <span className="card-fonds">Raised of N100,000</span>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex align-center justify-content-between p-0">
                      <a href className="m-auto ">
                        {" "}
                        view details <img src={arrow} alt="a6" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                {/* card start here */}
                <div className="col-lg-4 my-3">
                  <div className="card ">
                    <img className="card-img-top" src={campaign4} alt="Camp4" />
                    {/* card body */}
                    <div className="card-body">
                      <h5 className="card-title mb-0">Adelanke Doe</h5>
                      <span className="card-subtitle ">Laptop purchase</span>
                      <p className="card-text mt-4">
                        I need a laptop to complete my final year school
                        project...
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          id="card-progress-bar"
                          role="progressbar"
                          style={{ width: "83%" }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex justify-content-between mt-3 mb-2">
                        <span className="card-price"> N90,000</span>
                        <span className="card-progress-num">83%</span>
                      </div>
                      <span className="card-fonds">Raised of N100,000</span>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex align-center justify-content-between p-0">
                      <a href className="m-auto ">
                        {" "}
                        view details <img src={arrow} alt="a6" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                {/* card start here */}
                <div className="col-lg-4 my-3">
                  <div className="card ">
                    <img className="card-img-top" src={campaign5} alt="Camp5" />
                    {/* card body */}
                    <div className="card-body">
                      <h5 className="card-title mb-0">Adelanke Doe</h5>
                      <span className="card-subtitle ">Laptop purchase</span>
                      <p className="card-text mt-4">
                        I need a laptop to complete my final year school
                        project...
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          id="card-progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex justify-content-between mt-3 mb-2">
                        <span className="card-price"> N90,000</span>
                        <span className="card-progress-num">90%</span>
                      </div>
                      <span className="card-fonds">Raised of N100,000</span>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex align-center justify-content-between p-0">
                      <a href className="m-auto ">
                        {" "}
                        view details <img src={arrow} alt="a7" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                {/* card start here */}
                <div className="col-lg-4 my-3">
                  <div className="card ">
                    <img className="card-img-top" src={campaign6} alt="Camp8" />
                    {/* card body */}
                    <div className="card-body">
                      <h5 className="card-title mb-0">Adelanke Doe</h5>
                      <span className="card-subtitle ">Laptop purchase</span>
                      <p className="card-text mt-4">
                        I need a laptop to complete my final year school
                        project...
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          id="card-progress-bar"
                          role="progressbar"
                          style={{ width: "32%" }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex justify-content-between mt-3 mb-2">
                        <span className="card-price"> N90,000</span>
                        <span className="card-progress-num">32%</span>
                      </div>
                      <span className="card-fonds">Raised of N100,000</span>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex align-center justify-content-between p-0">
                      <a href className="m-auto ">
                        {" "}
                        view details <img src={arrow} alt="a9" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials section */}
          <section
            className=" container-fluid testimonials-section mt-md-5
       row
       justify-content-center
      "
          >
            <h3 className="col-md-8 text-center text-white mb-4">
              Testimonials
            </h3>
            <div className="testimonials-text col-md-9 mb-4">
              <p className=" text-white px-5">
                “Graduating university without a job, I needed a laptop computer
                to kickstart my freelance business. A friend referred my to Fund
                my Laptop, I had my doubts but they were easily erased, Within
                an hour of posting a campaign i got full funding for my laptop
                and my account was immediately credited, Within three months i
                was able to pay back the loan and grow my business”
              </p>
            </div>
            <div className=" col-md-10 text-center ">
              <img className="mb-3 " src={testimonial} alt="testimonial" />
              <h5 className="mb-0" style={{ color: "white" }}>
                Abiodun Popoola
              </h5>
              <span style={{ color: "white" }} className="card-subtitle">
                Raise 500k for his macbook pro
              </span>
            </div>
          </section>
        </main>
        {/* ******* Main section Finish Here ******** */}
        <div className="spacer py-md-5" />
        {/* News Letter */}
        <div className=" container-fluid mx-0 news-letter row">
          <div className="col-md-11 news-letter-text ml-md-5  my-auto my-lg-5 px-0">
            <h2 className="text-center text-md-left">
              Subscribe to our Newsletter
            </h2>
            <p className="mx-auto mx-md-0">
              Stay in touch with our regular updates and tech news alert, we
              only send newsletter weekly and we promise not to spam
            </p>
          </div>
          <div className="col-md-8 news-letter-form ml-md-5">
            <form action>
              <input
                type="text"
                name
                id="subscribe-input"
                className="mb-5 subscribe-input"
                placeholder="Enter Email"
              />
              <button className="mb-5 subscribe-btn"> Subscribe</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default LandingPage;
