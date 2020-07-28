import React, { Component } from 'react'
import {Tween } from "react-gsap";
import axios from 'axios'

const INITIAL_STATE = {
    name: "",
    target: "",
    startDate: "",
    endDate: ""
}

class CampaignForm extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE }

        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    onHandleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onHandleSubmit(e) {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FMLToken');
        axios
            .post("https://api.fundmylaptop.com/api/campaigns/startCampaign", this.state)
            .then(res => console.log(res))
            .then(() => window.location.href = "/user-profile")
            .catch(err => console.error(err))
        e.preventDefault()
    }

    render() {
        const { name, target, startDate, endDate } = this.state
        return (
            <Tween from={{ opacity: 0, y: 30 }} duration={1.5}>
                <div className="  header-form col-xl-4 my-5  pt-3 pb-5 bg-white">
                    <form onSubmit={this.onHandleSubmit} className=" px-md-3 d-flex flex-column justify-content-center">
                        <h5 className=" text-center mb-5 mt-0">Laptop Funding</h5>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Campaign Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.onHandleChange}
                                className="form-control"
                                id="CampaignName"
				    	        placeholder="Campaign name here.."
				    	        required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputState">Target</label>
                            <select
                                id="inputState"
                                name="target"
                                value={target}
                                onChange={this.onHandleChange}
                                onBlur={this.onHandleChange}
                                className="form-control" 
                                required
                            >
                                <option value="">choose your target</option>
                                <option value="1000">N1000</option>
                                <option value="10000">N10000</option>
                              </select>
                        </div>
                        {/* date row */}
                        <div className="row">
                            <div className="form-group col-md-6 pr-lg-1">
                                <label  htmlFor="example-date-input" className=" col-form-label" >
                                    Start Date
                                </label>
                                <input
                                    className="form-control"
                                    type="date"
                                    name="startDate"
                                    value={startDate}
                                    onChange={this.onHandleChange}
				    		        id="example-date-input"
				    		        required
                                />
                            </div>
                            <div className="form-group col-md-6  pl-lg-1">
                                <label htmlFor="example-date-input" className=" col-form-label">
                                    End Date
                                </label>
                                <input
                                    className="form-control"
                                    type="date"
                                    name="endDate"
                                    value={endDate}
                                    onChange={this.onHandleChange}
				    		        id="example-date-input"
				    		        required
                                />
                            </div>
                        </div>
				    	<button className="btn-form mx-auto my-4">
                            Start Campaign
                        </button>
                    </form>
                </div>
            </Tween>
        )
    }
}

export default CampaignForm
