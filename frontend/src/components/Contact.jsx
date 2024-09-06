import React from 'react';

const Contact = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up" data-aos-delay="0">
            <span className="subheading">Contact</span>
            <h2 className="heading mb-5">Get In Touch</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-info">
              <div className="address mt-4">
                <i className="icon-room"></i>
                <h4 className="mb-2">Location:</h4>
                <p>43 Raymouth Rd. Baltemoer, London 3910</p>
              </div>
              <div className="open-hours mt-4">
                <i className="icon-clock-o"></i>
                <h4 className="mb-2">Open Hours:</h4>
                <p>
                  Sunday-Friday:<br/>
                  11:00 AM - 2300 PM
                </p>
              </div>
              <div className="email mt-4">
                <i className="icon-envelope"></i>
                <h4 className="mb-2">Email:</h4>
                <p>info@Untree.co</p>
              </div>
              <div className="phone mt-4">
                <i className="icon-phone"></i>
                <h4 className="mb-2">Call:</h4>
                <p>+1 1234 55488 55</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <form action="#">
              <div className="row">
                <div className="col-6 mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-6 mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="col-12 mb-3">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="col-12 mb-3">
                  <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="col-12">
                  <input type="submit" value="Send Message" className="btn btn-primary" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;