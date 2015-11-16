angular.module('todomvc', [])
.component('todoHeader', {
  isolate: true,
  bindings: {
    onSubmit: '&'
  },
  controller: function() {
    this.newTodo = '';

  	function submit() {
  		this.onSubmit({ newTodo: this.newTodo });
  		this.newTodo = '';
  	}
    this.submit = submit;
  },
  template: `
    <header class="header">
    	<h1>todos</h1>
    	<form class="todo-form" ng-submit="todoHeader.submit()">
    		<input class="new-todo" placeholder="What needs to be done?" name="newtodo" ng-model="todoHeader.newTodo" autofocus>
    	</form>
    </header>
  `
})
.component('list', {
  isolate: true
})
.component('footer', {
  isolate: true
});
