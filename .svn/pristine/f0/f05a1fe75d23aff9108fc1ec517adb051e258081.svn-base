<template>
  <div>
    <div class="toolbar">
      <el-form :inline="true" :model="SearchFrom" ref="SearchFrom" label-width="100px" size="small">
        <el-form-item label="字典编码">
          <el-input placeholder="请填写字典编码" v-model="SearchFrom.dictValue"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input placeholder="请填写名称" v-model="SearchFrom.dictName"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="SearchFrom.status">
            <el-option label="全部" value></el-option>
            <el-option label="状态1" value="1"></el-option>
            <el-option label="状态2" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-button icon="el-icon-search" size="small" type="primary" @click="searchFun">查询</el-button>
      </el-form>
    </div>
    <div class="btn-wapper">
      <el-button icon="el-icon-circle-plus" size="small" type="primary">新增</el-button>
    </div>
    <div class="table-wrapper">
      <el-table v-loading="loading" :data="allData" border size="small">
        <el-table-column align="center" prop="dictValue" label="字典编码"></el-table-column>
        <el-table-column align="center" prop="dictName" label="名称"></el-table-column>
        <el-table-column align="center" prop="dicttext" label="说明"></el-table-column>
        <el-table-column align="center" label="操作" width="150">
          <template slot-scope="scope">
            <i class="el-icon-tickets"  
            @click="info(scope.row)"
              title="详情"></i>
            <i class="el-icon-edit"
              @click="edit(scope.row)"
              title="修改" ></i>
            <i class="el-icon-delete"
              @click="del(scope.row)"
              title="删除"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        loading:false,
        SearchFrom: {
            dictValue: "",
            dictName: "",
            status: ""
        },
        allData:[
            {
            dictValue:'ddddd',
            dictName:'ddddd',
            dicttext:'ddddd'
            } 
        ]
    };
  },
  methods: {
    searchFun() {},
    //add
    edit(item){
      this.$router.push({path:'/dictEdit',query:{id:''}})
    },
    del(){},
    info(){},
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.toolbar
  padding 20px
.btn-wapper
  padding 0 20px
  margin-bottom 10px
  display flex
  justify-content space-between
.table-wrapper 
  padding 0 20px
</style>