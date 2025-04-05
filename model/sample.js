var mongoose = require('mongoose');
const sampleschema = mongoose.Schema({
    sName:String,
    sAge:Number
})
// const sampleModel = mongoose.model("name of collection",name of schema)
const sampleModel = mongoose.model("simple",sampleschema);
module.exports= sampleModel;
