<template>
  <div class="wrap">
    <el-form size="small">
      <div class="my-item-wrapper">
        <el-form-item label="设备厂家:">
          <el-select v-model="taskData.selectedVender">
            <el-option
              v-for="item of venderList"
              :key="item.vendorId"
              :label="item.name"
              :value="item.venderCode"
            ></el-option>
          </el-select>
        </el-form-item>
         <el-form-item
          label="设备类型:"
          required
        >
          <el-select v-model="taskData.selectedVender">
            <el-option
              v-for="item of deviceTypes"
              :key="item.deviceId"
              :label="item.name"
              :value="item.deviceCode"
            ></el-option>
          </el-select>
        </el-form-item>
         <el-form-item
          label="适用版本:"
          required
        >
          <el-select v-model="taskData.selectedVender">
            <el-option
              v-for="item of deviceTypes"
              :key="item.deviceId"
              :label="item.name"
              :value="item.deviceCode"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item label="版本号:">
        <el-input></el-input>
        <span class="last-intro">示例：(V1.1)</span>
      </el-form-item>
      <el-form-item label="模板名称:">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="功能说明:">
        <el-input  type="textarea"
        :rows="2"
        placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        venderList: [{ name: "华为", venderId: "001", venderCode: "abc" }],
        deviceTypes: [{ name: "移动互联网", deviceCode: "", deviceId: "xxx" }],
        taskData: {
          selectedVender: ''
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.wrap {
  width: 900px;
  margin-left: 40px;
  padding-bottom 30px
  padding-top: 20px;
}
.my-item-wrapper
  display flex
  justify-content space-between
.el-form-item
  display: flex;
  >>> .el-form-item__label
    width 6em
  >>> .el-form-item__content
    width 190px
.last-intro
  position absolute
  right -90px
  top 0
</style>
