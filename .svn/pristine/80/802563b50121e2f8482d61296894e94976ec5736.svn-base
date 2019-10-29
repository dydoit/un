<template>
  <el-dialog :visible.sync="dialogFormVisible" title="新增步骤">
    <el-form :model="form" size="mini">
      <div class="my-item-wrap">
        <el-form-item label="所属厂家" required>
          <el-select v-model="form.selectedVender">
            <el-option v-for="item of venderList" :key="item.vendorId" :label="item.name" :value="item.venderCode"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="设备类型："
          required
        >
          <el-select v-model="form.selectedDevice">
            <el-option
              v-for="item of deviceTypes"
              :key="item.deviceId"
              :label="item.name"
              :value="item.deviceCode"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="my-item-wrap">
        <el-form-item label="软件版本" required>
          <el-select v-model="form.selectedVersion">
            <el-option v-for="item of versions"
            :key="item.id"
            :label="item.label"
            :value="item.code"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="操作类型" required>
          <el-select v-model="form.selectedVersion">
            <el-option v-for="item of versions"
            :key="item.id"
            :label="item.label"
            :value="item.code"
            >
            </el-option>
          </el-select>
        </el-form-item>

      </div>
      <el-form-item label="选择模板" required class="model-wrap">
        <el-select v-model="form.selectedModel">
          <el-option v-for="item of models"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <div>
        <p>参数配置：</p>
         <ul class="param-list">
            <li v-for="(item,index) of parmas" :key="index">
              <label :class="[item.isRequired!=='0'?'required':'']">{{item.paramName}}</label>
              <span>=</span>
              <el-input size="small" v-model="item.paramVal"></el-input>
            </li>
          </ul>
      </div>
    </el-form>
    <div class="btn-wrapper">
      <el-button type="primary" size="medium" @click="sure">保存</el-button>
      <el-button size="medium" @click="cancel">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        venderList: [{name: '华为', venderId: '001', venderCode: 'abc'}],
        deviceTypes: [{ name: "移动互联网", deviceCode: "", deviceId: "xxx" }],
        versions: [{label: '版本1', id: 'version1', code: '001'}],
        models: [{label: '指令模板1', value: 'zlm1'}],
        parmas:[
          {paramName: 'name', paramVal: 'hanmeimei', isRequired: '1'},
          {paramName: 'name', paramVal: 'hanmeimei', isRequired: '1'},
          {paramName: 'name', paramVal: 'hanmeimei', isRequired: '1'}
        ],
        form: {
          selectedVender:'',
          selectedDevice: '',
          selectedVersion: '',
          selectedModel: ''
        }
      }
    },
    methods: {
      show() {
        this.dialogFormVisible = true
      },
      hide() {
        this.dialogFormVisible = false
      },
      sure() {
        this.hide()
      },
      cancel() {
        this.hide()
      }
    },
  }
</script>

<style lang="stylus" scoped>
.my-item-wrap
  display flex
  justify-content: space-between;
  .el-form-item
    display: flex;
.model-wrap
  display flex
  >>> .el-form-item__content
    flex 1
    .el-select
      width 100%
.btn-wrapper
  text-align center
  .el-button
    margin-right 10px
.param-list
  display flex
  flex-wrap wrap
  margin-top 12px
  margin-bottom 12px
  margin-left -30px
  li
    display flex
    align-items center
    width 28%
    margin-left 30px
    margin-bottom 12px
    label
      width 100px
      text-align right
      &.required:before
        content : '*'
        color: #F56C6C
        margin-right: 4px
    span
      margin 0 6px
</style>
