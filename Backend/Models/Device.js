const mongoose= require("mongoose")

const DeviceSchema= new mongoose.Schema({
  id: Number,
  name: String,
  DateOfCreation: String,
  userId: {type:mongoose.Types.ObjectId,ref:"user"}
});

const device = mongoose.model("device", DeviceSchema)
module.exports= device;