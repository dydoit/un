<template>
    <div>
        <div class="code-top">
            <el-button size="small" icon="el-icon-arrow-left" >返回</el-button>
            <el-button size="small" type="primary" >保存</el-button>
            <el-button size="small" type="primary" plain >取消</el-button>
        </div>
        <div class="codebody">
            <div class="code-centent">
                <div class="code-fl" :style="{width: topLWh}">
                    <div class="codetop">
                        <div class="code-title">Python</div>
                        <div class="code_btn">
                            <el-button class="runbtn blue" type="primary" size="small">RUN</el-button>
                        </div>
                    </div>
                    <codemirror class="codemirrorbox"                       
                                ref="codebox"
                                :value="analysisCode"
                                @input="getVal"
                                @language-change="getLanguage"
                                :style="{height: topHeight+'px'}"></codemirror>
                </div>
                <div class="code-fr" :style="{width: topRWh}"> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import codemirror from './components/codemirror/codemirror.vue'
export default {
    data(){
        return{
            analysisCode:'',
        }
    },
    components:{
        codemirror
    },
    methods:{},
    mounted(){

    }
}
</script>
<style lang="stylus" scoped>
&::-webkit-scrollbar {
    width: 3px;
    height: 8px;
    background-color: #e8e8e8;
    }
&::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(103, 103, 103, 0.3);
    background-color: rgba(103, 103, 103, 0.3)
}
.code-top{
    height: 40px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 10px #ededed;
}
.codebody{
    display :flex;
    flex-direction: column;
}
.code-centent{
    .code-fl{
        .codetop{
            display:flex;
            justify-content:space-between;
            align-items :center;
            border-bottom: 1px dashed #ddd;
            .code-title{
                font-size: 14px;
                height: 34px;
                line-height: 34px;
                padding-left: 15px;
            }
        }
    }
    .code-fr{}
}
</style>