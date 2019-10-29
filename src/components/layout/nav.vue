<template>
  <div class="head">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/network">网元管理</el-menu-item>
      <el-submenu index="/my">
        <template slot="title">我的</template>
        <el-menu-item index="/my-instruction">
         我的指令
        </el-menu-item>
        <el-menu-item index="/my-instruction-temp">
         我的指令模板
        </el-menu-item>
        <el-menu-item index="/my-task-temp">
         我的任务模板
        </el-menu-item>
        <el-menu-item index="/my-task">
         我的任务
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/setup">
        <template slot="title">系统设置</template>
        <el-menu-item index="/setup/role-set">选项1</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="user-wrapper">
      <p>
        <span>所在公司：广东联通</span>
        <span>所属专业：无线网</span>
      </p>
      <div>
        <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
        <i>小龙女</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        activeIndex: '/',
      };
    },
    created() {
      this.activeIndex = this.$route.path
    },
   watch: {
     "$route.path"(newV) {
       this.activeIndex = newV
     }
   },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push(key)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .head
    display flex
    justify-content space-between
    background-color rgb(84, 92, 100)
  .user-wrapper
    display flex
    align-items center
    color #fff
    p
      margin-right 30px
      span
        margin-left 16px
    .el-avatar
      vertical-align middle
      margin-right 4px
    div
      padding-right 10px
</style>
