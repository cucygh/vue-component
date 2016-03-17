<style media="screen">



</style>

<template id="">

<div id="room">
    <ul class="yo-list">
        <li class="item" v-for="item in list" @click="onLog">{{item}}</li>
    </ul>

    <div class="yo-list">
        <label class="item item-input">
            <span class="mark">账号</span>
            <input type="text" class="yo-input flex" placeholder="必须为中文" />
        </label>
    </div>

    <!-- <modal :show.sync="show" :type.once="type" :ok.once="onOk" :title.once="title" :class.once="dialogClass">
        <p slot="body">
            测试文本
        </p>
    </modal> -->

    <paging :current.sync="pageCurrent" :width="pageWidth" :total="pageTotal" :change="pageChange"></paging>
</div>

</template>

<script>

var Vue = require('vue');
Vue.use(require('vue-resource'));
var process = require('./zdata.js');
module.exports = {
    el: function() {
        return '#room'
    },
    data: function() {
        return {
            list: ['room1', 'room2', 'room3'],
            show: true,
            type: 'prompt',
            title: '公告',
            dialogClass: 'yo-dialog-test',
            pageCurrent: 6,
            pageWidth: 2,
            pageTotal: 10
        }
    },
    methods: {
        onLog: function(msg) {
            console.log(true);
        },
        onOk: function() {
            this.show = false;
        },
        pageChange: function() {
            console.log('change');
        },
        getRoomInfo: function() {
            var self = this;
            self.$http({
                url: '/getRoomInfo',
                method: 'GET',
                data: {
                    key: 1
                }
            }).then(function(res) {
                self.roomInfo = process.roomInfo.call(res);
            }, function(err) {

            });
        }
    }
}

</script>
