'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  //Rotas 
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task); 
    
  app.route('/tasks/:taskName', function(req, res){
    res.send(req.params.taskName);
  })
    .get(todoList.read_a_task);  
};
