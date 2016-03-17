<style media="screen">


</style>

<template id="">
<div id="door">
    <ul class="yo-list">
        <li class="item" v-for="item in list">{{{item}}}</li>
    </ul>
    <suggest :url="sugguestUrl" :value.sync="sugguestValue" :watch.sync="sugguestWatch"></suggest>
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
            list: ['<b>开门大吉</b>', '开门吃饭', '开门迎喜', '开门开始了', '开门开始了', '开门开始了'],
            dateType:'day',
            sugguestUrl: '/sugguest',
            sugguestValue: '',
            sugguestWatch: true,
            defaultDate:'2015-12-25'
        }
    }
}

</script>
