<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hero, index) in heroes" :key="hero.id">
            <td>{{ index + 1 }}</td>
            <td>{{ hero.name }}</td>
            <td>{{ hero.gender }}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入 axios 模块
import axios from 'axios'
export default {
  data () {
    return {
      heroes: []
    }
  },
  // vue 创建好以后，就去发送ajax请求
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      axios
        .get('http://localhost:3000/heroes')
        .then(res => {
          this.heroes = res.data
        })
    }
  }
}
</script>

<style>

</style>
