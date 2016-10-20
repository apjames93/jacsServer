var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../queries/apiQueries');
var hair = require('./hair');


router.use('/hair', hair);

module.exports = router;
