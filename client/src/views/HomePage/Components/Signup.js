import React from 'react'
import MultiSelect from "react-multi-select-component";
import { connect } from "react-redux";
import GoogleLogin from "react-google-login";
import axios from 'axios'
import PropTypes from "prop-types";
// import register from '../../../actions/authActions'
import {OauthGoogle} from '../../../actions/authActions'
import { clearErrors } from "../../../actions/errorActions";
import {registerInfluencer, registerBrand} from '../../../actions/authActions'

// import zxcvbn from 'zxcvbn'

import {withRouter} from 'react-router-dom'
import "../../../css/googleButton.css"
import "../../../css/signup.css"

// import Select from "react-dropdown-select";
// import e from 'express';

const options = [
  { label: "Instagram ", value: "Instagram" },
  { label: "FaceBook ", value: "FaceBook" },
  { label: "Twitter ", value: "Twitter" },
  { label: "LinkedIn ", value: "LinkedIn" },
  { label: "Discord ", value: "Discord" },

];


class Signup extends React.Component{
  constructor(props){
    super(props);

   
    // this.showHide = this.showHide.bind(this);
    // this.passwordStrength = this.passwordStrength.bind(this);
  }
  
  state = {
    type: 'input',
    score: 'null',
 values : [],
 msg : null,



//  multiple select
socialMedia : [],
// setsocialMedia : [],

//  details for users
class : "influencer",
 name : null,
 email :null,
 years : null,

 industry : null,
 password : null,
 companyName : null,
 confirmPassword: null,
 country : null,
 socialMedia : null,
 numberOfFollowers : null,
 phoneNumber : null

  }


  

  
  componentDidUpdate(prevProps) {

    // this.props.showLoader()
   
    // setTimeout(() => {
    //   // fetch("https://jsonplaceholder.typicode.com/posts")
    //   // .then(response => response.json())
    //    this.props.showLoader();
    //   }, 1200);
    const { error} = this.props;

    const {user} =this.props.auth
    console.log("loging part ", user)
    if(user ){
      this.props.history.push('/dashboard')
    }
    if (error !== prevProps.error) {
      //
      if (error.id === "REGISTER_FAIL") {
        // this.setState({
        //   msg: error.msg.msg
        // });
        console.log({ msg: error.msg.msg})
      } else if (error.id === "LOGIN_FAIL") {
        this.setState({
          msg: error.msg.msg
        });
        console.log({ msg: error.msg.msg})
      } else if (error.id === "REGISTER_SUCCESS") {
        // this.props.history.push("/sponsor")
        
        // window.location.reload()
        console.log("register success")
      }

      else if (error.id === "LOGIN_SUCCESS") {
        // this.props.history.push("/sponsor")

        console.log("logged in successfully")
        // window.location.reload()
      }
      
      
      else {
        this.setState({
          msg: null
        });
      }
    }

    // if authenticated, close modal

    // if (isAuthenticated) {
    //   //  alert("Logged in")
    //   console.log("logged in");
    // }
  }


  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }


  clear = ()=> {

    this.props.clearErrors()
  }



