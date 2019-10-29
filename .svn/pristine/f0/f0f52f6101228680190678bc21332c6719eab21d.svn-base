<template>
  <div class="instruction">
    <el-form size="small">
      <div class="my-item-wrapper">
        <el-form-item
          label="设备厂家："
          required
        >
          <el-select v-model="instructData.selectedVender">
            <el-option
              v-for="item of venderList"
              :key="item.vendorId"
              :label="item.name"
              :value="item.venderCode"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="设备类型："
          required
        >
          <el-select v-model="instructData.selectedVender">
            <el-option
              v-for="item of deviceTypes"
              :key="item.deviceId"
              :label="item.name"
              :value="item.deviceCode"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item
        label="指令名称："
        required
      >
        <el-input placeholder="请输入指令名称，不包含参数"></el-input>
      </el-form-item>
      <el-form-item label="指令中文名称：">
        <el-input placeholder="请输入指令名称，不包含参数"></el-input>
      </el-form-item>
      <el-form-item
        label="指令类型："
        required
      >
        <div class="radio-group">
          <el-radio>查询类</el-radio>
          <el-radio>配置类</el-radio>
          <el-radio>操作类</el-radio>
          <el-radio>高危配置类</el-radio>
          <el-radio>高危操作类</el-radio>
        </div>
      </el-form-item>
      <el-form-item label="适用版本：">
        <el-checkbox>版本1</el-checkbox>
        <el-checkbox>版本2</el-checkbox>
        <el-checkbox>版本3</el-checkbox>
        <el-checkbox>版本4</el-checkbox>
      </el-form-item>
      <el-form-item label="指令说明：">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="instructData.textarea"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="参数填写：">
        <table>
          <thead>
            <tr>
              <td>参数</td>
              <td>参数中文名称(选填)</td>
              <td>是否必填</td>
              <td>参数描述</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody v-if="!params.length" class="no-param">
            <tr>
              <td colspan="5">暂无参数</td>
            </tr>

          </tbody>
          <tbody v-else>
            <tr v-for="(item,index) of params" :key="index">
              <td
              >
                <div
                v-text="item.paramName"
                contenteditable="true"
                @blur="handleName(item, $event)">

                </div>
              </td>
              <td>
                <div contenteditable="true" @blur="handleZh(item, $event)">
                  {{item.paramZhName}}
                </div>
              </td>
              <td class="is-required">
                <select v-model="item.isRequired">
                  <option value="1">是</option>
                  <option value="0">否</option>
                </select>
              </td>
              <td class="intro">
                <div contenteditable="true" v-html="item.paramIntro" @blur="handleIntro(item,$event)">
                </div>
              </td>
              <td class="handle">
                <el-button size="mini" @click="del_param(index)">删除</el-button>
              </td>
            </tr>
          </tbody>

        </table>
        <div class="add-wrapper">
          <el-button
            icon="el-icon-circle-plus-outline"
            type="text"
            @click="add_param"
          >添加参数</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <!-- <p>
          <el-button @click="isShow=true" type="text">展开指令预览 <i class="el-icon-caret-bottom"></i></el-button>
        </p> -->
        <div class="param-see">
          <p class="tip">
            指令预览：<span>MOD H248PARA: {{instructStr}}</span>
          </p>
          <ul class="param-list">
            <li v-for="(item,index) of filterParmas" :key="index">
              <label :class="[item.isRequired!=='0'?'required':'']">{{item.paramName}}</label>
              <span>=</span>
              <el-input v-model="item.paramVal"></el-input>
            </li>
          </ul>

        </div>

      </el-form-item>
      <el-form-item>
        <el-button type="primary">运行指令</el-button>
        <div class="version-tab">
           <el-radio-group v-model="version">
          <el-radio-button label="版本1"></el-radio-button>
          <el-radio-button label="版本2"></el-radio-button>
          <el-radio-button label="版本3"></el-radio-button>
          <el-radio-button label="版本4"></el-radio-button>
        </el-radio-group>
        </div>
        <div class="version-bao">

        </div>
        <p>
           <el-checkbox v-model="isRead">
            同意并详细阅读<a href="#" target="_blank">&lt;&lt;责任说明&gt;&gt;</a>
          </el-checkbox>
        </p>
      </el-form-item>
      <div>
        <el-button type="primary" :disabled="!isRead">保存</el-button>
        <el-button>取消</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      venderList: [{ name: "华为", venderId: "001", venderCode: "abc" }],
      deviceTypes: [{ name: "移动互联网", deviceCode: "", deviceId: "xxx" }],
      instructData: {
        selectedVender: "",
        textarea: ""
      },
      text: "ac<br>d",
      params: [],
      options: [{ label: "是", value: 1 }, { label: "否", value: 0 }],
      version:'版本1',
      isRead: false
    };
  },
  computed: {
    filterParmas() {
      let arr = []
      this.params.forEach(elem => {
        if(/^[A-Za-z]+$/.test(elem.paramName)) {
          arr.push(elem)
        }
      })
      return arr
    },
    instructStr() {
      let str = ''
      let ffarr = this.filterParmas.filter(elem => elem.paramVal)
      ffarr.forEach((ff,index) => {
        if(index< ffarr.length-1) {
          str+=`${ff.paramName}=${ff.paramVal},`
        }else {
          str+=`${ff.paramName}=${ff.paramVal};`
        }
      })
      return str
    }
  },
  methods: {
    handleName(item, e) {
      item.paramName = e.target.innerText.trim()
    },
    handleZh(item, e) {
      item.paramZhName = e.target.innerText.trim()
    },
    handleIntro(item, e) {
      item.paramIntro = e.target.innerHTML
    },
    add_param() {
      this.params.push({
        paramName: '',
        paramZhName: '',
        isRequired: 1,
        paramIntro: '',
        paramVal: ''
      })

    },
    del_param(i) {
      this.params.splice(i, 1)
    },
    huan() {
      this.params= [{paramName:'a', paramVal:'', paramIntro:'', paramZhName:'中文a'}]
    }
  }
};
</script>

<style lang="stylus" scoped>
.instruction {
  width: 900px;
  margin-left: 40px;
  padding-bottom 30px
  padding-top: 20px;
}

.my-item-wrapper {
  display: flex;
  justify-content: space-between;

  .el-form-item {
    display: flex;
  }
}

.el-form-item >>> .el-form-item__content {
  clear: both;
}

table
  width: 100%;
  text-align: center;
  border: 1px solid #ccc;
  border-collapse: collapse
  line-height 1.5
  thead
    background-color #ddd
    td
      padding 6px 0
  .no-param
    td
      padding 6px 0
  td
    padding 2px 4px
    border: 1px solid #ccc
    &.is-required
      width 9%
    &.intro
      width 35%
      text-align left
    &.handle
      width 2em
.add-wrapper {
  text-align: right;
}
.param-list
  display flex
  flex-wrap wrap
  margin-left -50px
  li
    display flex
    width 28%
    margin-left 50px
    margin-bottom 12px
    label
      width 100px
      text-align right
      &.required:before
        content : '*'
        color: #F56C6C
        margin-right: 4px
    span
      margin 0 10px
.tip
  padding 10px
  margin-top -10px
  margin-bottom 15px
  background-color #ddd
  span
    text-decoration underline
    font-weight bold
.version-tab
  margin-top 10px
.version-bao
  height 250px
  background #ccc
</style>
