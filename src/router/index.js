import Vue from 'vue'
import Router from 'vue-router'
import About from '../veiws/About'
import Home from '../veiws/Home'
import Message from '../veiws/Message'
import News from '../veiws/News'
import MessageDetail from '../veiws/MessageDetail'


Vue.use(Router)

export default new Router({
  // n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/message', // path最左侧的 / 永远代表根路由
          component: Message,
          children: [
            {
              path:'/home/message/detail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          path: 'news', // 简化写法
          component: News
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
