var knex = require('../db/knex');
module.exports ={

  getData : function(){
    return knex('work');
  },

};
