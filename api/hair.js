var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../queries/apiQueries');
var helpers =  require('../auth/helpers');



router.get('/', function(req, res, next){
  queries.getData()
  .then(function(data){
    res.json({allData: data});
  });
});

router.get('/:id', function(req, res, next){
  queries.getcat(req.params.id)
  .then(function(data){
    res.json({catData: data});
  });
});

router.get('/work/:id', function(req, res, next){
  queries.getPic(req.params.id)
  .then(function(data){
    res.json({test: data});
  });
});

router.post('/', function(req, res, next ){
  queries.addData(req.query)
  .then(function(data){
    res.json({data : data});
  });
});

router.delete('/:id',  function(req, res, next){
  queries.deleteData(req.query.id)
  .then(function(data){
    res.json({data : data});
  });
});

router.put('/',  function(req, res, next){
  console.log(req.query);
  queries.editData(req.query)
  .then(function(data){
    res.json({data : data});
  });
});



// router.delete('/',helpers.ensureauthenticated,  function(req, res, next){
//
// });
//
// router.post('/',helpers.ensureauthenticated, function(req, res,next){
//
// });
//
// router.put('/',helpers.ensureauthenticated, function(req, res,next){
//
// });
//

module.exports = router;
