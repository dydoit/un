<template>
  <div class="instruct-list">
    <el-form :inline="true" :model="queryData" size="small" label-width="6em">
      <el-form-item label="厂家:" >
          <el-select v-model="queryData.selectedVender">
            <el-option v-for="item of venderList" :key="item.vendorId" :label="item.name" :value="item.venderCode"></el-option>
          </el-select>

      </el-form-item>
      <el-form-item label="设备类型:">
          <el-select v-model="queryData.selectedDevice">
            <el-option v-for="item of deviceTypes" :key="item.deviceId" :label="item.name" :value="item.deviceCode"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="软件版本:">
          <el-select v-model="queryData.selectedSoftVersion">
            <el-option v-for="item of venderList" :key="item.vendorId" :label="item.name" :value="item.venderCode"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="补丁版本:">
          <el-select v-model="queryData.selectedVender">
            <el-option v-for="item of venderList" :key="item.vendorId" :label="item.name" :value="item.venderCode"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="设备名称:">
        <el-input v-model="queryData.devicename" placeholder="请输入设备名称"></el-input>
      </el-form-item>
      <el-button class="btn-search" icon="el-icon-search" size="small" type="primary">搜索</el-button>
    </el-form>
    <p>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="$router.push('/my-instruction/instruct-manage')">新增指令</el-button>
    </p>
    <div class="content">
      <div class="item">
        <dl>
          <dt>MOD H248PARA-1</dt>
          <dd>该命令为配置类命令，用于在配置数据库中修改指定虚拟MRFP H.248协议的相关参数。</dd>
          <dd>
            <span>设备类型：</span>
            <span>厂家：</span>
            <span>软件版本：</span>
            <span>补丁版本：</span>
          </dd>
        </dl>
        <div class="btn-group">
          <el-button size="small" type="text" @click="edit">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
        </div>
      </div>
      <div class="item">
        <dl>
          <dt>MOD H248PARA-1</dt>
          <dd>该命令为配置类命令，用于在配置数据库中修改指定虚拟MRFP H.248协议的相关参数。</dd>
          <dd>
            <span>设备类型：</span>
            <span>厂家：</span>
            <span>软件版本：</span>
            <span>补丁版本：</span>
          </dd>
        </dl>
        <div class="btn-group">
          <el-button size="small" type="text">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name:'instructList',
    data() {
      return {
        venderList: [{name: '华为', venderId: '001', venderCode: 'abc'}],
        deviceTypes: [{name: '移动互联网', deviceCode: '', deviceId: 'xxx'}],
        queryData: {
          selectedVender: '',       // 厂家
          selectedDevice: '',      // 设备类型
          selectedSoftVersion: '', // 软件版本
          selectedPatchVersion: '', // 补丁版本
          devicename: '' // 设备名称
        },
        tableData:[{

        }]
      }
    },
    methods: {
      edit() {
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .instruction
    width 1200px
    padding-top 20px
    margin 0 auto
  .el-form--inline .el-form-item
    margin-right 40px
  .el-form-item >>> .el-form-item__content
    width 199px
  .btn-search
    margin-left 15px
  .item
    display flex
    align-items center
    height 90px
    padding 0 10px
    border-bottom 1px solid #ddd
    cursor pointer
    &:hover
      background #f5f5f5
    dl
      flex 1
      line-height 1.8
      dt
        font-size 14px
        color #000
      dd
        font-size 12px
        color #666
    .btn-group
      width 200px
</style>
