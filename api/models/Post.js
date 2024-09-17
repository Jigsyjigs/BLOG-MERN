const mongoose = require('mongoose')
const {Schema,model} = mongoose;

const postSchema = new Schema({
    title:String,
    summary:String,
    content:String,
    cover:String,
    author: {type: Schema.Types.ObjectId, ref:'users'},
},{timestamps: true})

const postModel = model('posts', postSchema)
module.exports = postModel;