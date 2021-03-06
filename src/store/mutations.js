import jQuery from 'jquery';

const mutations = {
    /**当前页面**/
    CHANGE_PAGE(state, page){
        state.$page = page;
    },

    /***
     * 设置内容区域高度
     * @constructor
     */
    SET_CONTENT_HEIGHT(state, height) {
        state.$contentHeight = height;
        state.$iframeHeight = height - 5;
    },

    /**内容区域LOADING**/
    PRIVATE_LOADING(state, args) {
        if (args) {
            let timeout = () => {
                setTimeout(() => {
                    let breadcrumb = jQuery('#page-main-breadcrumb');
                    let content = jQuery('#page-main-content');
                    let loading = jQuery('#loading-private');
                    let windowHeight = jQuery(window).height() - jQuery('.el-header').outerHeight();
                    //console.log(window_height);
                    if (breadcrumb.length === 0) {
                        timeout();
                    } else {
                        //console.log(breadcrumb.height() + content.outerHeight());
                        let height = breadcrumb.height() + content.outerHeight();
                        //console.log(window_height, height);
                        if (height < windowHeight) {
                            height = windowHeight;
                        }
                        loading.height(height);
                        state.$loadingPrivate = args;
                    }
                }, 50);
            };
            timeout();
            jQuery(window).resize(() => {
                let breadcrumb = jQuery('#page-main-breadcrumb');
                let content = jQuery('#page-main-content');
                let loading = jQuery('#loading-private');
                let windowHeight = jQuery(window).height() - jQuery('.el-header').outerHeight();
                let height = breadcrumb.height() + content.outerHeight();
                if (height < windowHeight) {
                    height = windowHeight;
                }
                loading.height(height);
            });
        } else {
            state.$loadingPrivate = args;
        }
    },




};

export default mutations;
