const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const BrandSchema = new Schema({

  method : {
    type : String,
    enum : ['local', 'google']
    
  },

  class : {
    type :String,
    default : "Brand"
  },


  local: {
    name: {
      type: String,
      lowercase: true,
    },
   
    phoneNumber:{
      type:Number
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

    campaigns :{
        type : Array,
        default : []
    },

    date: {
      type: Date,
      default: Date.now
    }
  }
});
module.exports = Brand = mongoose.model("brand", BrandSchema);
