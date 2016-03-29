<template>

<div id="door">
    <ul class="yo-list">
        <li class="item" v-for="item in list" track-by="$index">{{item}}</li>
    </ul>
    <button type="button" name="button" @click="add">加载</button>
</div>

</template>

<script>

module.exports = {
    el: function() {
        return '#door'
    },
    data: function() {
        return {
            list: [],
            pageNo: 1
        }
    },
    methods: {
        init: function() {
            var t=Math.random();
            this.$data.list.push('123','125','45',t);
        },
        add: function() {
            this.$data.pageNo++;
            console.log(this.$data.pageNo);
        }
    },
    ready: function() {
        this.$data.pageNo = 1;
        this.init();
        console.log('ready',this.$data.pageNo);
    }

}

</script>
