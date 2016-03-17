<style media="screen">

input {
    padding: 2px;
}

.sugguest {
    color: red;
}

</style>

<template>

<div class="sugguest">
    <input type="text" class="yo-input" v-el="input" @keyup="getData" v-model="value">
    <ul class="yo-list" v-show="list.length" @click="selectItem">
        <li class="item" v-for="item in list">{{item.text}}</li>
    </ul>
</div>

</template>

<script type="text/javascript">

var Vue = require('vue');
Vue.use(require('vue-resource'));
module.exports = {
    props: {
        // 查询url
        url: {
            type: String,
            required: true
        },
        // 输入框的值
        value: {
            type: String,
            required: true,
            twoWay: true
        },
        // 输入框的改变是否有效，用户选择列表的时候应该视为无效避免出发查询url
        watch: {
            type: Boolean,
            required: true,
            twoWay: true
        },
        // 输入延时
        debounce: {
            type: String
        }

    },
    data: function() {
        return {
            list: []
        }
    },
    methods: {
        getData: function() {
            var $self = this;
            // 如果是非监听状态
            if (!$self.watch) {
                return;
            }
            // 请求服务端数据
            this.$http({
                url: $self.url,
                method: 'GET',
                data: {
                    text: $self.value
                }
            }).then(function(res) {
                // success
                $self.list = res.data.list;
            }, function(res) {
                // error
                $self.list = [];
            });
        },
        selectItem: function(e) {
            var $self = this;
            $self.watch = false;
            $self.value = e.target.innerText;
            $self.list = [];
        }
    }
}

</script>
