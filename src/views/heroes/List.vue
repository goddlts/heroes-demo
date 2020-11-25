<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <router-link class="btn btn-success" to="/heroes/add">Add</router-link>
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
              <router-link :to="'/heroes/edit/' + hero.id">edit</router-link>
              &nbsp;&nbsp;
              <a href="javascript:void(0)" @click.prevent="handleDelete(hero.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
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
      this.axios
        .get('heroes')
        .then(res => {
          this.heroes = res.data
        })
    },
    handleDelete (id) {
      // 先做提示
      if (window.confirm('确定要删除该数据？')) {
        this.axios
          .delete(`heroes/${id}`)
          .then(res => {
            if (res.status === 200) {
              // 删除成功
              // alert('删除成功')
              // 重新加载列表
              this.loadData()
            } else {
              // 删除失败
              alert('删除失败')
            }
          })
      }
    }
  }
}
</script>

<style>

</style>
