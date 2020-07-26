import React, { Component } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
import '../../../assets/bootstrap.css';
import './investordashboard.css';
import { Navbar,Footer } from '../../navigation/navigation';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import arrowRight from '../../../assets/images/arrow-right.svg';
import progress from '../../../assets/images/paid-progress.svg';
import axios from "axios";
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';



class InvestorsDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            investedAmount: 0,
            repaidAmount: 0,
            remainingAmount: 0,
            averageInvestment: 0,
            averageInterest: 0,
            numOfInvestments: 0,
            table : [],
            isLoadingTable: false
        }
      }

      getAccountOverview = () => {
        const token =  localStorage.getItem('FMLToken') 
        const config = {
            headers: { 
                Authorization: `${token}` 
            }
        };    
        

        /* Account Overview */
        axios.get('https://api.fundmylaptop.com/api/campaigns/userOverview',config)
        .then(response => {
            console.log(response)
            if(response.data.success){
                const { data } = response.data
                this.setState({
                    investedAmount: data.investedAmount,
                    repaidAmount: data.repaidAmount,
                    remainingAmount: data.remainingAmount,
                    averageInvestment: data.averageInvestment,
                    averageInterest: data.averageInterest,
                    numOfInvestments: data.numOfInvestments
                });
                
            }
        })
        .catch(error => {
          console.log(error);
        });

      }

      listFundedCampaigns = () => {

        const token =  localStorage.getItem('FMLToken');
        const config = {
            headers: { 
                Authorization: `${token}` 
            }
        };

        
        /* Investment Table */
        axios.get('https://api.fundmylaptop.com/api/campaigns/fundedCampaigns',config)
        .then(response => {
            this.setState({isLoadingTable: true});
            console.log(response)
            const { data: campaignTable } = response.data

            this.setState({isLoadingTable: false, table: campaignTable});
            
        })
        .catch(error => {
          console.log(error);
        });
      }

    componentDidMount(){
        
        const slideArea = document.querySelector(".investorhelp-card-contain");
        const slide = document.querySelector(".investorhelp-card");
        const controls = document.querySelectorAll(".investorslide-control");
    
        function handleScroll(e) {
          const slideItemWidth = slide.getBoundingClientRect().width;
          if (e.target.classList.contains("investorarrow-left")) {
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

          
        this.getAccountOverview();

        this.listFundedCampaigns()
    }
      
    render() {
        const { investedAmount,
                repaidAmount,
                remainingAmount,
                averageInvestment,
                averageInterest,
                numOfInvestments,
                table,
                isLoadingTable
        } = this.state;

        const override = css`
            display: block;
            margin: 40px auto;
            text-align: center;
            border-color: #55efc4;
            color: #04172A;
            max-width: 100%;
        `;
    
        return(
        <div>
            <Navbar />
            <div className="container px-4" id="investorpage-container">
                <div id="content-wrap">
                    <div className="container-main">
                        <div className="">
                            <div>
                                <section className="investoruser">
                                    <h1 className="investoruser__intro">Welcome Back, <span className="investortext--secondary">Chandan</span></h1>
                                    <p>
                                        Campaign available for investing. <span><a className="investorpink-text" href="#">View More</a></span>
                                    </p>
                                </section>
                                <div className="investorcontain-arrow-helper">
                                    <img className="investorslide-control investorarrow-left d-block" src={arrowLeft} />
                                    <img className="investorslide-control investorarrow-right d-block" src={arrowRight} />
    
                                    <div className="investorhelp-card-contain row mx-0 px-0 overflow-auto mt-4">
                                        <div className="investorhelp-card rounded p-3 p-md-3">
                                        <div className="investorprofile">
                                            <span className="investorplaceholder"></span>
                                            <div className="investorprofile-text">
                                            <h5>John Doe</h5>
                                            <small>Intern</small>
                                            </div>
                                        </div>
                                        <p className="investorloan-amount">Loan Amount: $1,000</p>
                                        <div className="investorfunded-progress">
                                            <div className="investorfunded"></div>
                                        </div>
                                        <div className="investorfunded-info">
                                            <span className="investorfunded">$700 Funded</span>
                                            <span className="investorfund-left">$300 Left</span>
                                        </div>
                                        <div className="w-100"></div>
                                        <button className="btn btn-fml-secondary mt-3">Invest Now</button>
                                        </div>
                                        <div className="investorhelp-card rounded p-3 p-md-3">
                                        <div className="investorprofile">
                                            <span className="investorplaceholder"></span>
                                            <div className="investorprofile-text">
                                            <h5>John Doe</h5>
                                            <small>Intern</small>
                                            </div>
                                        </div>
                                        <p className="investorloan-amount">Loan Amount: $1,000</p>
                                        <div className="investorfunded-progress">
                                            <div className="investorfunded"></div>
                                        </div>
                                        <div className="investorfunded-info">
                                            <span className="investorfunded">$700 Funded</span>
                                            <span className="investorfund-left">$300 Left</span>
                                        </div>
                                        <div className="w-100"></div>
                                        <button className="btn btn-fml-secondary mt-3">Invest Now</button>
                                        </div>
                                        <div className="investorhelp-card rounded p-3 p-md-3">
                                        <div className="investorprofile">
                                            <span className="investorplaceholder"></span>
                                            <div className="investorprofile-text">
                                            <h5>John Doe</h5>
                                            <small>Intern</small>
                                            </div>
                                        </div>
                                        <p className="investorloan-amount">Loan Amount: $1,000</p>
                                        <div className="investorfunded-progress">
                                            <div className="investorfunded"></div>
                                        </div>
                                        <div className="investorfunded-info">
                                            <span className="investorfunded">$700 Funded</span>
                                            <span className="investorfund-left">$300 Left</span>
                                        </div>
                                        <div className="w-100"></div>
                                        <button className="btn btn-fml-secondary mt-3">Invest Now</button>
                                        </div>
                                        <div className="investorhelp-card rounded p-3 p-md-3">
                                        <div className="investorprofile">
                                            <span className="investorplaceholder"></span>
                                            <div className="investorprofile-text">
                                            <h5>John Doe</h5>
                                            <small>Intern</small>
                                            </div>
                                        </div>
                                        <p className="investorloan-amount">Loan Amount: $1,000</p>
                                        <div className="investorfunded-progress">
                                            <div className="investorfunded"></div>
                                        </div>
                                        <div className="investorfunded-info">
                                            <span className="investorfunded">$700 Funded</span>
                                            <span className="investorfund-left">$300 Left</span>
                                        </div>
                                        <div className="w-100"></div>
                                        <button className="btn btn-fml-secondary mt-3">Invest Now</button>
                                        </div>
                                        <div className="investorhelp-card rounded p-3 p-md-3">
                                        <div className="investorprofile">
                                            <span className="investorplaceholder"></span>
                                            <div className="investorprofile-text">
                                            <h5>John Doe</h5>
                                            <small>Intern</small>
                                            </div>
                                        </div>
                                        <p className="investorloan-amount">Loan Amount: $1,000</p>
                                        <div className="investorfunded-progress">
                                            <div className="investorfunded"></div>
                                        </div>
                                        <div className="investorfunded-info">
                                            <span className="investorfunded">$700 Funded</span>
                                            <span className="investorfund-left">$300 Left</span>
                                        </div>
                                        <div className="w-100"></div>
                                        <button className="btn btn-fml-secondary mt-3">Invest Now</button>
                                        </div>
                                        <div className="investorhelp-card rounded p-3 p-md-3">
                                        <div className="investorprofile">
                                            <span className="investorplaceholder"></span>
                                            <div className="investorprofile-text">
                                            <h5>John Doe</h5>
                                            <small>Intern</small>
                                            </div>
                                        </div>
                                        <p className="investorloan-amount">Loan Amount: $1,000</p>
                                        <div className="investorfunded-progress">
                                            <div className="investorfunded"></div>
                                        </div>
                                        <div className="investorfunded-info">
                                            <span className="investorfunded">$700 Funded</span>
                                            <span className="investorfund-left">$300 Left</span>
                                        </div>
                                        <div className="w-100"></div>
                                            <button className="btn btn-fml-secondary mt-3">Invest Now</button>
                                        </div>
                                    </div>
                                </div>
    
                                
                                <br />
    
                                <header className='investoraccount-header'>Here is your account overview</header>
                                <section className="investoraccount investorpadding">
                                    <div className="investoraccount__block investororder2">
                                        <div className="investoraccount__block--details">
                                            <small>Invested Amount</small>
                                            <br />
                                            <h2><span>NGN</span>{investedAmount}</h2>
                                        </div>
                                        <div className="investoraccount__block--details">
                                            <small>Repaid Amount</small>
                                            <br />
                                            <h2><span>NGN</span>{repaidAmount}</h2>
                                        </div>
                                        <div className="investoraccount__block--details investorhide">
                                            <small>Remaining Amount</small>
                                            <br />
                                            <h2><span>NGN</span>{remainingAmount}</h2>
                                        </div>
                                        <div className="investoraccount__block--details investorhide">
                                            <small>Investments</small>
                                            <br />
                                            <h2>{numOfInvestments}</h2>
                                        </div>
                                        <div className="investoraccount__block--details investorhide">
                                            <small>Average Investment</small>
                                            <br />
                                            <h2><span>NGN</span>{averageInterest}</h2>
                                        </div>
                                        <div className="investoraccount__block--details investorhide">
                                            <small>Average Interest</small>
                                            <br />
                                            <h2>{averageInvestment}<span>%</span></h2>
                                        </div>
                                    </div>
                                    <div className="d-flex investororder1">
                                        <div className="col-7 investordontshow">
                                            <h5 className="text-left mb-0 pb-0">Total Invested Amount</h5><br />
                                            <h6 className="text-left mt-0 pt-0" ><small>INR</small>{investedAmount}</h6>
                                        </div>
                                        <div className="investorspace investordontshow"></div>
                                        <div className="investoraccount__progress mt-2 mb-3 mr-3">
                                            <img  src={progress} alt="" />
                                        </div>
                                    </div>
                                    
                                </section>
    
                                <section className="investortable investortablepadding">
                                    <header>Your Investments</header>
                                    <div className="investortable__container">
                                        <table>
                                        <thead className="investorthead">
                                            <tr>
                                                <td>LOAN</td>
                                                <td>AMOUNT</td>
                                                <td>INTEREST RATE</td>
                                                <td>TERM</td>
                                                <td>TOTAL RETURNS</td>
                                                <td>PAYMENT DUE</td>
                                                <td>STATUS</td>
                                            </tr>
                                            
                                        </thead>

                                        <tbody className="investortbody">
                                            {table.length < 1 && isLoadingTable && (
                                                <BeatLoader css={override} size={40} color={"#04172A"} />

                                            )}

                                            {table.length > 0 && !isLoadingTable ? (
                                                        
                                                table.map((row, idx) => (
                                                    <tr>
                                                        <td>{row.id}</td>
                                                        <td>{row.amount}</td>
                                                        <td>{row.rate}</td>
                                                        <td>{row.term}</td>
                                                        <td>{row.returns}</td>
                                                <td> <span><b className="investorday">{row.paymentdue.day}</b></span> {row.paymentdue.month}</td>
                                                        <td>{row.status}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <p class="py-3 text-center">There is no investment yet</p>
                                            )}
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

} 


export default InvestorsDashboard;