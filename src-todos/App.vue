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
      // 从localStorage读取todos
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
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
  watch: {
    todos: {
      deep: true, // 深度监视
      handler: function (value) {
        // 将todos最新的值的json数据，保存到localStorage
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
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
