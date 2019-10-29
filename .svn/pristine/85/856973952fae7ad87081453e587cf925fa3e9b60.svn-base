<template>
  <div class="wrap">
    <el-button
      type="primary"
      icon="el-icon-plus"
      size="small"
      @click="addStep"
    >
      新增任务步骤
    </el-button>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
      type="index"
      label="序号"
      width="50">
     </el-table-column>
      <el-table-column
        label="操作类型"
        width="130"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.stepName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="指令/模板选择"
        width="160"
      >
        <template slot-scope="scope">
         <p>{{scope.row.modelName}}</p>
        </template>
      </el-table-column>
       <el-table-column
        label="解释"
        width="200"
      >
        <template slot-scope="scope">
         <p>{{scope.row.stepDetail}}</p>
        </template>
      </el-table-column>
       <el-table-column
        label="绑定网元(数量)"
        width="120"
      >
        <template slot-scope="scope">
         <p>
           <span @click.stop="selectNet" class="net-num">共{{scope.row.networkNum}}个</span>
         </p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="top(scope.$index, scope.row)">置顶</el-button>
          <el-button size="mini" @click="moveUp(scope.$index, scope.row)">上移</el-button>
          <el-button size="mini" @click="moveDown(scope.$index, scope.row)">下移</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div class="btn-wrapper">
      <el-button type="primary">保存</el-button>
      <el-button>取消</el-button>
    </div> -->
    <network-list ref="netModel"></network-list>
    <task-step ref="stepModel"></task-step>
  </div>
</template>

<script>
import NetworkList from './components/network-list.vue'
import TaskStep from './components/task-step.vue'
export default {
  data() {
    return {
      tableData: [
        {
          stepName: "指令",
          modelName: "指令名称1",
          stepDetail: '解释一下',
          networkNum: 0
        },
        {
          stepName: "指令解析模板",
          modelName: "指令解析模板名称1",
          stepDetail: '解释一下',
          networkNum: 0
        },
        {
          stepName: "任务模板",
          modelName: "任务模板名称1",
          stepDetail: '解释一下',
          networkNum: 0
        }
      ]
    };
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row);
    },
    top(i, item) {
      this.tableData.splice(0,1,item)
    },
    moveUp(i, item) {
      if(i==0) {
        return
      }
      this.tableData.splice(i-1,2, item, this.tableData[i-1])
    },
    moveDown(i, item) {
      if(i==this.tableData.length-1) {
        return
      }
      this.tableData.splice(i, 2, this.tableData[i+1], item)
    },
    selectNet() {
      this.$refs.netModel.show()
    },
    addStep() {
      this.$refs.stepModel.show()
    }
  },
  components: {
    NetworkList,
    TaskStep
  },
};
</script>

<style lang="stylus" scoped>
.wrap {
  width: 980px;
  margin-left: 40px;
  padding-bottom: 30px;
  padding-top: 20px;
}
.net-num
  cursor pointer
.btn-wrapper
  margin 20px 0
  text-align center
  .el-button
    margin-right 20px
</style>
