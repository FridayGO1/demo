/*
*使用localStorage存储数据工具模块
* 1、函数
* 2、对象
* 需要向外暴露1个功能还是几个功能
*/

const  TODOS_KEY = 'todos_key'

export default {
  saveTodos(todos) {
    window.localStorage.setItem('todos_key', JSON.stringify(todos))
  },
  readTodos() {

    return JSON.parse(window.localStorage.getItem('todos_key') || '[]')
  }
}
