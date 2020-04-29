import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
// import ReactLoading from "react-loading";
// import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./planet.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
    }
export default class Loading extends React.Component {
    constructor(props){
       super(props)
       this.state = {
        loading: undefined,
        done: undefined
     };
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
                     {/* <center> <h1>PacFarm</h1></center> */}
                  
                   <Lottie options={defaultOptions} height={
                       '70%'
                   } width={"70%"} />                      
                 </div>
               </FadeIn>
            
           </div>
        )
     }
 }