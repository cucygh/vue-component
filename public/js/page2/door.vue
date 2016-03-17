<style media="screen">


</style>

<template id="">
<div id="door">
    <ul class="yo-list">
        <li class="item" v-for="item in list">{{{item}}}</li>
    </ul>
    <suggest :url="sugguestUrl" :value.sync="sugguestValue" :watch.sync="sugguestWatch"></suggest>
    <!-- <datepicker></datepicker> -->
</div>

</template>

<script>

module.exports = {
    el: function() {
        return '#door'
    },
    data: function() {
        return {
            list: ['<b>door1</b>', 'door2', 'door3'],
            sugguestUrl: '/sugguest',
            sugguestValue: '',
            sugguestWatch: true
        }
    }
}

</script>
