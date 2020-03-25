<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                   rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
        
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data(){
            return {
                lists: [
                    {name: '合同审批表', url : 'https://oa.oasisgames.cn/uploads/201807/%E5%90%88%E5%90%8C%E5%AE%A1%E6%89%B9%E8%A1%A8.xls'},
                    {name: '公章申借用申请表', url:'https://oa.oasisgames.cn/uploads/201807/%E5%85%AC%E7%AB%A0%E7%94%B3%E5%80%9F%E7%94%A8%E7%94%B3%E8%AF%B7%E8%A1%A8.xlsx'},
                    {name: '员工手册（规章制度）V3.0', url:'https://oa.oasisgames.cn/uploads/201812/%E5%91%98%E5%B7%A5%E6%89%8B%E5%86%8C%EF%BC%88%E8%A7%84%E7%AB%A0%E5%88%B6%E5%BA%A6%EF%BC%89V3.0.docx'},
                    {name: '公司考勤与休假管理制度V4.1', url:'https://oa.oasisgames.cn/uploads/201905/%E5%85%AC%E5%8F%B8%E8%80%83%E5%8B%A4%E4%B8%8E%E4%BC%91%E5%81%87%E7%AE%A1%E7%90%86%E5%88%B6%E5%BA%A6V4.1.docx'},
                    {name: '公章申请表', url:'https://oa.oasisgames.cn/uploads/201807/%E5%85%AC%E7%AB%A0%E7%94%B3%E8%AF%B7%E8%A1%A8.xlsx'}
                ]
            };
        },
        
        methods: {
            getPreviewUrl(url){
                return `https://view.officeapps.live.com/op/view.aspx?src='${url}`;
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
