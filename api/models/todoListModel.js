'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Modelo para o banco

var TaskSchema = new Schema({
  productName: {
    type: String
  },
  productDescription: {
    type: String
  },
  productPrice: {
    type: String
  },
  productActualPrice: {
    type: String
  }    
});

module.exports = mongoose.model('Tasks', TaskSchema);