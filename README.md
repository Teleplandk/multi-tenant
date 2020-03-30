# multi-tenant
Node.js + Mongoose multi-tenancy as described here: http://nmajor.com/posts/multi-tenancy-with-expressmongoose#comment-4845530465, updated to use cls-hooked instead of cls, also using common js (require instead of import).
Also got rid of the setter function for setting the tenantId, as we only use it right at the beginning of a request, we might as well incorporate it in the bindCurrentNamespace function in storage.js - if you plan to use cls for other than multi-tenancy with mongoose, you probalby need a setter function again, but for this example we don't need it.
