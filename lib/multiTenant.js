const mongoose = require("mongoose");

const { getCurrentTenantId } = require("./storage");

exports.tenantModel = (name, schema, options) => {
  return (props = {}) => {
    schema.add({ tenantId: String });
    const Model = mongoose.model(name, schema, options);

    const { skipTenant } = props;
    if (skipTenant) return Model;

    Model.schema.set("discriminatorKey", "tenantId");

    const tenantId = getCurrentTenantId();
    const discriminatorName = `${Model.modelName}-${tenantId}`;
    const existingDiscriminator = (Model.discriminators || {})[
      discriminatorName
    ];
    return (
      existingDiscriminator ||
      Model.discriminator(discriminatorName, new mongoose.Schema({}))
    );
  };
};

exports.tenantlessModel = (name, schema, options) => {
  return () => mongoose.model(name, schema, options);
};
