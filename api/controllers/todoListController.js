'use strict';

var mongoose = require('mongoose'),
Task = mongoose.model('Tasks');

//Rota para listar todos os produtos no banco   
exports.list_all_tasks = function(req, res) {
  
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//Rota para popular o banco de dados
exports.create_a_task = function(req, res) {
  
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function(req, res) {
  //console.log(req.params);
  Task.find({productName: req.params.taskName}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};