<template>
  <div>
    <div class="toolbar">
      <el-form :inline="true" :model="SearchFrom" ref="SearchFrom" label-width="100px" size="small">
        <el-form-item label="设备名称">
          <el-input v-model="SearchFrom.equipmentName"></el-input>
        </el-form-item>
        <el-form-item label="所属分公司">
          <el-select v-model="SearchFrom.equipmentCity">
            <el-option label="全部" value></el-option>
            <el-option v-for="(item,index) in equipmentCityDict"
                :key="index"
                :label="item.dictNameZh"
                :value="item.dictValue"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属专业">
          <el-select v-model="SearchFrom.profession">
            <el-option label="全部" value></el-option>
            <el-option v-for="(item,index) in professionDict"
                :key="index"
                :label="item.dictNameZh"
                :value="item.dictValue"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设备类型">
          <el-select v-model="SearchFrom.equipmentType">
            <el-option label="全部" value></el-option>
            <el-option v-for="(item,index) in equipmentTypeDict"
                :key="index"
                :label="item.dictNameZh"
                :value="item.dictValue"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="IP地址">
          <el-input v-model="SearchFrom.ip"></el-input>
        </el-form-item>
        <el-button icon="el-icon-search" size="small" type="primary" @click="searchFun">查询</el-button>
      </el-form>
    </div>
    <div class="btn-wapper">
      <div class="btn-left">
        <el-button size="small" type="primary" plain icon="el-icon-circle-plus" @click="handleAdd">新增</el-button>
        <el-button size="small" type="primary" plain icon="el-icon-upload" @click="showUploadbox">导入</el-button>
        <el-button size="small" type="primary" plain icon="el-icon-download">模板下载</el-button>
      </div>
    </div>
    <div class="table-wrapper">
      <el-table v-loading="loading" :data="allData" border size="small">
        <el-table-column align="center" prop="dictValue" label="所属分公司"></el-table-column>
        <el-table-column align="center" prop="dictName" label="所属专业"></el-table-column>
        <el-table-column align="center" prop="dicttext" label="设备类型"></el-table-column>
        <el-table-column align="center" prop="dicttext" label="设备名称"></el-table-column>
        <el-table-column align="center" prop="dicttext" label="IP地址"></el-table-column>
        <el-table-column align="center" prop="dicttext" label="版本号"></el-table-column>
        <el-table-column align="center" prop="dicttext" label="网元状态"></el-table-column>
        <el-table-column align="center" prop="dicttext" label="指令驱动状态"></el-table-column>
        <el-table-column align="center" label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleDetail(scope.row)">详情</el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleModify(scope.row)">修改</el-button>
            <el-button
              size="mini"
              type="text"
              class="danger"
              @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <uploadbox ref="upload"></uploadbox>
  </div>
</template>
<script>
import uploadbox from './components/upload'
export default {
  data() {
    return {
        loading:false,
        SearchFrom: {
            equipmentName: '',
            equipmentCity: '',
            profession: '',
            equipmentType:'',
            ip:''
        },
        allData:[
            {
            dictValue:'ddddd',
            dictName:'ddddd',
            dicttext:'ddddd'
            }
        ],
        equipmentCityDict:[],
        professionDict:[],
        equipmentTypeDict:[]
    };
  },
  components:{
    uploadbox,
  },
  methods: {
    searchFun() {},
    //获取列表数据
    getData(){
      this.$http.post('/OpsDev/dicts/getVersionByDict').then(res =>{

      })
      
    },
    //详情
    handleDetail(item){
      this.$router.push({path:'/network/networkDetail',query:{id:item.id}})
    },
    //新增
    handleAdd(){
      this.$router.push('/network/networkAdd')
    },
    //删除
    handleDelete(){},
    showUploadbox(){
      this.$refs.upload.uploadbox = true
    },
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="stylus" scoped>
.btn-wapper
  margin-bottom 10px
  display flex
  justify-content space-between
  .btn-left
    display flex
    justify-content flex-start
</style>
