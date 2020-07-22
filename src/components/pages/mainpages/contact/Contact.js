import React from 'react';
import ContactCss from './Contact.css'
import emailIcon from "./email-icon.svg"
import facebookIcon from "./facebook-icon.svg"
import instagramIcon from "./instagram-icon.svg"
import locationIcon from "./location-icon.svg"
import twitterIcon from "./twitter-icon.svg"
import linkedinIcon from "./linkedin-icon.svg"
import contactTextIcon from "./contact-text.svg"
import callIcon from "./call-icon.svg"
import {Navbar,Footer} from '../../navigation/navigation'

const Contact = () => {
    return(
    <>
    <Navbar />
    <div className={ContactCss.contact}>

      <main className="container-fluid px-0">
        <div className="top-image">
          <img className="top-image__title" src={contactTextIcon} alt="" />
          <p className="top-image__text">Feel free to contact us anytime. We will get back to you as soon as possible</p>
        </div>
        <section className="back-wrap">
          <div className="row container-fluid mx-auto main-wrap">
            <div className="col contact--wrap container-fluid">
              <div className="contact--wrap-1">
                <div className="py-2 contact-item d-flex align-items-center mb-4">
                  <img className="mx-4" src={callIcon} alt="" />
                  <div className="contact-item__group">
                    <p className="contact-item__title mb-0">Phone Number</p>
                    <span className="contact-item__num">(+234) 81 770 47279 </span>
                  </div>
                </div>
                <div className="py-2 contact-item nth-3 d-flex align-items-center mb-4">
                  <img className="mx-4" src={emailIcon} alt="" />
                  <div className="contact-item__group">
                    <p className="contact-item__title mb-0">Email Address</p>
                    <span className="contact-item__num">example@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="contact--wrap-2">
                <div className="py-2 contact-item d-flex align-items-center mb-4">
                  <img className="mx-4" src={locationIcon} alt="" />
                  <div className="contact-item__group">
                    <p className="contact-item__title mb-0">Location</p>
                    <span className="contact-item__num">Plot 1, Awolowo Way, Ikeja, Lagos</span>
                  </div>
                </div>
                <div className="py-2 contact-item d-flex align-items-center justify-content-between px-4">
                <img className="my-1" src={facebookIcon} alt="" />
                <img className="my-1" src={instagramIcon} alt="" />
                <img className="my-1" src={twitterIcon} alt="" />
                <img className="my-1" src={linkedinIcon} alt="" />
                   
                </div>
              </div>
            </div>
            <div className="col px-0">
              <div className="container px-0 form--wrap">
                <div className="form--case">
                  <div>
                    <p className="contact-item__title">Send a Message</p>
                    <span className="contact-item__num">Do you have anything you want to tell us? Get in touch with us today.</span>
                  </div>
                  <form className="form-field">
                    <div className="row m-0 d-flex justify-content-between">
                      <div className="form-group form-item--input">
                        <label htmlFor="exampleFormControlInput1">Full Name</label>
                        <input type="text" className="contact-item__num py-4 form-control" id="exampleFormControlInput1" placeholder="Input full name" />
                      </div>
                      <div className="form-group form-item--input">
                        <label htmlFor="exampleFormControlInput1">Email Address</label>
                        <input type="email" className="contact-item__num py-4 form-control" id="exampleFormControlInput1" placeholder="Input email" />
                      </div>
                    </div>
                    <div className="row m-0 d-flex justify-content-between">
                      <div className="form-group form-item--input">
                        <label htmlFor="exampleFormControlInput1">Phone Number</label>
                        <input type="phone" className="contact-item__num py-4 form-control" id="exampleFormControlInput1" placeholder="Input phone number" />
                      </div>
                      <div className="form-group form-item--input">
                        <label htmlFor="exampleFormControlInput1">Subject</label>
                        <input type="text" className="contact-item__num py-4 form-control" id="exampleFormControlInput1" placeholder="Input subject" />
                      </div>
                    </div>
                    <div className="form-group w-100">
                      <label htmlFor="exampleFormControlTextarea1">Message</label>
                      <textarea className="pt-3 form-item--text-area contact-item__num form-control" id="exampleFormControlTextarea1" rows placeholder="Input message" defaultValue={""} />
                    </div>
                    <button className="form-submit" type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> 
        </div>
        <Footer/>
      </>
    )
}

export default Contact;