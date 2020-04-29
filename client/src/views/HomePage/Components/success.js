import React, { Component } from 'react'

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

import * as successful from '../../../anime/done.json'
import { withRouter } from 'react-router-dom';
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successful.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
    }




 class Successful extends React.Component{


  componentDidMount(){

    setTimeout(()=>{
      this.props.history.push('/dashboard')
      // window.location.reload()
    }, 5000)
  }
    render(){
        return(



    


            <FadeIn>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <div class="d-flex justify-content-center align-items-center">
            <center> <h1>Registered Successfully</h1>
            <span>Redirecting To DashBoard ....</span>
            
            </center>
         
          <Lottie options={defaultOptions} height={'70%'} width={'70%'} />                      
        </div>
      </FadeIn>
        )
    
}
        
    
}

export default withRouter(Successful)