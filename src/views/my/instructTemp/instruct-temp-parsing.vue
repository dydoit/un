<template>
    <div class="code-main m-sroll">
        <div class="code-top">
            <el-button size="small" icon="el-icon-arrow-left" >返回</el-button>
            <el-button size="small" type="primary" >保存</el-button>
            <el-button size="small" type="primary" plain >取消</el-button>
        </div>
        <div class="codebody" :style="{height: codebodyHeight+'px'}">
            <div class="code-centent">
                <div class="code-fl" :style="{width: topLW}">
                    <div class="codetop">
                        <div class="code-title">Python</div>
                        <div class="code_btn">
                            <el-button class="runbtn blue" type="primary" size="small">RUN</el-button>
                        </div>
                    </div>
                    <codemirror class="codemirrorbox"                       
                                ref="codebox"
                                v-if="analysisCode"
                                :value="analysisCode"
                                @input="getVal"
                                @language-change="getLanguage"></codemirror>
                </div>
                <div class="code-fr" :style="{width: topRW}"> 
                    <div class="inst-sidebar">                       
                            <el-tabs size="small" 
                            v-model="activeName" 
                            type="border-card" 
                            @tab-click="handleClick">
                                <el-tab-pane label="指定网元" name="first">
                                    <div class="inst-cm" :style="{height: topHeight+'px'}">
                                    <div v-for="item in 10" :key=item class="inst-item">
                                        <div>版本</div>
                                        <el-radio-group v-model="netid">
                                        <el-radio v-for="(item,index) in netList"
                                                    :key="index"
                                                    :label="item.label">
                                            {{item.value}}
                                        </el-radio>
                                        </el-radio-group>
                                    </div>                                  
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="API组件" name="second">api</el-tab-pane>                       
                            </el-tabs>                      
                    </div>
                </div>
            </div>
            <div class="code-bottom" :style="{height: footHeight+'px'}">
                <div class="code-resizer"></div>
                <div class="code-bottom-tabs">
                <span v-for="(item,index) in tabs" 
                :key="index"
                :class="{on: index== tabNum}" 
                @click="tabfun(index)">{{item}}</span>
                <i class="clearResult el-icon-delete" @click="result = '' ">清空</i>
                </div>
                <div class="code-result" :style="{height: footH2+'px'}">
                <div class="codeitem" v-show="tabNum == 0">
                    <div class="instruct-textarea">
                    <textarea  v-loading="loading" v-model="reportMsg" readonly></textarea>
                    </div>
                </div>
                <div class="codeitem" v-show="tabNum == 1">
                    <div class="instruct-textarea">
                    <textarea  v-loading="loading" v-html="result" readonly> </textarea>
                    </div>
                </div>
                <div class="codeitem" v-show="tabNum == 2">
                    <div class="instruct-details">
                    <ul v-if="instructDetails">
                        <li class="p1"><em>开发人员：</em><span>{{ instructDetails.developers }}</span></li>
                        <li class="p1"><em>所属专业：</em><span>{{ filterProfessionDict( instructDetails.profession ) }}</span></li>
                        <li class="p1"><em>网元类型：</em><span>{{ filterEquipmentType( instructDetails.equipmentType ) }}</span></li>
                        <li class="p1"><em>设备厂家：</em><span>{{ filterCompanyDict( instructDetails.equipmentCompany )}}</span></li>
                        <li class="p1">
                        <em>适用版本：</em><span>{{ instructDetails.equipmentVersion }}</span>
                        </li>
                        <li class="p1">
                        <em>适用网元：</em><span>{{ instructDetails.equipmentName }}</span>
                        </li>
                        <li class="p1">
                        <em>指令代码：</em><span>{{ instructDetails.instructCode }}</span>
                        </li>
                        <li class="p1">
                        <em>指令预览：</em><span v-if="instructCodeView">{{ instructCodeView }}</span>
                        </li>
                    </ul>
                    </div>
                </div>
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
            loading:false,
            analysisCode:'',          
            activeName: 'first',           
            netid:'',
            netList:[
                {label:'网元1',value:'1'},
                {label:'网元1',value:'1'},
                {label:'网元1',value:'1'},
                {label:'网元1',value:'1'},
            ],
            tabs:['报文','运行结果','属性'],
            tabNum:0,
            instructDetails:'',
            result:'',
            reportMsg:'',
            topLW:'75%' ,
            topRW:'25%',
            codebodyHeight:document.body.clientHeight-145,
            topHeight: document.body.clientHeight-361,
            footHeight: 180,
            footH2:145,
            preY: 0,   
        }
    },
    components:{
        codemirror
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        },
        //tab切换
        tabfun(index) {
            this.tabNum = index;
        },
        //绑定子组件数据
        getVal(data){
            this.codeVal = data;
            this.isWebRun = true;
            this.isWebRun = false;
        },
        getLanguage(val){
            console.log('language',val)
        },
        ctrlMouseDown(e) {
            let el = e.target || e.srcElement
            if( el.className.indexOf('code-resizer') < 0) {
            return
            }
            this.preY = e.clientY
        },
        ctrlMouseMove(e) {
            const nowY = e.clientY
            if (this.preY <= 0) {
            return
            }
            e.preventDefault()
            this.footHeight -= nowY - this.preY
            if (this.footHeight < 50) {
            this.footHeight = 50
            } else if (this.footHeight > document.body.clientHeight - 100) {
            this.footHeight = document.body.clientHeight - 100
            } else {
            this.preY = nowY
            }
            this.topHeight = this.codebodyHeight - this.footHeight - 36
            this.footH2 = this.footHeight - 33          
        },
        ctrlMouseUp(e) {
            this.preY = 0
        },
        //获取数据
        getData(){
            this.analysisCode = "if True:\n"+
                "print ('True')\n"+
                " else:\n" +
                "print ('False')\n"
        },
    },
    mounted(){
        this.getData();
        window.onmousedown = this.ctrlMouseDown
        window.onmousemove = this.ctrlMouseMove
        window.onmouseup = this.ctrlMouseUp
    }
}
</script>
<style lang="stylus" scoped>
.m-sroll{
    ::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color: #e8e8e8;
    }
    ::-webkit-scrollbar-thumb {
        // border-radius:5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: rgba(0, 0, 0, .3)
    }
}
.code-main{
}
.code-top{
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 20px;   
}
.codebody{
    display :flex;
    flex-direction: column;
}
.code-centent{
    display flex
    justify-content flex-start
    flex 1
    .code-fl{
        display: flex;
        flex-direction: column;
        .codetop{
            display:flex;
            justify-content:space-between;
            align-items :center;
            border-bottom: 1px dashed #ddd;
            border-top: 1px solid #ccc;
            box-shadow: 0px 2px 5px inset #e5e5e5;
            background: #f6f7fa;
            .code-title{
                font-size: 14px;
                height: 34px;
                line-height: 34px;
                padding-left: 15px;
            }
        }
        .runbtn{
            padding: 6px 15px;
            font-size: 12px;
            margin-right:8px
            background-color: #6ff37f;
            border-color: #898989;
            color: #000;
            &:hover{
                background-color:#41e655;
            }
        }
        .codemirrorbox{
            flex 1
        }
    }
    .code-fr{
        display flex
        flex-direction column
        .inst-sidebar{
            width: 100%;
            height: 100%;
            >>>.el-tabs__item{
                height 34px
                line-height 34px
            } 
            >>>.el-tabs--border-card{
                height 100%
            }
            >>>.el-tabs__content{
                padding 0
            } 
            .inst-cm{
                overflow-y scroll 
            }
            .inst-item{
                padding 0 0 10px 15px
            }
        }
    }
    
}
.code-resizer{
    height: 4px;
    background: #f0f0f0;
    cursor: row-resize;
    border-top: 1px solid #ccc;
}
.code-bottom{
    .code-bottom-tabs{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid #ccc;
        border-top: none;
        background: #f0f0f0;
        position: relative;
        span{
            color: #333;
            padding: 4px 10px;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            width: 80px;
            text-align: center;
            cursor: pointer;
            margin-left:-1px;
            font-size: 12px;
            &.on{
                color: #1684f6;
            }
        }
        .clearResult{
            position: absolute
            right: 18px
            font-size 12px
            &:hover{
            cursor: pointer;
            color: #f00;
            }
        }
    }
    .instruct-textarea{
        width 100%
        height 100%
        textarea{
            width 100%
            height 100%
            border none
            border: none;
            padding: 0;
        }
    }
    .code-result{
        overflow-y: scroll;
        .codeitem{
            height: 100%;
        }
    }
}
</style>