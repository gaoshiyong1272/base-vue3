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
    </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
    name: 'app',
    data(){
        return {
            tableData : [
                { date: 20190102, name: '高世勇' },
                { date: 20190103, name: '高世勇' },
                { date: 20190104, name: '高世勇' }
            ]
        };
    },
    components: {
        HelloWorld
    },
    created() {
        console.log(111111);
    },
    methods: {
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
