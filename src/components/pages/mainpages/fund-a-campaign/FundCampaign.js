import React, { Component } from 'react';
import { Navbar, Footer } from '../../navigation/navigation';
import '../../../assets/bootstrap.css';
import styles from './Fundcampaign.module.css';
import head from './images/head.png';
import tag from './images/tag.png';
import fakedata from './fakedata.js';
import {Link} from 'react-router-dom'
import pageurl from '../../../router/url/pageurl'


class EachCampaign extends Component {
    state = {  }
    render() { 
        let span1 = {
            color: "#FB3F5C"
        }
        let span2 = {
            marginRight: 10
        }
        return (  
            <div className={styles.campaign_component}>
                <div className={['mb-4', styles.line].join(" ")}></div>
                <div className="container">
                    <h3>Fund {this.props.camp.Name} laptop purchase</h3>
                    <div className="row mb-4">
                        <div className={['col-12', styles.details_row].join(" ")}>
                            <img src={head} className={['float-left',styles.row_img].join(" ")}></img>
                            <div className={["d-flex flex-wrap align-items-center", styles.details_flex].join(" ")}>
                                <div className='mr-5'>
                                    <h3>by <span style={span1}>{this.props.camp.Name}</span><span><img className="ml-2" src={tag}className={styles.img2}></img></span></h3>
                                </div>
                                <div className="pt-2">
                                    <p><span style={span2}>{this.props.camp.campaigns} Campaign Created</span><span style={span2}>|</span>  <span style={span2}>{this.props.camp.location}</span><span style={span2}>|</span><span style={span2}>{this.props.camp.date}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={['container mb-4', styles.description].join(" ")}>
                            <p>{this.props.camp.description}</p>
                            <div className={styles.progress_div}>
                                <div className="row">
                                    <div className="col-9">
                                        <h3>Raised : NGN {this.props.camp.raised} of NGN {this.props.camp.total}</h3>
                                    </div>
                                    <div className="col-3">
                                        <h3 className="float-right">{Math.round((this.props.camp.raised/this.props.camp.total) * 100)}%</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <progress className={styles.progress_bar} value={Math.round((this.props.camp.raised/this.props.camp.total) * 100)} max="100"></progress>
                            </div>
                            <div className={['d-flex flex-wrap', styles.button_flex].join(" ")}>
                                <button className={styles.btn1}>FUND THIS CAMPAIGN</button>
                                <Link to={`${pageurl.COMPAIGN_PAGE_URL}/${this.props.camp.id}`}>
                                    <button className={styles.btn2}>VIEW THIS CAMPAIGN</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default class FundCampaign extends Component {
        state = {
            data : fakedata,
            clicked: 0
        }
        handleclick = () => {
            this.setState(prevstate => {
                return {
                    clicked: prevstate.clicked + 1
                }
            })
        }
    render() {
        let load = {
            width:120,
            height:60,
            backgroundColor: "#FB3F5C"
        }
        let comps = this.state.data.map(camp => <EachCampaign camp={camp} key = {camp.id} /> )
        return (
            <div className={styles.body}>
                <Navbar />
                    {/* Heading row */}
                    <div className={styles.heading_row}>
                        <div className={['container d-flex justify-content-between align-items-center py-3', styles.heading_flex].join(" ")}>
                            <div className={styles.header_left}>
                                <h1>Available Campaigns</h1>
                            </div>
                            <div className={styles.header_right}>
                                <select>
                                    <option value="sort">Sort by</option>
                                    <option value="popular">Popular</option>
                                    <option value="latest">Latest</option>
                                    <option value="oldest">Oldest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    {this.state.clicked == 0 ? [comps[0], comps[1], comps[2]] : this.state.clicked > 0 ? comps : null}
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <button className="btn btn-sm btn-danger" onClick ={this.handleclick} style={load}>Load More</button>
                    </div>
                <Footer />
            </div>
        )
    }
}
