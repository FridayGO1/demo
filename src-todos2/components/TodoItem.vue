<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deteleItem">删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: 'TodoItem',
  props: {
    todo: Object,
    index: Number
  },
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = 'gray'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deteleItem () {
      const {todo, index, deteleTodo} = this
      if (window.confirm(`确认删除${todo.title}吗？`)) {
        // deteleTodo(index)
        // 发布消息
        PubSub.publish('deleteTodo', index)
      }
    }
  }
}

</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label{
    float: left;
    cursor: pointer;
  }
  li label li input{
    vertical-align: mathematical;
    text-align: right;
    position: relative;
    top:-1px;
  }
  li button{
    float: right;
    /*display: none;*/
    margin-top: 3px;
  }
  li:before{
    content: initial;
  }
  li:last-child{
    border-bottom: none;
  }
</style>
