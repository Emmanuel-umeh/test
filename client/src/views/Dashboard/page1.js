import React, { Component } from 'react'

import Lottie from 'react-lottie'
import * as CampaingLoading from '../loaders/campaignLoading.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CampaingLoading.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
    }
  
export default class Page1 extends Component{
constructor(props){
    super(props)
}

state = {
    loading : false
}
    render(){
        return(
            <center>
            <div  style = {{width : "100%"}}>
              <div className="col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
      <h3 className="panel-title">Active { this.props.user.class === "Brand" ? "Campaigns" : "Jobs"}<ul className="rad-panel-action">
                        <li><i className="fa fa-chevron-down" /></li>
                        <li><i className="fa fa-rotate-right" /></li>
                        <li><i className="fa fa-cog" />
                        </li><li><i className="fa fa-close" />
                        </li>
                      </ul></h3>
                  </div>
                  {/* <div className="panel-body rad-map-container">
                    <div id="world-map" className="rad-map" />
                  </div> */}
  
                  {/* Campaiings section */}
  
  
  
                  <br></br>
                  <br></br>
  
                  {this.state.loading && this.props.user.class ==="Influencer" ? <Lottie options={defaultOptions} height={
                         '100%'
                     } width={"100%"} />   : null}
                  
        
  
        {this.state.page === 1 ? 
        
        <section id ="" className="wrapper">
        <div className="container-fostrap">
     
          <div className="content">
            <div className="container">
              <div className="row">
  
            {this.props.user.class === "Influencer" ? 
  
            // if  campaigns exists do the following
  
            this.props.campaigns !== null ? 
            this.props.campaigns.map((campaign, key) =>  {
              console.log(key)
                return(
  
                
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a className="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                      
                      {/* {console.log("campaign image ", campaign.campaignImage)} */}
                      <img src={campaign.campaignImage ? campaign.campaignImage.image :  "https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg"} />
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">
                        <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"> {campaign.nameOfCampaign}
                        </a>
                      </h4>
                      <p className>
                       {campaign.description}
                      </p>
  
  
                      <p className>
                       Reach : {campaign.numberOfReach}
                      </p>
  
  
                      <p className>
  
                      {campaign.socialMedia.map((socialMedia, key) =>{
                                                        console.log("social media ", socialMedia.value)
                         return(
  
  
                         <p key ={key}> Social Media :  {socialMedia.value  } </p>
                         )
                       })}
                     
                      </p>
                    </div>
                    <div className="card-read-more">
                      <a href="#" onClick = {() =>this.fullDetails(key)} className="btn btn-link btn-block">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                 )
  
  
                })
                :
  
                // if no campaigns exist show this for influencer
                <h1>Active Jobs WIll Be Shown Here</h1>
                
                
                :null
                
                
                
            
                }
                  
              
              </div>
            </div>
          </div>
        </div>
    
    
      </section>
   
   : null}
         
       
       
   
  
  
  
  {/* for brands */}
  {this.props.user.class ==="Brand" ? 
  
  
  
  
  this.props.user.campaigns.length === 0 ?
  <React.Fragment>
  
  <center>
  {/* <h2>No active campaigns</h2> */}
  
  <button className = "btn btn-primary" onClick = {this.createCampaign}> Create Campaign</button>
  </center>
   </React.Fragment>
   : 
   <React.Fragment>
     <center>
     <button onClick = {this.createCampaign} className = "btn btn-primary"> Create Campaign</button>
     </center>
  
    <section  className="wrapper " >
    <div className="container-fostrap">
  
      <div className="content">
        <div className="container">
          <div className="row">
  {this.props.user.campaigns.map((brandCampaigns, key)=>{
    return(
            <div className="col-xs-12 col-sm-4" id = {key}>
              <div className="card">
                <a className="img-card" href="#">
  
           {/* {     console.log( "checking out brand campaigns ", brandCampaigns.campaignImage)} */}
                  {brandCampaigns.campaignImage ?
  
                  
                  <img src={brandCampaigns.campaignImage.image} />  : 
                   <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                  }
                 
                </a>
                <div className="card-content">
                  <h4 className="card-title">
                    <a href="#"> {brandCampaigns.nameOfCampaign}
                    </a>
                  </h4>
                  <p className>
                   {brandCampaigns.description}
                  </p>
  
  
                  <p className>
                   Reach : {brandCampaigns.numberOfReach}
                  </p>
  
                  <p className>
                   Social Media : {brandCampaigns.socialMedia}
                  </p>
                </div>
                <div className="card-read-more">
                  <a href="#" onClick = {() =>this.fullDetailsBrand(key)} className="btn btn-link btn-block">
                    Read More
                  </a>
                </div>
              </div>
            </div>
         
          
  
  
  )
  })}
  
  </div>
        </div>
      </div>
    </div>
  
  
  </section>
  
  
   </React.Fragment>
   :null
  
  
  
  }
                 
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
  
  
                </div>
              </div>
            </div>
      
            </center>
      
        )
    }
}