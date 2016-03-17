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
var VueRouter = require('vue-router');
Vue.use(VueRouter);
Vue.component('suggest', require('../component/suggest.vue'));
Vue.component('modal', require('../component/modal.vue'));
Vue.component('datepicker', require('../component/datepicker.vue'));
Vue.component('paging', require('../component/paging.vue'));
var app = Vue.extend({});

var router = new VueRouter({
    linkActiveClass: 'item-on'
});

router.map({
    '/foo': {
        component: require('./door.vue')
    },
    '/bar': {
        component: require('./room.vue')
    },
    '/empty':{
        component:require('./empty.vue')
    }
});

router.start(app, '#wrapper');