// registration
  register =async(e) =>{
    e.preventDefault()


    if(this.state.class === "influencer"){

      console.log(this.state.socialMedia)

const { name,email,years,industry,password,confirmPassword,country,socialMedia,phoneNumber, companyName} =this.state
const followers = this.state.numberOfFollowers
      const influencer = {

        name,email,years,industry,password,confirmPassword,country,socialMedia,followers,phoneNumber, companyName
      }
      console.log("Registering influencer")
      await this.props.registerInfluencer(influencer)

      console.log("Registered succesfully")
      // function sleep(ms) {
      //   return new Promise(resolve => setTimeout(resolve, ms));
      // }
      // await sleep(3000);

      // const { isAuthenticated, token } = this.props.auth;

      // console.log("is the user authenticated ", isAuthenticated, token)
      // if(isAuthenticated){
      //   console.log("navigationg route", isAuthenticated)
        
      //   this.props.history.push('/successful')
      // }



    }else if(this.state.class === "brand"){
      const { name,email,years,industry,password,confirmPassword,country,socialMedia,phoneNumber, companyName} =this.state
      const brand = {
        name, email, password,industry,companyName,phoneNumber,country
      }

      console.log("registering brand")
      await this.props.registerBrand(brand)


    //   function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    //   }
    //   await sleep(3000);
    
    //   const { error } = this.props;
    // const {token, user, isAuthenticated } = this.props.auth;
 


    
    // attempt to login

   

    // console.log("error", error.id)
    // console.log(isAuthenticated);
    // console.log("Should redirect");
    // setTimeout(function(){ alert("Hello"); }, 3000);

      // function sleep(ms) {
      //   return new Promise(resolve => setTimeout(resolve, ms));
      // }
      // await sleep(3000);
      // const { isAuthenticated, token } = this.props.auth;

      // console.log("is the user authenticated ", isAuthenticated, token)
      // if(isAuthenticated){

      //   console.log("navigationg route", isAuthenticated)
      //   this.props.history.push('/successful')
      // }
    }

  }

  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })

    console.log(e.target.name, e.target.value)
  }


  
  

    //  multi select
  // setValues = (values) => {
  //   this.setState({ values: values });
  //   console.log("values in the state ",  this.state.values)
  // }
  
  // passwordStrength(e){
  //   if(e.target.value === ''){
  //     this.setState({
  //       score: 'null'
  //     })
  //   }
  //   else{
  //     var pw = zxcvbn(e.target.value);
  //     this.setState({
  //       score: pw.score
  //     });      
  //   }

  // }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
    
  // componentDidMount() {
  
  //   this.props.showLoader()
   
  //   setTimeout(() => {
  //     // fetch("https://jsonplaceholder.typicode.com/posts")
  //     // .then(response => response.json())
  //      this.props.hideLoader();
  //     }, 1200);
  // }

  changeBrand = () =>{
    this.setState ( {

      class : "brand"
    },
   console.log("class ", this.state.class) 
    )


  }

  

  
  changeInfluencer = () =>{
    this.setState ( {

      class : "influencer"
    },
   console.log("class ", this.state.class) 
    )


  }


  
  responseGoogle = async res => {
    // console.log("response google", res);
    // console.log(res.accessToken);
    // console.log(res.profileObj.email);

    const email = res.profileObj.email

    await this.props.OauthGoogle(res.accessToken,email);
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }   

    await sleep(3000);
    const { user, isAuthenticated } = this.props.auth;

    console.log("Google user after sleep", user)
   
  
      if(user ){
        // this.props.showLoader()
        await sleep(2000);
        console.log("this is the user " ,user)

        console.log("Logged in")
          // this.props.history.push("/sponsor")



          
    this.props.history.push('/successful')
          
          // window.location.reload()
          // this.props.hideLoader()
        
        }
  
    
    
  };

//   signup = async(e) => {
//     e.preventDefault()

//     console.log("SIGNUP")
//     const username = this.username.value
//     const email = this.email.value
//     const password = this.password2.value

// console.log({username,email,password})

// await this.props.register({username,email,password})


// this.props.history.push('/loggedIn')


