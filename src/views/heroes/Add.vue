<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
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
      <button type="submit" @click.prevent="handleAdd" class="btn btn-success">Submit</button>
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
  methods: {
    handleAdd () {
      axios
        .post('http://localhost:3000/heroes', this.formData)
        .then(res => {
          if (res.status === 201) {
            // 添加成功
            this.$router.push('/')
          } else {
            // 添加失败
            alert('添加失败')
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