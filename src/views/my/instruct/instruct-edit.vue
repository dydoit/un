<template>
    <div>
        <div class="instruct-box">
            <div class="titleTop">
                <h3>编辑指令解析模板</h3>
                <div class="titleTop-info">
                <span>添加人：陈文浩</span>
                <span>所属分公司：广东省分公司</span>
                <span>所属专业：移动交换网</span>
                </div>
            </div>
            <div class="instruct-content">
                <div class="selector">
                </div>
                <div class="form-row1">
                    <el-form size="small" :label-position="labelPosition" label-width="80px" :model="dataform">
                    <el-form-item label="模板名称:">
                        <el-input v-model="dataform.name" style="width:50%"></el-input>
                    </el-form-item>
                    <el-form-item label="功能说明:">
                        <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="dataform.remark" style="width:50%">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="版本号:">
                        <el-input v-model="dataform.version" style="width:300px"></el-input>
                        <span class="c999">（示例：V1.0）</span>
                    </el-form-item>
                    <el-form-item label="参数变量值:">    
                        <ul class="param-ul">
                            <li>
                                <label class="li-fl">VMRFPNM</label> = 
                                <span class="li-fr">
                                    <el-input style="width:50%"></el-input>
                                    <el-checkbox v-model="checked">设为常量</el-checkbox>
                                </span>
                            </li>
                            <li>
                                <label class="li-fl">VMRFPNM</label> = 
                                <span class="li-fr">
                                    <el-input style="width:50%"></el-input>
                                    <el-checkbox v-model="checked">设为常量</el-checkbox>
                                </span>
                            </li>
                            <li>
                                <label class="li-fl">VMRFPNM</label> = 
                                <span class="li-fr">
                                    <el-input style="width:50%"></el-input>
                                    <el-checkbox v-model="checked">设为常量</el-checkbox>
                                </span>
                            </li>
                            <li>
                                <label class="li-fl">VMRFPNM</label> = 
                                <span class="li-fr">
                                    <el-input style="width:50%"></el-input>
                                    <el-checkbox v-model="checked">设为常量</el-checkbox>
                                </span>
                            </li>
                            <li>
                                <label class="li-fl">VMRFPNM</label> = 
                                <span class="li-fr">
                                    <el-input style="width:50%"></el-input>
                                    <el-checkbox v-model="checked">设为常量</el-checkbox>
                                </span>
                            </li>
                        </ul>
                        <div class="template-view">
                            <span class="template-view-title">
                                指令预览：
                                <el-tooltip class="template-view-tips" effect="dark" content="针对华为设备指令规则：指令与参数之间需用冒号“：”命令结束必须要分号“；”参数与输入的值之间有等号“=”。" placement="top-start">
                                <i class="el-icon-question"></i>
                                </el-tooltip>
                            </span>
                            <span>H248PARA: VMRFPNM="VMRFP_IMS", CT=ASN1, TT=SCTP;</span> 
                        </div>
                    </el-form-item>
                    </el-form>
                    <p class="read">
                    <el-checkbox v-model="isRead" ></el-checkbox>
                    同意并详细阅读
                    <em href="#" >&lt;&lt;责任说明&gt;&gt;</em>
                    </p>
                    <div class="btn-wrapper">
                    <el-button type="primary" size="medium" >保存</el-button>
                    <el-button type="success" size="medium"  class="btn-green" @click="toNext">下一步，指令解析</el-button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            labelPosition:'top',
            dataform:{
                name:'',
                remark:'',
                version:'',
            },
            checked: false,
            isRead:false,
        }
    },
    methods:{
        toNext(){
            this.$router.push('/instruct-parsing')
        }
    },
    mounted(){},
}
</script>
<style lang="stylus" scoped>
ul,li{
    padding 0
    list-style: none;
}
.c999{
    color #999
}
.instruct-box{
    padding 20px
    .titleTop{
        display flex
        justify-content flex-start
        align-items center
        margin-bottom 20px
        h3{
            font-size 18px
            font-weight 700
        }
        .titleTop-info{
            margin-left 200px
            span{
                padding 0 20px
            }
        }
    }
    .instruct-content{
        .form-row1{
            >>>.el-form-item{
                margin-bottom: 10px;
            }
            >>>.el-form--label-top .el-form-item__label{
                padding: 0px
            }
        }
        .param-ul{
            display flex
            flex-wrap wrap
        }
        .param-ul>li{
            width 33.3%
            margin-bottom 20px
            .li-fl{

            }
            .li-fr{
                >>>.el-checkbox{
                    margin-left 5px
                    .el-checkbox__label{
                        padding-left 2px
                    }
                }
            }
        }
        .template-view{
            display flex
            justify-content center
            align-items center
            background #f0f0f0
            padding 10px
            .template-view-title{
                position relative
                .template-view-tips{
                    position absolute
                    right 5px
                    top -3px
                }
            }
        }
        .read{
            margin 50px 0 15px
            text-align center
            >>>.el-checkbox{
                margin-right 0
                em{
                    color #409EFF
                }            
            }
            &:hover{
                text-decoration underline
                cursor pointer
            }            
        }          
        .btn-wrapper{
            text-align center
            button{
                margin-right 20px
                &.btn-green{
                    
                }
            }          
        }
        
    }
}
</style>