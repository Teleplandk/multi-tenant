const express = require("express");
const app = express();
const { bindCurrentNamespace } = require("./lib/storage");

// for multi tenancy, place as early as possible to let all
// modules in your application have access to the tenantId right away
app.use(bindCurrentNamespace);
