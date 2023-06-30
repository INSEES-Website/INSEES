const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send('hello!! this is express from node js')
  const params = { title: "home" };
  res.render("index", params);
});

router.get("/our_activities", (req, res) => {
  // res.send('hello!! this is express from node js')
  const params = { title: "our_activities" };
  res.render("our_activities", params);
});

router.get("/loading", (req, res) => {
  const params = { title: "loading" };
  res.render("loading", params);
});

module.exports = router;
