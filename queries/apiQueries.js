var knex = require('../db/knex');
module.exports ={

  getData : function(){
    return knex('work').innerJoin('category', 'lookUp', 'category.id');
  },

  getcat : function(id){
    return knex('work').innerJoin('category', 'lookUp', 'category.id').where({lookUp: id});
  },

  getPic : function(id){
    return knex('work')
    .where({id: id});
  },

  addData : function(data){
    return knex('work')
    .insert({
      description: data.description,
      img: data.img,
      lookUp : data.lookUp
    });
  },

  editData : function(data){
    return knex('work')
    .update({
      description: data.description,
      img: data.img,
      lookUp: data.lookUp
    })
    .where({id : data.id});
  },

  deleteData : function(data){
    return knex('work')
    .where({id: data})
    .del();
  }


};
