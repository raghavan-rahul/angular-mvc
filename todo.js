/**
Controller to route request and add todo item
*/
angular.module('todoApp',[])
.controller('TodoListController', function(){
	var todoList = this;
    todoList.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];

      todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
});