import React from 'react'

export default class Services extends React.Component{

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
        <h2>Services</h2>
        <p>See what we do best</p>
      </div>
    </div>
  </section>
  {/*================End Banner Area =================*/}
  {/*================End Banner Area =================*/}
  <section className="service_feature">
    <div className="container">
      <div className="row feature_inner">
        <div className="col-lg-4 col-sm-6">
          <div className="feature_item">
            <div className="f_icon">
              <img src="/assets/img/icon/f-icon-1.png" alt="" />
            </div>
            <h4>Brand Identity</h4>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
            <a className="more_btn" href="#">Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="feature_item">
            <div className="f_icon">
              <img src="/assets/img/icon/f-icon-2.png" alt="" />
            </div>
            <h4>Online Marketing</h4>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
            <a className="more_btn" href="#">Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="feature_item">
            <div className="f_icon">
              <img src="/assets/img/icon/f-icon-3.png" alt="" />
            </div>
            <h4>Social Media</h4>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
            <a className="more_btn" href="#">Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="feature_item">
            <div className="f_icon">
              <img src="/assets/img/icon/f-icon-4.png" alt="" />
            </div>
            <h4>Video Support</h4>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
            <a className="more_btn" href="#">Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="feature_item">
            <div className="f_icon">
              <img src="/assets/img/icon/f-icon-5.png" alt="" />
            </div>
            <h4>Fast Support</h4>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
            <a className="more_btn" href="#">Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="feature_item">
            <div className="f_icon">
              <img src="/assets/img/icon/f-icon-6.png" alt="" />
            </div>
            <h4>Download test</h4>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
            <a className="more_btn" href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Banner Area =================*/}
  {/*================Circle Chart Area =================*/}
  <section className="circle_chart_area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="circle_progress circular style-polygon" data-percentage="75" data-thickness="3" data-reverse="true" data-empty-fill="transparent" data-start-color="#987dff" data-end-color="#7acaff">
            <div className="circle_progress_inner">
              <strong />
              <span className="percentage" />
              <h4>Hard work</h4>
            </div> 
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="circle_progress circular style-polygon" data-percentage="83" data-thickness="3" data-reverse="true" data-empty-fill="transparent" data-start-color="#987dff" data-end-color="#7acaff">
            <div className="circle_progress_inner">
              <strong />
              <span className="percentage" />
              <h4>Creativity</h4>
            </div> 
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="circle_progress circular style-polygon" data-percentage="25" data-thickness="3" data-reverse="true" data-empty-fill="transparent" data-start-color="#987dff" data-end-color="#7acaff">
            <div className="circle_progress_inner">
              <strong />
              <span className="percentage" />
              <h4>Good luck</h4>
            </div> 
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="circle_progress circular style-polygon" data-percentage="95" data-thickness="3" data-reverse="true" data-empty-fill="transparent" data-start-color="#987dff" data-end-color="#7acaff">
            <div className="circle_progress_inner">
              <strong />
              <span className="percentage" />
              <h4>Development</h4>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Circle Chart Area =================*/}
  {/*================Service Solution Area =================*/}
  <section className="service_solution_area p_100">
    <div className="container">
      <div className="row s_solution_inner">
        <div className="col-lg-6">
          <div className="s_solution_item">
            <div className="l_title">
              <img src="/assets/img/icon/title-icon.png" alt="" />
              <h6>Discover the features</h6>
              <h2>Simple solutions for complicated times</h2>
            </div>
            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra a eget nisi. Aenean pellentesque elit vitae eros dignissim ultrices. </p>
            <div id="accordion" role="tablist" className="solution_collaps">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <h5 className="mb-0">
                    <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis
                      <i className="minus">-</i>
                      <i className="plus">+</i>
                    </a>
                  </h5>
                </div>
                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                  <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Sed dapibus nunc vulputate mi fringilla, eu consequat
                      <i className="minus">-</i>
                      <i className="plus">+</i>
                    </a>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingThree">
                  <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Curabitur eu libero sed erat viverra gravida at id ex
                      <i className="minus">-</i>
                      <i className="plus">+</i>
                    </a>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Service Solution Area =================*/}
</div>

        )
    }
}