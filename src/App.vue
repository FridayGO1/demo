<template>
    <div class="todo-container">
      <div class="todo-wrap">
          <TodoHeader :addTodo="addTodo"/>
          <TodoList :todos="todos" :deteleTodo="deteleTodo"/>
          <TodoFooter :todos="todos" :deteleCompleteTodos="deteleCompleteTodos" :selectAllTodos="selectAllTodos"/>
      </div>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
export default {
  data () {
    return {
      todos: [
        {title: '吃饭', complete: false},
        {title: '睡觉', complete: false},
        {title: '打豆豆', complete: false}
      ]
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deteleTodo (index) {
      this.todos.splice(index, 1)
    },
    deteleCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAllTodos (check) {
      this.todos.forEach(todo => todo.complete = check)
    }
  },
  components: {TodoFooter, TodoList, TodoHeader}
}
</script>

<style scoped>
.todo-container{
  width: 600px;
  margin: 0 auto;
}
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
