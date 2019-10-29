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

    </el-form>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: true,
        venderList: [{name: '华为', venderId: '001', venderCode: 'abc'}],
        deviceTypes: [{ name: "移动互联网", deviceCode: "", deviceId: "xxx" }],
        versions: [{label: '版本1', id: 'version1', code: '001'}],
        form: {
          selectedVender:'',
          selectedDevice: '',
          selectedVersion: ''
        }
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
</style>
