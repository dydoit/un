<template>
  <el-dialog
    title="协议说明书"
    :visible.sync="agreementDialog"
    :close-on-click-modal="false"
    width="60%">
    <span>以上操作指令有可能对服务器设备造成影响,其后果责任由操作者承担。请慎重操作！</span>
    <span slot="footer" class="dialog-footer">
    <el-button size="small" @click="agreementDialog = false">取 消</el-button>
    <el-button size="small" type="primary" @click="agreementDialog = false">确 定</el-button>
  </span>
  </el-dialog>
</template>
<script>
  export default{
    name:'agreement',
    data(){
      return{
        agreementDialog: false
      }
    },
    methods:{

    },
    mounted(){

    }
  }
</script>
