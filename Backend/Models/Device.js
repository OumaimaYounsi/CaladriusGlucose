const mongoose= require("mongoose")

const DeviceSchema= new mongoose.Schema({
  id: Number,
  name: String,
  dateOfCreation: String,
  model: String,
  userId: {type:mongoose.Types.ObjectId,ref:"user"}
});

const device = mongoose.model("device", DeviceSchema)
module.exports= device;