import React, { Component } from 'react';
import '../../../assets/bootstrap.css';
import './LoanRequest.scss';
import PlusIcon from '../../../assets/images/plus.svg';

class LoanRequest extends Component {
    render() {
        return (
            <section>
                <div className='loan-wrapper'>
                    <span>Dashboard</span>
                    <form id="loanRequest">
                        <div className='top-content'>
                            <div className='upload-wrapper'>
                                <div className='d-flex flex-column align-items-center upload'>
                                    <h4>Upload a Picture</h4>
                                    <p>Click button to upload a picture of yourself</p>
                                    <a href="">Browse</a>
                                    <p>File type: Jpg, Png</p>
                                    <p>File size: not more than 2MB</p>
                                </div>

                                <div className='d-flex upload-add'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <img src={PlusIcon} alt="" />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <img src={PlusIcon} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className='motivational-wrapper'>
                                <h5>Motivational text</h5>
                                <p>Why do you want this loan? Why is it important to you get the loan? Put all this down in the field</p>

                                <label>Description</label>
                                <textarea placeholder="Description of loan br asked for"></textarea>
                                <p>Not more than 100 words</p>
                            </div>
                        </div>

                        <div className='loan-details-wrapper'>
                            <div className='loan-details-content'>
                                <h5>Loan details</h5>
                                <div className='form-group'>
                                    <div>
                                        <label>Title*</label>
                                        <input type="text" placeholder="Input email address" />
                                    </div>

                                    <div>
                                        <label>Amount needed*</label>
                                        <input type="number" placeholder='200, 000' />
                                    </div>
                                </div>

                                <div>
                                    <label>Description</label>
                                    <textarea placeholder="Description of loan being asked for"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className='payback-wrapper'>
                            <h5>Payback plan</h5>
                            <div className='form-group'>
                                <div>
                                    <label>Amount</label>
                                    <input type="number" placeholder="50,000" />
                                </div>

                                <div>
                                    <label>Schedule</label>
                                    <select>
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                        <option>Yearly</option>
                                    </select>
                                </div>

                                <div>
                                    <label>Duration</label>
                                    <input type="text" placeholder="6 months" />
                                </div>
                            </div>
                        </div>

                        <div className='invite-wrapper'>
                            <h5>Invite a recommender</h5>
                            
                            <div className='form-group'>
                                <div>
                                    <label>Name</label>
                                    <input type="text" placeholder="Recommender"></input>
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input type="email" placeholder="recommender@gmail.com"></input>
                                </div>
                            </div>
                        </div>

                        <button type="submit">Create Request > </button>
                    </form>
                </div>
            </section>
        )
    }
}

export default LoanRequest