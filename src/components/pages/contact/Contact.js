import React from 'react';
import ContactCss from './Contact.css'

const Contact = () => {
    return(

        <div className={ContactCss.contact}>

      <main className="container-fluid px-0">
        <div className="top-image">
          <img className="top-image__title" src="../img/contact-text.svg" alt="" />
          <p className="top-image__text">Feel free to contact us anytime. We will get back to you as soon as possiblle</p>
        </div>
        <section className="back-wrap">
          <div className="row container-fluid mx-auto main-wrap">
            <div className="col contact--wrap container-fluid">
              <div className="contact--wrap-1">
                <div className="py-2 contact-item d-flex align-items-center mb-4">
                  <img className="mx-4" src="../img/call-icon.svg" alt="" />
                  <div className="contact-item__group">
                    <p className="contact-item__title mb-0">Phone Number</p>
                    <span className="contact-item__num">(+234) 81 770 47279 </span>
                  </div>
                </div>
                <div className="py-2 contact-item nth-3 d-flex align-items-center mb-4">
                  <img className="mx-4" src="../img/email-icon.svg" alt="" />
                  <div className="contact-item__group">
                    <p className="contact-item__title mb-0">Email Address</p>
                    <span className="contact-item__num">example@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="contact--wrap-2">
                <div className="py-2 contact-item d-flex align-items-center mb-4">
                  <img className="mx-4" src="../img/location-icon.svg" alt="" />
                  <div className="contact-item__group">
                    <p className="contact-item__title mb-0">Location</p>
                    <span className="contact-item__num">Plot 1, Awolowo Way, Ikeja, Lagos</span>
                  </div>
                </div>
                <div className="py-2 contact-item d-flex align-items-center justify-content-between px-4">
                  <a href="#"><img className="my-1" src="../img/facebook-icon.svg" alt="" /></a>
                  <a href="#"><img className="my-1" src="../img/instagram-icon.svg" alt="" /></a>
                  <a href="#"><img className="my-1" src="../img/twitter-icon.svg" alt="" /></a>
                  <a href="#"><img className="my-1" src="../img/linkedin-icon.svg" alt="" /></a>
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
    )
}

export default Contact;