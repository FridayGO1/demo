<template>
    <div>
      <ul>
        <li v-for="(message, index) in messages" :key="message.id">
          <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        </li>
      </ul>
      <router-view :msg="abc"></router-view>
    </div>
</template>

<script>
    export default {
        name: "Message",
      data () {
          return {
            messages: []
          }
      },
      mounted () {
          // 模拟ajax请求从后台获取数据
        setTimeout(() => {
          const messages = [

          ]
          this.messages = messages
        },1000)
      },

    }
</script>

<style scoped>

</style>
