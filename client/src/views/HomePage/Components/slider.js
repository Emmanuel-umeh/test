import React, { Component } from 'react'

export default class SLider extends Component{

    render()
    {return(

<React.Fragment>

  <br></br>
  <br></br>
  <center>

    {/*   Big container   */}
<div className="container">
  <div className="row">
    <div className="col-sm-8 col-sm-offset-2">
      {/*      Wizard container        */}
      <div className="wizard-container">
        <div className="card wizard-card" data-color="orange" id="wizardProfile">
          <form action method>
            {/*        You can switch " data-color="orange" "  with one of the next bright colors: "blue", "green", "orange", "red", "azure"          */}
            <div className="wizard-header text-center">
              <h3 className="wizard-title">Create your profile</h3>
              <p className="category">This information will let us know more about you.</p>
            </div>
            <div className="wizard-navigation">
              <div className="progress-with-circle">
                <div className="progress-bar" role="progressbar" aria-valuenow={1} aria-valuemin={1} aria-valuemax={3} style={{width: '21%'}} />
              </div>
              <ul>
                <li>
                  <a href="#about" data-toggle="tab">
                    <div className="icon-circle">
                      <i className="ti-user" />
                    </div>
                    About
                  </a>
                </li>
                <li>
                  <a href="#account" data-toggle="tab">
                    <div className="icon-circle">
                      <i className="ti-settings" />
                    </div>
                    Work
                  </a>
                </li>
                <li>
                  <a href="#address" data-toggle="tab">
                    <div className="icon-circle">
                      <i className="ti-map" />
                    </div>
                    Address
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane" id="about">
                <div className="row">
                  <h5 className="info-text"> Please tell us more about yourself.</h5>
                  <div className="col-sm-4 col-sm-offset-1">
                    <div className="picture-container">
                      <div className="picture">
                        <img src="/assets/img/default-avatar.jpg" className="picture-src" id="wizardPicturePreview" title />
                        <input type="file" id="wizard-picture" />
                      </div>
                      <h6>Choose Picture</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First Name <small>(required)</small></label>
                      <input name="firstname" type="text" className="form-control" placeholder="Andrew..." />
                    </div>
                    <div className="form-group">
                      <label>Last Name <small>(required)</small></label>
                      <input name="lastname" type="text" className="form-control" placeholder="Smith..." />
                    </div>
                  </div>
                  <div className="col-sm-10 col-sm-offset-1">
                    <div className="form-group">
                      <label>Email <small>(required)</small></label>
                      <input name="email" type="email" className="form-control" placeholder="andrew@creative-tim.com" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="account">
                <h5 className="info-text"> What are you doing? (checkboxes) </h5>
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-4">
                      <div className="choice" data-toggle="wizard-checkbox">
                        <input type="checkbox" name="jobb" defaultValue="Design" />
                        <div className="card card-checkboxes card-hover-effect">
                          <i className="ti-paint-roller" />
                          <p>Design</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="choice" data-toggle="wizard-checkbox">
                        <input type="checkbox" name="jobb" defaultValue="Code" />
                        <div className="card card-checkboxes card-hover-effect">
                          <i className="ti-pencil-alt" />
                          <p>Code</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="choice" data-toggle="wizard-checkbox">
                        <input type="checkbox" name="jobb" defaultValue="Develop" />
                        <div className="card card-checkboxes card-hover-effect">
                          <i className="ti-star" />
                          <p>Develop</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="address">
                <div className="row">
                  <div className="col-sm-12">
                    <h5 className="info-text"> Are you living in a nice area? </h5>
                  </div>
                  <div className="col-sm-7 col-sm-offset-1">
                    <div className="form-group">
                      <label>Street Name</label>
                      <input type="text" className="form-control" placeholder="5h Avenue" />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Street Number</label>
                      <input type="text" className="form-control" placeholder={242} />
                    </div>
                  </div>
                  <div className="col-sm-5 col-sm-offset-1">
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" className="form-control" placeholder="New York..." />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="form-group">
                      <label>Country</label><br />
                      <select name="country" className="form-control">
                        <option value="Afghanistan"> Afghanistan </option>
                        <option value="Albania"> Albania </option>
                        <option value="Algeria"> Algeria </option>
                        <option value="American Samoa"> American Samoa </option>
                        <option value="Andorra"> Andorra </option>
                        <option value="Angola"> Angola </option>
                        <option value="Anguilla"> Anguilla </option>
                        <option value="Antarctica"> Antarctica </option>
                        <option value="...">...</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wizard-footer">
              <div className="pull-right">
                <input type="button" className="btn btn-next btn-fill btn-warning btn-wd" name="next" defaultValue="Next" />
                <input type="button" className="btn btn-finish btn-fill btn-warning btn-wd" name="finish" defaultValue="Finish" />
              </div>
              <div className="pull-left">
                <input type="button" className="btn btn-previous btn-default btn-wd" name="previous" defaultValue="Previous" />
              </div>
              <div className="clearfix" />
            </div>
          </form>
        </div>
      </div> {/* wizard container */}
    </div>
  </div>{/* end row */}
</div> {/*  big container */}
</center>
</React.Fragment>
        
    )}
}