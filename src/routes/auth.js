const express = require("express");
const router = express.Router();

// router.get("/", function (req, res) {
//   res.send("Wiki home page");
// });

router.post("/login", function (req, res) {
  res.send("Vamos Logar");
});

module.exports = router;