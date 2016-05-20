angular.module("todoApp", [])
.controller("TodoListController", function($scope) {
	var todoList = this;
	todoList.todoItems = [
		{ name : "Wake up",done: false },
		{ name : "Go to school",done: false },
		{ name : "Do homework",done: false },
		{ name : "Mow lawn",done: false },
		{ name : "Make dinner",done: false },
		{ name : "Do dishes",done: false },
		{ name : "Shower",done: false },
		{ name : "Sleep",done: false }
	]

	 todoList.addTodo = function() {
    todoList.todoItems.push(
      { name: todoList.todoText, done: falsew }
    )
    todoList.todoText = "";
  };

  todoList.remove = function() {
    console.log('remove function fired');
    var oldTodos = todoList.todoItems;
    todoList.todoItems = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) todoList.todoItems.push(todo);
    })
    todoList.todoItems
  };


}); // end TodoListController