/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

/////////////////////////////////////////////// /* Central API Routes*/ //////////////////////////////////////////////////////////
router.use("/api", apiRoutes); // Don't Touch This Link. Add New Routes to API Index.js

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router; // To be Called in Server.js
