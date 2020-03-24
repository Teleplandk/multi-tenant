const ns = require("cls-hooked").createNamespace("request");
const requestStorage = require("cls-hooked").getNamespace("request");

exports.bindCurrentNamespace = (req, res, next) => {
  ns.bindEmitter(req);
  ns.bindEmitter(res);

  ns.run(() => {
    // this asumes a user object is attached to the request, 
    // how that happens is not a part of the code in this repository.
    // What you use as a tenantId and how you get it is up to you :)
    const tenantId = req.user.organization._id.toString();
    ns.set("tenantId", tenantId);
    next();
  });
};

exports.getCurrentTenantId = () => {
  const tenant = requestStorage.get("tenantId");
  //console.log("tenantId from getCurrentTenantId: ", tenant);
  return tenant;
};
