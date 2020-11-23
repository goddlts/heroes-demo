<template>
  <div id="app">
    <!-- Header -->
    <Header></Header>
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <Sidebar></Sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 主内容区域 -->
          <Heroes></Heroes>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入 Header 组件
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Heroes from './components/Heroes'
export default {
  // 注册局部组件
  components: {
    Header,
    Sidebar,
    Heroes
  }
}
</script>

<style>

</style>
