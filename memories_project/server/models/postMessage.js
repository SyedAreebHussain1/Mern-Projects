
const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
  });
  
  const PostMessage  = mongoose.model('PostMessage', postSchema);
  
  module.exports = PostMessage;

// const userSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     age: Number,
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   });
  
//   const User = mongoose.model('User', userSchema);
  
//   module.exports = User;
