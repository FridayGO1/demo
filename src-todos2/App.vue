<template>
    <div class="todo-container">
      <div class="todo-wrap">
          <!--<TodoHeader @addTodo="addTodo"/>--><!--绑定监听-->
          <TodoHeader ref="header"/>
          <TodoList :todos="todos"/>
          <TodoFooter :todos="todos" :deteleCompleteTodos="deteleCompleteTodos" :selectAllTodos="selectAllTodos"/>
      </div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import storageUtil from './storageUtil.js'
export default {
  data () {
    return {
      // 从localStorage读取todos
      todos: storageUtil.readTodos()
    }
  },
  mounted () { // 执行异步代码
    // 给<TodoHeader/>绑定addTodo事件监听
    this.$ref.header.$on('addTodo', this.addTodo)

    // 订阅消息
    PubSub.subscribe('delete', (msg, index) => {
      this.deleteTodo(index)
    })
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
        //window.localStorage.setItem('todos_key', JSON.stringify(value))
        storageUtil.saveTodos(value)
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
