<template>
  <div class="col-md-4">
    <from class="form-horizontal">
      <div class="form-group">
        <label for="">用户名：</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name"/>
      </div>
      <div class="form-group">
        <label for="">评论内容：</label>
        <textarea rows="6" class="form-control" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </from>
  </div>
</template>

<script>
export default {
  props: {
    addComment: { // 指定了属性名、属性值、必要性
      type: Function,
      require: true
    }
  },
  data () {
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    add () {
      // 1、检查输入的合法性
      const name = this.name.trim()
      const content = this.content.trim()
      if (!name || !content) {
        alert('姓名或内容不能为空')
        return
      }
      // 2.根据输入的数据，封装成一个comment对象
      const comment = {
        name,
        content
      }
      // 3、添加到comments中
      this.addComment(comment)
      // 4、清除输入
      this.name = ''
      this.content = ''
    }
  }
}
</script>

<style scoped>

</style>
