import Vue from 'vue';
let alert = Vue.component('alert', {
    template: `
        <div class="alertHonor" v-if="showAlertHonor">
            <div class="alertHonorBox" @click="alertHonorClick">x3</div>
            <div class="honorWindow">
                <div class="honorClose" @click="honorClose">x1</div>
                <div class="honorBg">
                    <div class="honorShare">
                        <div class="honorBgLeft">升级通知</div>
                        <div class="honorBgRight" @click='handleActions("yes")'>确认</div>
                        <div class="honorBgRight" @click='handleActions("no")'>取消</div>
                    </div>
                    <div class="honorText">{{title}}</div>
                </div>
                <div class="honorRanking">
                    {{ranking}}
                </div>
            </div>
        </div>
    `,
    props: {
        img: {type: String},  //图片
        title: {type: String},  //达人昵称
        ranking: {type: String},   //排名
    },
    data() {
        return {
            showAlertHonor: true
        };
    },
    methods: {
        alertHonorClick() { //点击其他区域
            this.showAlertHonor = false; //关闭整个窗口
        },
        honorClose() { //点击关闭图标
            this.showAlertHonor = false;
        },

        handleActions(action) {
            this.callback(action);
            this.showAlertHonor = false;
        }
    }
});


const Alert = Vue.extend(alert);
export default function (options) {
    let {title, ranking} = options;
    let alertComponent = new Alert({
        el: document.createElement('div')
    });
    alertComponent.title = title;
    alertComponent.ranking = ranking;
    document.body.appendChild(alertComponent.$el);
    return new Promise((resolve,reject) => {
        // 回调函数
        alertComponent.callback = function (action) {
            if (action === 'yes') {
                resolve('yes');
            }
            if (action === 'no') {
                reject('no');
            }
        };
    });
}
