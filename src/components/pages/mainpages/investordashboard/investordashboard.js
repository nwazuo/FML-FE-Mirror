import React, { useEffect } from 'react';
import { Link,withRouter } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import './investordashboard.css';
import { Navbar,Footer } from '../../navigation/navigation';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import arrowRight from '../../../assets/images/arrow-right.svg';
import progress from '../../../assets/images/paid-progress.svg';


const InvestorDashboard = () => {
    useEffect(() => {
        //slider scroll feature
        const slideArea = document.querySelector(".help-card-contain");
        const slide = document.querySelector(".help-card");
        const controls = document.querySelectorAll(".slide-control");
    
        function handleScroll(e) {
          const slideItemWidth = slide.getBoundingClientRect().width;
          if (e.target.classList.contains("arrow-left")) {
            console.log(-slideItemWidth);
            slideArea.scroll({
              left: -slideItemWidth + slideArea.scrollLeft,
              behavior: "smooth"
            });
          } else {
            slideArea.scroll({
              left: slideItemWidth + slideArea.scrollLeft,
              behavior: "smooth"
            });
            console.log(slideItemWidth);
          }
        }
    
        controls.forEach(control => {
          control.addEventListener("click", handleScroll);
        });
       
  });


    return(
    <div>
        <Navbar />
        <div className="container px-4" id="page-container">
            <div id="content-wrap">
                <div className="container-main">
                    <div className="">
                        <div>
                            <section className="user">
                                <h1 className="user__intro">Welcome Back, <span className="text--secondary">Chandan</span></h1>
                                <p>
                                    Campaingn available for investing. <span><a className="pink-text" href="#">View More</a></span>
                                </p>
                            </section>
                            <div class="contain-arrow-helper">
                                <img class="slide-control arrow-left d-block" src={arrowLeft} />
                                <img class="slide-control arrow-right d-block" src={arrowRight} />

                                <div class="help-card-contain row mx-0 px-0 overflow-auto mt-4">
                                    <div class="help-card rounded p-3 p-md-3">
                                    <div class="profile">
                                        <span class="placeholder"></span>
                                        <div class="profile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="loan-amount">Loan Amount: $1,000</p>
                                    <div class="funded-progress">
                                        <div class="funded"></div>
                                    </div>
                                    <div class="funded-info">
                                        <span class="funded">$700 Funded</span>
                                        <span class="fund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                    <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                    <div class="help-card rounded p-3 p-md-3">
                                    <div class="profile">
                                        <span class="placeholder"></span>
                                        <div class="profile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="loan-amount">Loan Amount: $1,000</p>
                                    <div class="funded-progress">
                                        <div class="funded"></div>
                                    </div>
                                    <div class="funded-info">
                                        <span class="funded">$700 Funded</span>
                                        <span class="fund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                    <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                    <div class="help-card rounded p-3 p-md-3">
                                    <div class="profile">
                                        <span class="placeholder"></span>
                                        <div class="profile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="loan-amount">Loan Amount: $1,000</p>
                                    <div class="funded-progress">
                                        <div class="funded"></div>
                                    </div>
                                    <div class="funded-info">
                                        <span class="funded">$700 Funded</span>
                                        <span class="fund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                    <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                    <div class="help-card rounded p-3 p-md-3">
                                    <div class="profile">
                                        <span class="placeholder"></span>
                                        <div class="profile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="loan-amount">Loan Amount: $1,000</p>
                                    <div class="funded-progress">
                                        <div class="funded"></div>
                                    </div>
                                    <div class="funded-info">
                                        <span class="funded">$700 Funded</span>
                                        <span class="fund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                    <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                    <div class="help-card rounded p-3 p-md-3">
                                    <div class="profile">
                                        <span class="placeholder"></span>
                                        <div class="profile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="loan-amount">Loan Amount: $1,000</p>
                                    <div class="funded-progress">
                                        <div class="funded"></div>
                                    </div>
                                    <div class="funded-info">
                                        <span class="funded">$700 Funded</span>
                                        <span class="fund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                    <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                    <div class="help-card rounded p-3 p-md-3">
                                    <div class="profile">
                                        <span class="placeholder"></span>
                                        <div class="profile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="loan-amount">Loan Amount: $1,000</p>
                                    <div class="funded-progress">
                                        <div class="funded"></div>
                                    </div>
                                    <div class="funded-info">
                                        <span class="funded">$700 Funded</span>
                                        <span class="fund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                        <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                </div>
                            </div>

                            
                            <br />

                            <header className='account-header'>Here is your account overview</header>
                            <section className="account padding">
                                <div className="account__block order2">
                                    <div className="account__block--details">
                                        <small>Invested Amount</small>
                                        <br />
                                        <h2><span>INR</span>50,000</h2>
                                    </div>
                                    <div className="account__block--details">
                                        <small>Repaid Amount</small>
                                        <br />
                                        <h2><span>INR</span>20,000</h2>
                                    </div>
                                    <div className="account__block--details hide">
                                        <small>Remaining Amount</small>
                                        <br />
                                        <h2><span>INR</span>30,000</h2>
                                    </div>
                                    <div className="account__block--details hide">
                                        <small>Investments</small>
                                        <br />
                                        <h2>6</h2>
                                    </div>
                                    <div className="account__block--details hide">
                                        <small>Average Investment</small>
                                        <br />
                                        <h2><span>INR</span>25,000</h2>
                                    </div>
                                    <div className="account__block--details hide">
                                        <small>Average Interest</small>
                                        <br />
                                        <h2>2.5<span>%</span></h2>
                                    </div>
                                </div>
                                <div className="d-flex order1">
                                    <div className="col-7 dontshow">
                                        <h5 className="text-left mb-0 pb-0">Total Invested Amount</h5><br />
                                        <h6 className="text-left mt-0 pt-0"><small>INR</small>50,000</h6>
                                    </div>
                                    <div className="space dontshow"></div>
                                    <div className="account__progress mt-2 mb-3 mr-3">
                                        <img  src={progress} alt="" />
                                    </div>
                                </div>
                                
                            </section>

                            <section className="table tablepadding">
                                <header>Your Investments</header>
                                <div className="table__container">
                                    <table>
                                    <thead>
                                        <td>LOAN</td>
                                        <td>AMOUNT</td>
                                        <td>INTEREST RATE</td>
                                        <td>TERM</td>
                                        <td>TOTAL RETURNS</td>
                                        <td>PAYMENT DUE</td>
                                        <td>STATUS</td>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>#7646446</td>
                                        <td>INR 50,000</td>
                                        <td>2.5%</td>
                                        <td>10</td>
                                        <td>INR 1,250</td>
                                        <td> <span><b className="day">27</b></span> JUNE</td>
                                        <td>Active</td>
                                        </tr>
                                        <tr>
                                        <td>#7646446</td>
                                        <td>INR 50,000</td>
                                        <td>2.5%</td>
                                        <td>10</td>
                                        <td>INR 1,250</td>
                                        <td> <span><b className="day">27</b></span> JUNE</td>
                                        <td>Active</td>
                                        </tr>
                                        <tr>
                                        <td>#7646446</td>
                                        <td>INR 50,000</td>
                                        <td>2.5%</td>
                                        <td>10</td>
                                        <td>INR 1,250</td>
                                        <td> <span><b className="day">27</b></span> JUNE</td>
                                        <td>Active</td>
                                        </tr>
                                        <tr>
                                        <td>#7646446</td>
                                        <td>INR 50,000</td>
                                        <td>2.5%</td>
                                        <td>10</td>
                                        <td>INR 1,250</td>
                                        <td> <span><b className="day">27</b></span> JUNE</td>
                                        <td>Active</td>
                                        </tr>
                                        <tr>
                                        <td>#7646446</td>
                                        <td>INR 50,000</td>
                                        <td>2.5%</td>
                                        <td>10</td>
                                        <td>INR 1,250</td>
                                        <td> <span><b className="day">27</b></span> JUNE</td>
                                        <td>Active</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <Footer />
    </div>
    )
}

export default InvestorDashboard;