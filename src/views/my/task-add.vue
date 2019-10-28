<template>
  <div class="wrap">
    <el-form size="small" :model="form">
      <el-form-item label="任务名称：" required="">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="描述：">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="任务类型：">
        <el-radio>巡检任务</el-radio>
      </el-form-item>
      <div class="my-item-wrapper">
         <el-form-item label="开始时间：" prop="startTime">
          <el-date-picker v-model="form.startTime" value-format="timestamp" type="date" placeholder="开始日期" :picker-options="pickerOptionsStart">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间：" prop="endTime">
          <el-date-picker v-model="form.endTime" type="date" value-format="timestamp" placeholder="结束日期" :picker-options="pickerOptionsEnd">
          </el-date-picker>
        </el-form-item>
      </div>
      <el-form-item>
        <cron v-model="form.cronExpression"></cron>
      </el-form-item>
      <el-form-item label="表达式：">
        <el-input v-model="form.cronExpression" auto-complete="off">
        </el-input>
      </el-form-item>
      <p>任务消息通知：(多个收件人用逗号隔开)</p>
      <el-form-item>
        <div class="notice-way">
          <el-checkbox label="电子邮箱" v-model="isEmail"></el-checkbox>
          <el-input placeholder="请输入邮箱地址"></el-input>
        </div>
        <div class="notice-way">
          <el-checkbox label="手机短信" v-model="isPhone"></el-checkbox>
          <el-input  placeholder="请输入手机号码"></el-input>
        </div>
        <div class="notice-way">
          <el-checkbox label="微信" v-model="isWx"></el-checkbox>
          <el-input></el-input>
        </div>
      </el-form-item>
      <el-button type="primary" @click="sub">下一步，新增任务步骤</el-button>
    </el-form>
  </div>
</template>

<script>
  import Cron from  '@/components/cron/cron.vue'
  export default {
    data() {
      return {
        form: {
          startTime:'',
          endTime: '',
          cronExpression: "0 0 0 * * ? *",
          noticeWay: []
        },
        email:'',
        isEmail: false,
        isPhone: false,
        isWx: false,
        pickerOptionsStart: {},
        pickerOptionsEnd: {
          disabledDate:(time) => {
            return time< this.form.startTime
          }
        }
      }
    },
    components: {
      Cron
    },
    methods: {
      sub() {
        console.log('sub')
        let way = []
        if(this.isEmail) {
          way.push('mail')
        }
        if(this.isPhone) {
          way.push('phone')
        }
        if(this.isWx) {
          way.push('wx')
        }
        this.form.noticeWay = way
        console.log(this.form.noticeWay)
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
.el-form-item
  display: flex;
  >>> .el-form-item__label
    width 8em
    text-align right
  >>> .el-form-item__content
    flex 1
.my-item-wrapper
  display flex
.notice-way
  display flex
  margin-top 10px
  >>> .el-checkbox
    display inline-block
    width 5em
  >>> .el-input
    width auto
    margin-left 20px
</style>
