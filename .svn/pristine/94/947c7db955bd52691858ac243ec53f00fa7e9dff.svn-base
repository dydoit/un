<template>
  <div class="boxfrom">
    <el-form ref="dataForm" :model="dataForm" :rules="rules" label-width="130px" style="width:600px">
      <el-form-item label="字典值：" prop="dictValue">
        <el-input placeholder="请填写" v-model="dataForm.dictValue" ></el-input>
      </el-form-item>
      <el-form-item label="字典字段值：" prop="dictName">
        <el-select  v-model="dataForm.dictName" style="width:185px">
          <el-option v-for="(item,index) in DictsAllType" :key="index" :label="item.dictDescribe" :value="item.dictName"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="字典中文名：" prop="dictNameZh">
        <el-input placeholder="请填写" v-model="dataForm.dictNameZh" ></el-input>
      </el-form-item>
      <el-form-item label="字典英文简写：" prop="dictNameEn">
        <el-input placeholder="请填写" v-model="dataForm.dictNameEn" ></el-input>
      </el-form-item>
      <el-form-item label="字典描述：" prop="dictDescribe">
        <el-input type="textarea" :rows="2" placeholder="请输入" v-model="dataForm.dictDescribe" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Subimt" v-if="showbtn">确定</el-button>
        <el-button @click="goback">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'netList',
  data () {
    return {
      DictsAllType:null,
      dataForm:{
        dictValue:'',//字典值
        dictName:'',//	字典字段值
        dictNameZh:'',//	字典中文名
        dictNameEn:'',//	字典英文简写
        dictDescribe:'',//	字典描述
        dictParent:'',//	父级字典项
      },
      rules:{
        dictValue:[
          { required: true, message: '请输入字典值', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50个字符', trigger: 'blur'}
        ],
        dictName:[
          { required: true, message: '请选择字典字段值', trigger: 'blur' },
        ],
        dictNameZh:[
          { required: true, message: '请输入字典中文名', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50个字符', trigger: 'blur'}
        ],
        dictNameEn:[
          { required: true, message: '请输入字典英文简写', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50个字符', trigger: 'blur'}
        ],
        dictDescribe:[
          { required: true, message: '请输入字典描述', trigger: 'blur' },
          { min: 1, max: 300, message: '长度在 1 到 300个字符', trigger: 'blur'}
        ],
      },
      showbtn:true,
    }
  },
  methods:{
    //获取当前所有字典项类型
    async getDictsAllType(){
      let res = await axios.post('/OpsDev/dicts/getDictsAllType')
      this.DictsAllType = res
    },
    //返回
    goback(){
      this.$router.go(-1)
    },
    //提交
    async Subimt(){
      this.$refs['dataForm'].validate((valid) => {
        if(valid){
          const paramData = qs.stringify(this.dataForm)
          if(this.pageType==1){
            //新增
            axios.post('/OpsDev/dicts/addDicts',paramData)
              .then(res =>{
                if(res.status=='success'){
                  this.getDictsTypeFor();//更新本地localStorage的字典项
                  this.$message.success('新增成功！')
                  this.$router.push('dictList')

                }else if(res.status=='fail'){
                  this.$message.error(res.msg)
                }
              })
          }else if(this.pageType==2){
            //修改
            axios.post('/OpsDev/dicts/updateDicts',paramData)
              .then(res =>{
                if(res.status=='success'){
                  this.getDictsTypeFor();//更新本地localStorage的字典项
                  this.$message.success('修改成功！')
                  this.$router.push('dictList')
                }else if(res.status=='fail'){
                  this.$message.error(res.msg)
                }
              })
          }
        }
      })
    },
    //判断是否新增页面、修改页面、查看详情页面
    getParam(){
      this.pageType = this.$route.query.pageType;
      if(this.pageType==2){
        this.getLocalStorage()
      }else if(this.pageType==3){
        this.getLocalStorage()
        this.showbtn = false
      }
    },
    async getLocalStorage(){
      const dictInfo = await axios.post('/OpsDev/dicts/getDictsById',
        qs.stringify({
          id:this.$route.query.id,
        }))
      if(dictInfo){
        this.dataForm.id = dictInfo.id;
        this.dataForm.dictValue = dictInfo.dictValue;//字典值
        this.dataForm.dictName = dictInfo.dictName;//	字典字段值
        this.dataForm.dictNameZh = dictInfo.dictNameZh;//	字典中文名
        this.dataForm.dictNameEn = dictInfo.dictNameEn;//	字典英文简写
        this.dataForm.dictDescribe = dictInfo.dictDescribe;//	字典描述
        this.dataForm.dictParent = dictInfo.dictParent;//	父级字典项
      }
    },
    //获取字典项数据，方便系统的下拉框数据调用
    getDictsTypeFor(){
      this.getDictsByType('1');//所属专业下拉数据
      this.getDictsByType('2');//设备厂商下拉数据
      this.getDictsByType('3');//设备类型下拉数据
    },
    //获取查询条件字典项
    async getDictsByType(value){
      const paramData = qs.stringify({
        dictValue: value,
        level: '2',
      })
      let res = await axios.post('/OpsDev/dicts/getDictsByType', paramData)
      if (value == '1') {
        window.localStorage.setItem('professionDict',JSON.stringify(res))
      } else if (value == '2') {
        window.localStorage.setItem('companyDict',JSON.stringify(res))
      } else if (value == '3') {
        window.localStorage.setItem('equipmentTypeDict',JSON.stringify(res))
      }
    },
  },
  mounted(){
    this.getDictsAllType();
    this.getParam();
  },
  watch:{
    'dataForm.dictName'(val){
      for(let i=0; i<this.DictsAllType.length;i++){
        if(val==this.DictsAllType[i].dictName){
          this.dataForm.dictParent = this.DictsAllType[i].dictParent
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .boxfrom{
    padding: 30px 10px;
    background: #fff;
    border-radius: 5px;
  }
</style>
