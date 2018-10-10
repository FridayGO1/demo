<template>
    <div>
      <h2>Home</h2>
      <div>
        <ul class="nav nav-tabs">
          <!--<li><a href="#/home/news" class="router-link-exact-active activeClass">News</a></li>
          <li><a href="#/home/message" class="">Message</a></li>-->
          <li>
            <router-link to="/home/news">News</router-link>
            <router-link to="/home/message">Message</router-link>
          </li>
        </ul>
      </div>
      <div>
        <!--<ul>
          <li>news01</li>
          <li>news02</li>
          <li>news03</li>
        </ul>-->
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
