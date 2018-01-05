var express = require('express');
var router = express.Router();

var test = require("../json/test.json");
var sum = require("../json/history_sum.json");
var record = require("../json/history_record.json");
var Mrecord = require("../json/message_record.json");

router.get('/test',function (req,res) {
  res.json(test);
});
router.get('/sum', function (req,res) {
  res.json(sum);
});
router.get('/record', function (req,res) {
  res.json(record);
});
router.get('/m_record', function (req,res) {
  res.json(Mrecord);
});

module.exports = router;
