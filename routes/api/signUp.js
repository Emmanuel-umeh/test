const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
var passport = require("passport");
const controller = require('../../config/passport') 
// const controller = require('../../config/passport')

// const passportConf  = require('../../config/passport')

// User Model
const Influencer = require("../../models/User");
const Brand = require("../../models/Brand")

// const GoogleUser = require("../../models/googleUsers");

// @route   POST api/signup/influencer
// @desc    Register new influencer locally
// @access  Public
router.post("/influencer", (req, res) => {
  // if(req.method !== "local" ){
  //   next()
  // }

  const {
    // firstName,
    name,
  
    email,
    password,
    industry,
    companyName,
    phoneNumber,
    years,
    socialMedia, 
    followers,
    country
  } = req.body;

  // Simple validation
  if (
    !name ||
    !email ||
    // !username||
    !password ||
    !phoneNumber ||
    !industry ||
    !companyName ||
    !years ||
    !socialMedia ||
    !followers||
    !country
  ) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing influencer
  Influencer.findOne({ "local.email": email }).then(influencer => {
    if (influencer) return res.status(400).json({ msg: "influencer already exists" });

    const newUser = new Influencer({

      method : "local",
      local: {
        name,
        email,
        password,
        industry,
        phoneNumber,
        companyName,
        years,
        socialMedia,
        followers,
        country
      }
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.local.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.local.password = hash;
        newUser.save().then(influencer => {
          jwt.sign(
            { id: influencer.id },
            "jwtSecret",
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  method : influencer.method,

                  id: influencer._id,
                  class : influencer.class,
               
           
                  name:influencer.local.name,
                  email: influencer.local.email,
                  companyName: influencer.local.companyName,
                  industry : influencer.local.industry,
                         years: influencer.local.years,
                         phoneNumber : influencer.local.phoneNumber,
                  socialMedia: influencer.local.socialMedia,
                  followers: influencer.local.followers,
                  country : influencer.local.country
                }
              });
            }
          );
        });
      });
    });
  });
});



// @route   POST api/signup/brand
// @desc    Register new brand locally
// @access  Public
router.post("/brand", (req, res) => {
  // if(req.method !== "local" ){
  //   next()
  // }

  const {
    // firstName,
    name,
  
    email,
    password,
    industry,
    companyName,
    phoneNumber,
    // companyType,
    // years,
    // socialMedia, 
    // followers,
    country
  } = req.body;

  // Simple validation
  if (
    !name ||
    !email ||
    // !username||
    !password ||
    !industry ||
    !companyName ||
    !phoneNumber ||
    // !socialMedia ||
    // !followers||
    !country
  ) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing influencer
  Brand.findOne({ "local.email": email }).then(brand => {
    if (brand) return res.status(400).json({ msg: "brand already exists" });

    const newUser = new Brand({

      method : "local",
      local: {
        name,
        email,
        password,
        industry,
        companyName,
        phoneNumber,
        // socialMedia,
        // followers,
        country
      }
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.local.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.local.password = hash;
        newUser.save().then(brand => {
          jwt.sign(
            { id: brand.id },
            "jwtSecret",
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  method : brand.method,

                  id: brand._id,
                  class : brand.class,
                  campaigns : brand.local.campaigns,
                  
           
                  name:brand.local.name,
                  email: brand.local.email, 
                  companyName: brand.local.companyName,
                  industry : brand.local.industry,
                         phoneNumber: brand.local.phoneNumber,
                  // socialMedia: brand.local.socialMedia,
                  // followers: brand.local.followers,
                  country : brand.local.country
                }
              });
            }
          );
        });
      });
    });
  });
});


router.route('/oauth/google')
.post(passport.authenticate('googleToken',  {session : false}),
    controller.googleOauth
)
// router
//   .route("/oauth/google")
//   .post(
//     passport.authenticate("googleToken", { session: false }),
//     controller.googleOauth
//   );

module.exports = router;
 