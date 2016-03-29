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
var app = Vue.extend({});

var router = new VueRouter({
    linkActiveClass: 'item-on'
});

router.map({
    '/foo': {
        component: require('./list.vue')
    },
    '/bar': {
        component: require('./list.vue')
    },
    '/empty': {
        component: require('./empty.vue')
    }
});
router.afterEach(function (transition) {
    console.log('switch');
})

router.start(app, '#wrapper');
