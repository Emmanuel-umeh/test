import React, { Component } from 'react';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as Done from "../../../anime/done.json"
import {withRouter} from 'react-router-dom'




const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Done.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
}
class Successful extends Component {

    constructor(props){
        super(props)
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.navigate()
    //       }, 3000);
    // }
    // state = {  }


navigate = (e) => {
this.props.history.push('/')
}
    render() { 
        return ( 
            <div>

 

<FadeIn>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <div class="d-flex justify-content-center align-items-center">
            <center> <h1>Registered Successfully</h1>
            <span>Dashboard Coming Soon</span>
            
            </center>
         
          <Lottie options={defaultOptions} height={'70%'} width={'70%'} />                      
        </div>
      </FadeIn>
            </div>
         );
    }
}
 
export default withRouter(Successful) ;