import React, { useEffect } from 'react';
import { Link,withRouter } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import './investordashboard.css';
import { Navbar,Footer } from '../../navigation/navigation';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import arrowRight from '../../../assets/images/arrow-right.svg';
import progress from '../../../assets/images/paid-progress.svg';
import Ellipse from '../../../assets/images/Ellipse.png';


const investordashboard = () => {
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
            <div class="container-main">
                <div class="">
                    <div>
                        <section class="user">
                            <h1 class="user__intro">Welcome Back, <span class="text--secondary">Chandan</span></h1>
                            <p>
                                Campaingn available for investing. <span><a class="pink-text" href="#">View More</a></span>
                            </p>
                        </section>
                        <section class="user-carousel" id="user-main">
                            <div class="left-arrow">
                                <img id="left-button" aria-hidden="true" src={arrowLeft} alt="" />
                            </div>
                            <div className=" d-flex">
                                <div class="user-financials">
                                    <div className="investeebox">
                                        <div className=" pt-3 user-details">
                                            <img src={Ellipse} alt="A" className="investeeimg"/>
                                            <div className="name">
                                                <h1 className="investeename">John Doe
                                                </h1>
                                                <p className="m-0">Intern</p>
                                            </div>
                                        </div>
                                        <p className="loanamount"><b>Loan Amount: $1,000</b></p>
                                        <progress className="m-0" value="70" max="100"></progress>
                                        <div className="d-flex">
                                            <p className="fundspaid">$700 Funded</p>
                                            <div className="space"></div>
                                            <p className="balanceLeft">
                                            $300 Left</p>
                                        </div>
                                        <button>
                                            Invest Now
                                        </button>
                                    </div>
                                </div>

                                <div class="user-financials">
                                    <div className="investeebox">
                                        <div class="pt-3 user-details">
                                        <img src={Ellipse} alt="A" className="investeeimg"/>
                                            <div className="name">
                                                <h1 className="investeename">John Doe
                                                </h1>
                                                <p className="m-0">Intern</p>
                                            </div>
                                        </div>
                                        <p className="loanamount"><b>Loan Amount: $1,000</b></p>
                                        <progress className="m-0" value="70" max="100"></progress>
                                        <div className="d-flex">
                                            <p className="fundspaid">$700 Funded</p>
                                            <div className="space"></div>
                                            <p className="balanceLeft">
                                            $300 Left</p>
                                        </div>
                                        <button>
                                            Invest Now
                                        </button>
                                    </div>
                                </div>

                                <div class="user-financials">
                                    <div className="investeebox">
                                        <div class="pt-3 user-details">
                                        <img src={Ellipse} alt="A" className="investeeimg"/>
                                            <div className="name">
                                                <h1 className="investeename">John Doe
                                                </h1>
                                                <p className="m-0">Intern</p>
                                            </div>
                                        </div>
                                        <p className="loanamount"><b>Loan Amount: $1,000</b></p>
                                        <progress className="m-0" value="70" max="100"></progress>
                                        <div className="d-flex">
                                            <p className="fundspaid">$700 Funded</p>
                                            <div className="space"></div>
                                            <p className="balanceLeft">
                                            $300 Left</p>
                                        </div>
                                        <button>
                                            Invest Now
                                        </button>
                                    </div>
                                </div>

                                <div class="user-financials">
                                    <div className="investeebox">
                                        <div class="pt-3 user-details">
                                        <img src={Ellipse} alt="A" className="investeeimg"/>
                                            <div className="name">
                                                <h1 className="investeename">John Doe
                                                </h1>
                                                <p className="m-0">Intern</p>
                                            </div>
                                        </div>
                                        <p className="loanamount"><b>Loan Amount: $1,000</b></p>
                                        <progress className="m-0" value="70" max="100"></progress>
                                        <div className="d-flex">
                                            <p className="fundspaid">$700 Funded</p>
                                            <div className="space"></div>
                                            <p className="balanceLeft">
                                            $300 Left</p>
                                        </div>
                                        <button>
                                            Invest Now
                                        </button>
                                    </div>
                                </div>

                                <div class="user-financials">
                                    <div className="investeebox">
                                        <div class="pt-3 user-details">
                                        <img src={Ellipse} alt="A" className="investeeimg"/>
                                            <div className="name">
                                                <h1 className="investeename">John Doe
                                                </h1>
                                                <p className="m-0">Intern</p>
                                            </div>
                                        </div>
                                        <p className="loanamount"><b>Loan Amount: $1,000</b></p>
                                        <progress className="m-0" value="70" max="100"></progress>
                                        <div className="d-flex">
                                            <p className="fundspaid">$700 Funded</p>
                                            <div className="space"></div>
                                            <p className="balanceLeft">
                                            $300 Left</p>
                                        </div>
                                        <button>
                                            Invest Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="right-arrow">
                                <img id="right-button" aria-hidden="true" src={arrowRight} alt="" />
                            </div>
                        </section>
                        
                        <br />

                        <header class='account-header'>Here is your account overview</header>
                        <section class="account padding">
                            <div class="account__block order2">
                                <div class="account__block--details">
                                    <small>Invested Amount</small>
                                    <br />
                                    <h2><span>INR</span>50,000</h2>
                                </div>
                                <div class="account__block--details">
                                    <small>Repaid Amount</small>
                                    <br />
                                    <h2><span>INR</span>20,000</h2>
                                </div>
                                <div class="account__block--details hide">
                                    <small>Remaining Amount</small>
                                    <br />
                                    <h2><span>INR</span>30,000</h2>
                                </div>
                                <div class="account__block--details hide">
                                    <small>Investments</small>
                                    <br />
                                    <h2>6</h2>
                                </div>
                                <div class="account__block--details hide">
                                    <small>Average Investment</small>
                                    <br />
                                    <h2><span>INR</span>25,000</h2>
                                </div>
                                <div class="account__block--details hide">
                                    <small>Average Interest</small>
                                    <br />
                                    <h2>2.5<span>%</span></h2>
                                </div>
                            </div>
                            <div className="d-flex order1">
                                <div class="col-7 dontshow">
                                    <h5 className="text-left mb-0 pb-0">Total Invested Amount</h5><br />
                                    <h6 className="text-left mt-0 pt-0"><small>INR</small>50,000</h6>
                                </div>
                                <div className="space dontshow"></div>
                                <div class="account__progress mt-2 mb-3 mr-3">
                                    <img  src={progress} alt="" />
                                </div>
                            </div>
                            
                        </section>

                        <section class="table tablepadding">
                            <header>Your Investments</header>
                            <div class="table__container">
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

export default investordashboard;