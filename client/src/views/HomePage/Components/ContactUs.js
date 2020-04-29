import React from 'react'

export default class ContactUs extends React.Component{
  constructor(props){
    super(props)
  }
    
  // componentDidMount() {
  
  //   this.props.showLoader()
   
  //   setTimeout(() => {
  //     // fetch("https://jsonplaceholder.typicode.com/posts")
  //     // .then(response => response.json())
  //      this.props.showLoader();
  //     }, 1200);
  // }
    render(){

        return(
          <div>
          {/*================Banner Area =================*/}
          <section className="banner_area">
            <div className="container">
              <div className="banner_inner_text">
                <h2>Contact</h2>
                <p>Get in touch</p>
              </div>
            </div>
          </section>
          {/*================End Banner Area =================*/}
          {/*================Get in Touch Area =================*/}
          <section className="get_in_touch_area p_100">
            <div className="container">
              <div className="row get_touch_inner">
                <div className="col-lg-6">
                  <form className="contact_us_form row" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                    <div className="form-group col-lg-6">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group col-lg-6">
                      <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-lg-12">
                      <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject*" />
                    </div>
                    <div className="form-group col-lg-12">
                      <textarea className="form-control" name="message" id="message" rows={1} placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="form-group col-lg-12">
                      <button type="submit" value="submit" className="btn submit_btn form-control">Send</button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                  <div className="touch_details">
                    <div className="l_title">
                      <img src="/assets/img/icon/title-icon.png" alt="" />
                      <h6>Say hello</h6>
                      <h2>Get in touch, send us an e-mail or call us</h2>
                    </div>
                    <p>Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum.</p>
                    <a href="tel:+45237395593232"><h5>Call us now</h5></a>
                    <a href="tel:+45237395593232"><h4>+452373 95593 232</h4></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*================End Get in Touch Area =================*/}
          {/*================Map Area =================*/}
          <section className="contact_map_area">
            <div id="mapBox1" className="mapBox1 row m0" data-lat="40.701083" data-lon="-74.1522848" data-zoom={15} data-marker data-info data-mlat data-mlon>
            </div>
            <div className="map_location_box">
              <div className="container">
                <div className="map_l_box_inner">
                  <div className="bd-callout">
                    <h3>Gibraltar Office</h3>
                    <p>Casemates Square, no253 <br /> United kingdom</p>
                    <h4><a href="#">+453678 9283 559</a> <a href="#">contact@template.com</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*================End Map Area =================*/}
          
          {/*================Contact Success and Error message Area =================*/}
          <div id="success" className="modal modal-message fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <i className="fa fa-close" />
                  </button>
                  <h2>Thank you</h2>
                  <p>Your message is successfully sent...</p>
                </div>
              </div>
            </div>
          </div>
          {/* Modals error */}
          <div id="error" className="modal modal-message fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <i className="fa fa-close" />
                  </button>
                  <h2>Sorry !</h2>
                  <p> Something went wrong </p>
                </div>
              </div>
            </div>
          </div>
          {/*================End Contact Success and Error message Area =================*/}
        </div>
        
        )
    }
}