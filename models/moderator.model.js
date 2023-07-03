const mongoose = require("mongoose");
modertorSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});
moderatorModel = mongoose.model("product", moderatorSchema);
module.exports = { moderatorModel };
