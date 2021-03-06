var app = angular.module('app', []);

app.controller('todoCtrl', function() {
    var todoList = this;
    todoList.todos = [];

    todoList.addTodo = function() {
        if(todoList.todoText == '' ||todoList.todoText == undefined ){
            alert('Write something ,it should not be blank');
            return false;
        }
        else{
            todoList.todos.push({text:todoList.todoText, done:false});
            todoList.todoText = '';
        }
    };

    todoList.remaining = function() {
        var count = 0;
        angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };
});
app.directive('inputCheck', [function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            $("input[type='checkbox']").change(function(){
                if($(this).is(":checked")){
                    $(this).parent().addClass("greyBg"); 
                }else{
                    $(this).parent().removeClass("greyBg");  
                }
            });         
        }
    };
}]);


