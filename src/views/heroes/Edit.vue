<template>
  <div>
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="heroName">英雄名称</label>
        <input type="text" v-model="formData.name" class="form-control" id="heroName" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="heroSex">英雄性别</label>
        <!-- <input type="text" class="form-control" id="heroSex" placeholder="英雄性别"> -->
        <select v-model="formData.gender" class="form-control sel">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <button type="submit" @click.prevent="handleEdit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formData: {
        name: '',
        gender: '男'
      }
    }
  },
  created () {
    // console.log(this)
    // 获取url上的英雄 id 发送请求获取英雄数据
    const id = this.$route.params.id
    this.loadHeroById(id)
  },

  methods: {
    // 根据id加载英雄数据
    loadHeroById (id) {
      axios
        .get(`http://localhost:3000/heroes/${id}`)
        .then(res => {
          const hero = res.data
          this.formData = hero
          console.log(this.formData)
        })
    },
    handleEdit () {
      axios
        .put(`http://localhost:3000/heroes/${this.formData.id}`, this.formData)
        .then(res => {
          if (res.status === 200) {
            // 修改成功
            this.$router.push('/')
          } else {
            // 修改失败
            alert('修改失败')
          }
        })
    }
  }
}
</script>

<style>
.sel {
  width: 30%;
}
</style>