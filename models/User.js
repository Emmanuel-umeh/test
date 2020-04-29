const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const InfluencerSchema = new Schema({

  method : {
    type : String,
    enum : ['local', 'google']
    
  },

  class : {
    type :String,
    default : "Influencer"
  },

  local: {
    name: {
      type: String,
      lowercase: true,
    },
   
    phoneNumber:{
      type:String
    },
    email: {
      type: String,
      lowercase: true,
      required:true
    },
    password: {
      type: String
    },
    companyName: {
      type: String,
      lowercase: true,
    },
    years: {
      type: Number
    },
    industry: {
    
        type : String,
        lowercase: true,
  
      // industry2 : {
      //   type : String
      // },
      // industry3 : {
      //   type : String
      // },
      // industry4 : {
      //   type : String
      // }, 
      // industry5 : {
      //   type : String
      // }
    },
    country: {
      type: String,
      lowercase: true,
      default: ""
    },

    campaignsTaken : {
      type : Array,
      default : []
    },

    socialMedia: {
      type: Array,
      // lowercase: true,
    },

    followers: {
      type: Number
    },

    date: {
      type: Date,
      default: Date.now
    }
  }
});
module.exports = Influencer = mongoose.model("influencer", InfluencerSchema);
