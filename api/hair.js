var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../queries/apiQueries');
var helpers =  require('../auth/helpers');



router.get('/', function(req, res, next){

});

router.get('/', function(req, res, next){


});

router.get('/:id', function(req, res, next){

});

router.delete('/',helpers.ensureauthenticated,  function(req, res, next){

});

router.post('/',helpers.ensureauthenticated, function(req, res,next){

});

router.put('/',helpers.ensureauthenticated, function(req, res,next){

});


module.exports = router;
