/**
 * @ignore  ==================================================================
 * @fileoverview
 * @see wiki
 * @author  guohui.yin@qunar.com
 * @version 1.0.0
 * @ignore  created in 2015-00-00
 * @ignore  depend Library jQuery
 * @ignore  =================================================================
 */

var Vue = require('vue');
Vue.use(require('vue-touch'));
var vm = new Vue({
    el: '#wrapper',
    data: {
        move: 0
    },
    components: {
        content: require('./list.vue')
    }
});
