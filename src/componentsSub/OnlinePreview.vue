<template>
    <div>
        <span @click="aaaa">sadfasdf</span>
        <el-dialog title="PDF预览" :visible.sync="viewVisible" width="100%" height="100%" @close='closeDialog'>
            <div style="margin-bottom: 15px; text-align: right">
                <el-button type="primary" size="small" @click.stop="previousPage">上一页</el-button>
                <el-button type="primary" size="small" @click.stop="nextPage">下一页</el-button>
                <span>当前第{{pdfPage}}页 / 共{{pageCount}}页</span>
            </div>
            <div>
                <pdf
                    :src="src"
                    :page="pdfPage"
                    @num-pages="a"
                    @page-loaded="b"
                    style="display: inline-block; width: 80%"
                ></pdf>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import pdf from 'vue-pdf';

export default {
    name: 'online_preview',
    data(){
        return {
            viewVisible: false,
            src: null,
            pdfPage: 1,
            pageCount: 0,
        };
    },
    components: {
        pdf
    },
    props: {
        msg: String
    },
    
    created(){
        this.src = pdf.createLoadingTask('http://127.0.0.1:8092/static/20190812171538OASIS%20GAMES%20%E6%96%B0%E5%91%98%E5%B7%A5%E7%94%9F%E5%AD%98%E8%AE%A1%E5%88%92.pdf');
        this.src.then(pdf => {
            this.viewVisible = true;
        });
    },
    
    methods: {
        aaaa(){
            this.viewVisible = !this.viewVisible;
        },
        a($event){
            console.log(arguments);
            this.pageCount = $event;
        },
        b($event) {
            console.log(arguments);
            this.pdfPage = $event;
        },
        closeDialog() {
            this.pdfPage = 1;
        },
    
        //PDF改变页数
        previousPage() {
            let p = this.pdfPage;
            p = p > 1 ? p - 1 : this.pageCount;
            this.pdfPage = p;
        },
        nextPage() {
            let p = this.pdfPage;
            p = p < this.pageCount ? p + 1 : 1;
            this.pdfPage = p;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
