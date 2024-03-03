const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// 1. We need to define Schema for Models in Mongoose
// So that we can focus more on Data
// 2. title: String --> also allowed
// 3. title: {
//   type: String,
//   require: true,
// } --> we can give more details too
// 4. We dont need to set Id, it will be automatically set by MongoDB
// 5. require: true --> means its mandatory to provide data for that field
const productSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

// 1. Defining Model while export
// 2. mongoose.model() --> is used to define Models
// 3. It takes 2 argument --> Model Name, Model Schemna
module.exports = mongoose.model("Product", productSchema);
