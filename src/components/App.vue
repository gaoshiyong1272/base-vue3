<template>
    <div id="app">
        <img alt="Vue logo" src="@assets/logo.png">
        <div>dddwwwsssdddddsddd</div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <el-table
            :data="tableData"
            border
            style="margin: 0 auto; width: 800px;">
            <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120">
            </el-table-column>
            <el-table-column
                type="selection"
                width="55" label="全选" :render-header="renderHeader">
            </el-table-column>
        </el-table>
        <PdfPreview></PdfPreview>
        <ul>
            <li v-for="list in lists"><a :href="getPreviewUrl(list.url)" target="_blank" v-html="list.name"></a></li>
        </ul>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
import PdfPreview from '../componentsSub/OnlinePreview';

export default {
    name: 'app',
    data(){
        return {
            tableData : [
                { date: 20190102, name: '高世勇' },
                { date: 20190103, name: '高世勇' },
                { date: 20190104, name: '高世勇' }
            ],
            lists: [
                {
                    name: '合同审批表',
                    url: 'https://oa.oasisgames.cn/uploads/201807/%E5%90%88%E5%90%8C%E5%AE%A1%E6%89%B9%E8%A1%A8.xls'
                },
                {
                    name: '公章申借用申请表',
                    url: 'https://oa.oasisgames.cn/uploads/201807/%E5%85%AC%E7%AB%A0%E7%94%B3%E5%80%9F%E7%94%A8%E7%94%B3%E8%AF%B7%E8%A1%A8.xlsx'
                },
                {
                    name: '员工手册（规章制度）V3.0',
                    url: 'https://oa.oasisgames.cn/uploads/201812/%E5%91%98%E5%B7%A5%E6%89%8B%E5%86%8C%EF%BC%88%E8%A7%84%E7%AB%A0%E5%88%B6%E5%BA%A6%EF%BC%89V3.0.docx'
                },
                {
                    name: '公司考勤与休假管理制度V4.1',
                    url: 'https://oa.oasisgames.cn/uploads/201905/%E5%85%AC%E5%8F%B8%E8%80%83%E5%8B%A4%E4%B8%8E%E4%BC%91%E5%81%87%E7%AE%A1%E7%90%86%E5%88%B6%E5%BA%A6V4.1.docx'
                },
                {
                    name: '公章申请表',
                    url: 'https://oa.oasisgames.cn/uploads/201807/%E5%85%AC%E7%AB%A0%E7%94%B3%E8%AF%B7%E8%A1%A8.xlsx'
                }
            ]
        };
    },
    components: {
        HelloWorld,
        PdfPreview
    },
    created() {
        this.$myalert({
            title: '拜访达人',
            ranking: '您在全国排名第99',
            share(){
                console.log('share');
            }
        }).then((res) => {
            console.log(res);
        }).catch((res) => {
            console.log(res);
        });
    },
    methods: {
        getPreviewUrl(url) {
            return `https://view.officeapps.live.com/op/view.aspx?src=${url}`;
        },
        renderHeader(h, {column}){
            console.log(1111);
            return h(
                'div',
                [
                    h('span', column.label),
                    h('el-checkbox', {
                        style: 'margin-left:5px',
                        on: {
                            change: this.select // 选中事件
                        }
                    })
                ],
            );
        },
        select(){},
    }
};
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        /*background: url("../assets/logo.png"); !**css中调用assets**!*/
    }
</style>
