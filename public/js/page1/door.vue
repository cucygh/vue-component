<style media="screen">


</style>

<template id="">
<div id="door">
    <!-- <ul class="yo-list">
        <li class="item" v-for="item in list">{{{item}}}</li>
    </ul> -->
    <!-- <tab :navigation="navList" :active.sync="active" :switch="switchTab">
        <p v-if="active=='door'">tab1</p>
        <p v-if="active=='qiao'">tab2</p>
    </tab> -->
    <!-- <suggest :url="sugguestUrl" :value.sync="sugguestValue" :watch.sync="sugguestWatch"></suggest> -->
    <datepicker :type.sync="dateType" :init.sync="defaultDate"></datepicker>
</div>

</template>

<script>

module.exports = {
    el: function() {
        return '#door'
    },
    data: function() {
        return {
            list: ['<b>开门大吉</b>', '开门吃饭', '开门迎喜'],
            dateType:'day',
            sugguestUrl: '/sugguest',
            sugguestValue: '',
            sugguestWatch: true,
            defaultDate:'2015-12-26',
            navList:[{
                text:'开门大吉',
                key:'door'
            },{
                text:'金水桥边',
                key:'qiao'
            }],
            active:'door',
            switchTab:function(key){
                this.active=key;
            }
        }
    }
}

</script>
