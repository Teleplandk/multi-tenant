const mongoose = require("mongoose");
const { tenantModel } = require("../lib/multiTenant");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String
  }
);

const User = tenantModel("User", userSchema);

module.exports = User;