//   }

  error =(err)=>{
    console.log(err)
  }
    render(){
      // const options = {1 : "Instagram", 2 : "Facebook",  3 :"Twitter"}
      const {socialMedia} = this.state;
      // const { socialMediaItems, options } = this.state;
        return(

          <React.Fragment>

<br></br>
  <br></br>
  
        
<div className="container register">

  <div className="row">
    <div className="col-md-3 register-left">
      <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
      <h3>Welcome</h3>
      <p>You are 30 seconds away from becoming a part of SocioRiot!</p>
      {/* <input type="submit" name defaultValue="Login" /><br /> */}
    </div>
    <div className="col-md-9 register-right">
      <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="home-tab" onClick= {this.changeInfluencer} data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Influencer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="profile-tab"onClick= {this.changeBrand} data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Brand</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

          {/* Alert field */}
{this.state.msg ?    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  {this.state.msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
</div> : null }
      

{/* Alert end */}

          <h3 className="register-heading">Apply as an Influencer</h3>
          <div className="row register-form">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" name = "name" className="form-control" placeholder="Full Name*" onChange = {this.onChange} />
              </div>
              <div className="form-group">
                <input type="number" name = "years" className="form-control" placeholder="Number Of Years As A Marketer *" onChange = {this.onChange}  />
              </div>
{/* Industry */}
                <div className="form-group">
                <select name = "industry" onChange = {this.onChange} className="form-control">
                  <option className="hidden" selected disabled>Industry</option>
                  <option>B2B</option>
                  <option>Beauty</option>
                  <option>Business Advert</option>
                  <option>Family</option>
                  <option>Fashion</option>

                  <option>Fitness and Health</option>
                  <option>Food And Beverage</option>
                  <option>Games And Sports</option>
                  <option>Home And LifeStyle</option>
                  <option>LifeStyle</option>

                  <option>Technology</option>
                  <option>Travel</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <input type="password" name = "password" className="form-control" placeholder="Password *" onChange = {this.onChange} />
              </div>
              <div className="form-group">
                <input type="password" name = "confirmPassword" className="form-control" placeholder="Confirm Password *" onChange = {this.onChange} />
              </div>
              {/* <div className="form-group">
                <div className="maxl">
                  <label className="radio inline"> 
                    <input type="radio" name="gender" defaultValue="male" defaultChecked />
                    <span> Male </span> 
                  </label>
                  <label className="radio inline"> 
                    <input type="radio" name="gender"  />
                    <span>Female </span> 
                  </label>
                </div>
              </div> */}
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="email" name = "email" className="form-control" placeholder="Your Email *" onChange = {this.onChange} />
              </div>
              <div className="form-group">
              {/* <Select options={options} onChange={(values) => this.setValues(values)} /> */}
              </div>
             
              <div className="form-group">
                <input type="number" name = "phoneNumber" minLength={1} maxLength={15}  className="form-control" placeholder="Your Phone *" onChange = {this.onChange}  />
              </div>

              <div className="form-group">
                <input type="text" name = "companyName" className="form-control" placeholder="Company Name *" onChange = {this.onChange}  />
              </div>

              {/* Select country */}
              <div className="form-group">
              <select className = "form-control" name = "country" defaultValue = "Select Your Country" onChange = {this.onChange} placeholder= "Select Your Country">
              <option className="hidden" selected disabled>Please select your Country</option>
    <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antartica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos Islands">Cocos (Keeling) Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo">Congo, the Democratic Republic of the</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cota D'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia (Hrvatska)</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor">East Timor</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands">Falkland Islands (Malvinas)</option>
<option value="Faroe Islands">Faroe Islands</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="France Metropolitan">France, Metropolitan</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
<option value="Holy See">Holy See (Vatican City State)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
<option value="Korea">Korea, Republic of</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao">Lao People's Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon" selected>Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macau">Macau</option>
<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia, Federated States of</option>
<option value="Moldova">Moldova, Republic of</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russia">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
<option value="Saint LUCIA">Saint LUCIA</option>
<option value="Saint Vincent">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option> 
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia (Slovak Republic)</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia">South Georgia and the South Sandwich Islands</option>
<option value="Span">Spain</option>
<option value="SriLanka">Sri Lanka</option>
<option value="St. Helena">St. Helena</option>
<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard">Svalbard and Jan Mayen Islands</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syrian Arab Republic</option>
<option value="Taiwan">Taiwan, Province of China</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania, United Republic of</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Viet Nam</option>
<option value="Virgin Islands (British)">Virgin Islands (British)</option>
<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Serbia">Serbia</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</select>

              </div>
              <div className="form-group">
              {/* <select onChange = {this.onChange} name= "socialMedia" className="form-control">
                  <option className="hidden" selected disabled>Social Media</option>
                  <option>Instagram</option>
                  <option>FaceBook</option>
                  <option>Twitter</option>
                  <option>LinkedIn</option>
                  <option>Discord</option>
                </select> */}


                {/* <pre>{selected}</pre> */}
      <MultiSelect
        overrideStrings={{
          selectSomeItems: "Social Media...",
          allItemsAreSelected: "All Medias are Selected",
          selectAll: "Select All",
          search: "Search",
      }}
        options={options}
        value={socialMedia}
        onChange={ socialMedia => this.setState({socialMedia})}
        labelledBy={"Social Media"}
      />


              </div>

              <div className="form-group">
                <input type="number" onChange = {this.onChange} name = "numberOfFollowers" className="form-control" placeholder="Number Of Followers/Connections"  />
              </div>
              <input type="submit" onClick = {this.register} className="btnRegister" defaultValue="Register" />
            </div>
          </div>
        </div>



        {/* Second form Brand */}



        <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">

          
          <h3 className="register-heading">Sign Up as a Brand or Agency
          </h3>

              {/* Alert field */}
              {this.state.msg ?    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  {this.state.msg}
  <button type="button" className="close" data-dismiss="alert" onClick = {this.clear} aria-label="Close">
    <span aria-hidden="true" onClick = {this.clear}>×</span>
  </button>
</div> : null }
      

{/* Alert end */}
               
          <div className="row register-form">

            <div className="col-md-6">


              <div className="form-group">
                <input type="text" onChange = {this.onChange} name = "name" className="form-control" placeholder="Name *"  />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" onChange = {this.onChange} name = "phoneNumber" placeholder="Phone Number*"  />
              </div>
              <div className="form-group">
                <input type="email" className="form-control"onChange = {this.onChange} name ="email" placeholder="Email *"  />
              </div>
              <div className="form-group">
                <input type="text" name = "companyName"  onChange = {this.onChange} className="form-control" placeholder="Company Name *"  />
              </div>
              <div className="form-group">
              <select className = "form-control"  name = "country" defaultValue = "Select Your Country" onChange = {this.onChange} >
              <option className="hidden" selected disabled>Please select your Country</option>
    <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antartica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos Islands">Cocos (Keeling) Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo">Congo, the Democratic Republic of the</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cota D'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia (Hrvatska)</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor">East Timor</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands">Falkland Islands (Malvinas)</option>
<option value="Faroe Islands">Faroe Islands</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="France Metropolitan">France, Metropolitan</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
<option value="Holy See">Holy See (Vatican City State)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
<option value="Korea">Korea, Republic of</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao">Lao People's Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon" selected>Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macau">Macau</option>
<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia, Federated States of</option>
<option value="Moldova">Moldova, Republic of</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russia">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
<option value="Saint LUCIA">Saint LUCIA</option>
<option value="Saint Vincent">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option> 
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia (Slovak Republic)</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia">South Georgia and the South Sandwich Islands</option>
<option value="Span">Spain</option>
<option value="SriLanka">Sri Lanka</option>
<option value="St. Helena">St. Helena</option>
<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard">Svalbard and Jan Mayen Islands</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syrian Arab Republic</option>
<option value="Taiwan">Taiwan, Province of China</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania, United Republic of</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Viet Nam</option>
<option value="Virgin Islands (British)">Virgin Islands (British)</option>
<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Serbia">Serbia</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</select>

              </div>
              
            </div>



        
            


            <div className="col-md-6">
              
              <div className="form-group">
                <input type="password" className="form-control" onChange = {this.onChange} name = "password" placeholder="Password *"  />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" onChange = {this.onChange} name = "confirmPassword "placeholder="Confirm Password *"  />
              </div>
              <div className="form-group">
                <select name = "industry" onChange = {this.onChange} className="form-control">
                  <option className="hidden" selected disabled>Industry</option>
                  <option>B2B</option>
                  <option>Beauty</option>
                  <option>Business Advert</option>
                  <option>Family</option>
                  <option>Fashion</option>

                  <option>Fitness and Health</option>
                  <option>Food And Beverage</option>
                  <option>Games And Sports</option>
                  <option>Home And LifeStyle</option>
                  <option>LifeStyle</option>

                  <option>Technology</option>
                  <option>Travel</option>
                  <option>Other</option>
                </select>
            
            
              </div>
              {/* <div className="form-group">
                <input type="text" className="form-control" placeholder="`Answer *"  />
              </div> */}
              <input type="submit" onClick = {this.register} className="btnRegister" defaultValue="Register" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>
</React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps, {registerInfluencer, registerBrand, clearErrors, OauthGoogle })(
  withRouter(Signup)
);