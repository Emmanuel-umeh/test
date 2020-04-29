import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/singlePage.css"
import PropTypes from 'prop-types';
// import '../css/dashboard.css'
// import '../css/tick.css'
import './singlePages.css'
import {connect } from 'react-redux'
import Moment from "react-moment";

class SinglePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount (){
    const {user} = this.props.auth
    if(!user){
      this.props.history.push("/dashboard")
    }


    this.setState({
      nameOfCampaign : this.props.location.nameOfCampaign,
      ownerEmail : this.props.location.ownerEmail,
      ownerName :this.props.location.ownerName,
      numberOfReach : this.props.location.numberOfReach,
      socialMedia :  this.props.location.socialMedia,
      description : this.props.location.description,
      date : this.props.location.date,
      image : this.props.location.image,
      amount : this.props.location.amount


    })

    console.log("amount ",  this.props.location.amount
    )
    // console.log(this.props.location.ownerEmail, 
    //   this.props.location.nameOfCampaign)

  }




  state = {
    nameOfCampaign : null,
    ownerName : null,
    ownerEmail : null,
    numberOfReach : null,
    socialMedia : null,
    description : null,
    date : null,
    image : null,
    amount : null
  }

  
  static propTypes = {
    auth: PropTypes.object.isRequired
    // clearErrors: PropTypes.func.isRequired
  };

  render() {

    const {user} = this.props.auth
    return (
      <React.Fragment>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <h1>SocioRiot Campaign</h1>


     

          <main>
  <section className="lp">
    <section className="lp__header">
      <h1>{this.state.nameOfCampaign}</h1>
      <p>All the latest news about your favorite artists and releases.</p>
    </section>
    <section className="lp__grid">
      <div className="lp__gridItem lp__gridItem__image" style ={{backgroundImage : this.state.image}}>
        <img src = {this.state.image} style = {{width : "100%", height : "100%"}}/>
      </div>
      <div className="lp__gridItem lp__gridItem__text">
        <p className="lp__gridItemText-md">Owned by {this.state.ownerName}</p>
    <h2 className="lp__gridItemText-lg">Campaign Details</h2>
        <p className="lp__gridItemText-md">This is a {this.state.socialMedia} campaign with a targetted reach of {this.state.numberOfReach}</p>
        <p className="lp__gridItemText-md">Expected profits : ${this.state.amount}</p>
        <p className="lp__gridItemText-sm lp__gridItemText-sm-bw">Created on{this.state.date}</p>
      </div>

      <center>
                          <div className="row">
                           
                        
                            {user.class === "Brand" ? 
                                  <div className="form-group col-lg-12">
                                  <button type="submit" onClick = {() =>{
                            alert("Functionality Coming soon")
                          }} value="submit"  className="btn submit_btn form-control">Edit Campaign</button>
                                </div>
                           : 

                           <div className="form-group col-lg-12">
                           <button className="btn btn-success" onClick = {() =>{
                            alert("Functionality Coming soon")
                          }}>
                            Take Job
                          </button>
                          </div>
                          }
                          <br></br>
                          <div className="form-group col-lg-12">
                            <button className="btn btn-danger" onClick = {() => this.props.history.push('/dashboard')}>Go Back</button>
</div>
                          </div>
                        </center>
    </section>
  </section></main>

        </center>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  error: state.error,
  user : state.user,
  campaign : state.campaign
})
export default connect(mapStateToProps )(withRouter(SinglePage))
