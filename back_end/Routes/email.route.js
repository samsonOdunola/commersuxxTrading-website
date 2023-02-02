const main = require("../controllers/email.controller");
const express = require("express");
const router = express.Router();

router.post("/sendmail", main);

module.exports = router;
