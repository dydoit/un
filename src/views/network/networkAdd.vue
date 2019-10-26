<template>
    <div>
        <div class="network-box">
            <div class="titleTop">
                <h3>添加新网元设备</h3>
                <div class="titleTop-info">
                <span>添加人：陈文浩</span>
                <span>所属分公司：广东省分公司</span>
                <span>所属专业：移动交换网</span>
                </div>
            </div>
            <div class="network-content">
                <el-form ref="dataForm" :model="dataForm" size="small" label-width="140px">
                    <div class="bxf">
                        <el-form-item class="bxf-li" label="设备厂家：" prop="name">
                            <el-select v-model="dataForm.name">
                            <el-option label="ddd" value=""></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="bxf-li" label="添加方式：" prop="name">
                            <el-select v-model="dataForm.name">
                            <el-option label="ddd" value=""></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="bxf-li" label="网管系统：" prop="name">
                            <el-select v-model="dataForm.name">
                            <el-option label="ddd" value=""></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="bxf-li" label="设备类型：" prop="name">
                            <el-select v-model="dataForm.name">
                            <el-option label="ddd" value=""></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="feedback-tips">如果平台提供的添加方式不满足您的需要，<span @click="showFeedback">点击链接反馈</span>。谢谢您的提示，您的满意是我们努力的动力！</div>
                    <div class="netadd-tips">*公用账号将被网络编程平台和已授权的维护人员使用。</div>
                    <div class="bxf">
                        <el-form-item class="bxf-li" label="登录方式：" prop="name">
                            <el-select v-model="dataForm.name">
                            <el-option label="ddd" value=""></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="bxf-li" label="设备IP地址：" prop="name">
                            <el-input v-model="dataForm.name"></el-input>
                        </el-form-item>
                        <el-form-item class="bxf-li" label="端口：" prop="name">
                            <el-input v-model="dataForm.name"></el-input>
                        </el-form-item>
                        <el-form-item class="bxf-li" label="公用账号：" prop="name">
                            <el-input v-model="dataForm.name"></el-input>
                        </el-form-item>
                        <el-form-item class="bxf-li" label="密码：" prop="name">
                            <el-input v-model="dataForm.name"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
                <div class="bxf-btn">
                    <span class="ces-tips">
                        <template v-if="cesStatus">网元连接成功！</template>
                        <template v-else>连接失败请检查输入信息是否有误。</template>
                    </span>
                    <span class="ces-btn">自动匹配网元</span>
                </div>
                <div class="netTable">
                    <div class="netTable-top">
                        <div class="tit">
                            共查询出<em class="green">80</em>个网元设备，其中有<em class="red">12</em>个网元设备存在重复，请核查清楚后选择导入数据：
                        </div>
                        <span class="btn">手动刷新</span>
                    </div>
                    <el-table v-loading="loading" :data="allData" stripe size="small">
                        <el-table-column type="selection" width="50"></el-table-column>
                        <el-table-column align="center" prop="name" label="设备类型"></el-table-column>
                        <el-table-column align="center" prop="name" label="设备名称"></el-table-column>
                        <el-table-column align="center" prop="name" label="IP地址"></el-table-column>
                        <el-table-column align="center" prop="name" label="版本号"></el-table-column>
                        <el-table-column align="center" prop="name" label="补丁"></el-table-column>
                        <el-table-column align="center" prop="name" label="网元状态"></el-table-column>
                        <el-table-column align="center" prop="name" label="指令驱动状态"></el-table-column>
                        <el-table-column align="center" prop="name" label="备注"></el-table-column>
                        <el-table-column align="center" label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            type="text">报错</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <div class="btn-wapper">
                        <el-button size="small" type="primary">全部导入</el-button> 
                        <el-button size="small" type="primary">导入新设备</el-button>     
                        <el-button size="small" @click="goback">取消</el-button>            
                    </div>
                </div>
            </div>
        </div>
        <feedback ref="feedback"></feedback>
    </div>
</template>
<script>
import feedback from './components/feedback'
export default {
    data() {
        return {
            loading:false,
            dataForm:{
                name:'',
            },
            allData:[],
            
        };
    },
    components:{
        feedback,
    },
    methods: {
        //返回
        goback(){
            this.$router.go(-1)
        },
        //显示反馈弹框
        showFeedback(){
            this.$refs.feedback.feedbackbox = true
        },
    },
    mounted() {}
};
</script>
<style lang="stylus" scoped>
.network-box{
    padding 0 20px
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
    .network-content{
        .bxf{
            display flex
            flex-wrap wrap
            .bxf-li{
                width 33.3%
                &>>>.el-input__inner{
                width 240px
                }
            }
            
        }
        .feedback-tips{
            margin-bottom 10px
            margin-left 140px
            color #868686
            font-size 12px
            span{
                color #409eff
                &:hover{
                    cursor pointer
                    text-decoration underline
                }
            }
        }
        .netadd-tips{
            font-size 12px
            margin 20px 0 10px 55px
        }
        .bxf-btn{
            display flex
            justify-content center
            align-items center
            flex-direction column
            margin 20px 0
            .ces-tips{
                line-height 24px
                margin-bottom 10px
            }
            .ces-btn{
                padding: 8px 140px;
                border: 1px solid #409EFF;
                color: #ffffff;
                font-size: 14px;
                background: #409EFF;
                border-radius: 3px;
                &:hover {
                    background: #57a7fb;
                    cursor: pointer;
                }
            }
        }  
        .netTable {
            border-top 1px solid #ddd
            padding 30px 0
            margin-top 20px
            display inline-block
            width 100%
            .netTable-top{
                display flex
                justify-content space-between
                align-items center
                .tit{
                    em{
                        padding 0 2px
                        font-style normal
                        font-size 16px
                        font-weight bold
                    }
                }
                .btn{                   
                    font-size 12px
                    padding 0 10px
                    border 1px solid #ddd
                    border-radius 2px
                    &:hover{
                        cursor pointer
                        color #fff
                        background #409EFF
                        border-color #409EFF
                    }
                }
            }
            .btn-wapper{
                margin 30px 0
            }
        }    
    }
}
.red{
    color red
}
.green{
    color green
}
</style>