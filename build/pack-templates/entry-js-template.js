import slimvue from 'slimvue';
import App from '@websitedir/components/@entryname@.vue';
import store from "@websitedir/store/app";

store.commit('CHANGE_PAGE','@pathname@');
store.dispatch('APP_INIT',function(){
    slimvue.mount(App);
});

