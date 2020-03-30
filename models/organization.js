const mongoose = require("mongoose");
const { tenantlessModel } = require("../lib/multiTenant");

const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    }
);

const Organization = tenantlessModel("Organization", organizationSchema);

module.exports = Organization;
