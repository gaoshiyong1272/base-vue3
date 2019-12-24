
const actions = {
    APP_INIT({state, commit, dispatch, rootState}, callback){
        callback();
    },

    /**
     * 更新$loading状态
     * @constructor
     */
    LOADING({state, commit, dispatch, rootState}, args){
        commit('_updateLoading',args);
    },

    /**
     * 存储$vue
     * @constructor
     */
    SAVE_VUE_OBJECT({state, commit, dispatch, rootState}, $vue){
        commit('_updateSaveVueObject', $vue);
    },

};

export default actions;
