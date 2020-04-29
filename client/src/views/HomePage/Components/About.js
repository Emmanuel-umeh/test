import React, {Component} from "react";


export default class About extends Component{
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
        <h2>About Us</h2>
        <p>Get to know us</p>
      </div>
    </div>
  </section>
  {/*================End Banner Area =================*/}
  {/*================Challange Area =================*/}
  <section className="challange_area p_100">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="challange_text_inner">
            <div className="l_title">
              <img src="/assets/img/icon/title-icon.png" alt="" />
              <h6>Discover the features</h6>
              <h2>We don’t hide, we stand tall in front of chalenge</h2>
            </div>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra a eget nisi. Aenean pellentesque elit vitae eros dignissim ultrices. </p>
            <div className="c_video">
              <a className="popup-youtube" href="https://www.youtube.com/watch?v=62QYQE6k7tg"><img src="/assets/img/icon/video-icon.png" alt="" />See how we work </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 challange_img">
          <div className="challange_img_inner">
            <img className="img-fluid" src="/assets/img/popup-photo.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Challange Area =================*/}
  {/*================Testimonials Slider Area =================*/}
  <section className="testimonials_area">
    <div className="container">
      <div className="testimonials_slider owl-carousel">
        <div className="item">
          <div className="testi_item">
            <h3>“Simply professionals”</h3>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.</p>
            <div className="media">
              <div className="d-flex">
                <img className="rounded-circle" src="/assets/img/testimonials/testi-1.jpg" alt="" />
              </div>
              <div className="media-body">
                <h4>Maria Smith</h4>
                <h5>CEO Enterprise</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testi_item">
            <h3>“They are the best”</h3>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.</p>
            <div className="media">
              <div className="d-flex">
                <img className="rounded-circle" src="/assets/img/testimonials/testi-2.jpg" alt="" />
              </div>
              <div className="media-body">
                <h4>Chriss Turner</h4>
                <h5>CEO Enterprise</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testi_item">
            <h3>“We just love them”</h3>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.</p>
            <div className="media">
              <div className="d-flex">
                <img className="rounded-circle" src="/assets/img/testimonials/testi-3.jpg" alt="" />
              </div>
              <div className="media-body">
                <h4>Julie Smart</h4>
                <h5>CEO Enterprise</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testi_item">
            <h3>“Simply professionals”</h3>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.</p>
            <div className="media">
              <div className="d-flex">
                <img className="rounded-circle" src="/assets/img/testimonials/testi-1.jpg" alt="" />
              </div>
              <div className="media-body">
                <h4>Maria Smith</h4>
                <h5>CEO Enterprise</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Testimonials Slider Area =================*/}
  {/*================We Are Company Area =================*/}
  <section className="we_company_area p_100">
    <div className="container">
      <div className="row company_inner">
        <div className="col-lg-6">
          <div className="left_company_text">
            <div className="l_title">
              <img src="/assets/img/icon/title-icon.png" alt="" />
              <h6>Discover the features</h6>
              <h2>We are a <span>Gibraltar</span> based Company</h2>
            </div>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra a eget nisi. Aenean pellentesque elit vitae eros dignissim ultrices. </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="company_skill">
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellente sque sit am et tellus blandit. Etiam nec odio vestibul.</p>
            <div className="our_skill_inner">
              <div className="single_skill">
                <h3>Development</h3>
                <div className="progress" data-value={70}>
                  <div className="progress-bar">
                    <div className="progress_parcent"><span className="counter">70</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>Design</h3>
                <div className="progress" data-value={90}>
                  <div className="progress-bar">
                    <div className="progress_parcent"><span className="counter">90</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>SEO</h3>
                <div className="progress" data-value={85}>
                  <div className="progress-bar">
                    <div className="progress_parcent"><span className="counter">85</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>Development</h3>
                <div className="progress" data-value={90}>
                  <div className="progress-bar">
                    <div className="progress_parcent"><span className="counter">90</span>%</div>
                  </div>
                </div>
              </div>
              <div className="single_skill">
                <h3>Management</h3>
                <div className="progress" data-value={75}>
                  <div className="progress-bar">
                    <div className="progress_parcent"><span className="counter">75</span>%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End We Are Company Area =================*/}
  {/*================End We Are Company Area =================*/}
  <section className="talk_area">
    <div className="container">
      <div className="talk_text">
        <h4>Are you ready to talk?</h4>
        <a href="mailto:contact@sierracompany.com">contact@sierracompany.com</a>
      </div>
    </div>
  </section>
  {/*================End We Are Company Area =================*/}
</div>


        )
    }
} 