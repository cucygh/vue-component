<style media="screen">
.calendar {}
</style>

<template>

<div id="datepicker" class="calendar">
    <section class="day" v-if="type=='day'">
        <header>
            <nav>
                <span class="calendar-arrow prev"></span>
                <span class="calendar-arrow next"></span>
            </nav>
            <div class="title clickable">3月 2016</div>
        </header>
        <nav class="calendar-week-days">
            <span>日</span>
            <span>一</span>
            <span>二</span>
            <span>三</span>
            <span>四</span>
            <span>五</span>
            <span>六</span>
        </nav>
        <article class="calendar-table">
            <span class="calendar-cell days"></span>
        </article>
    </section>
    <section class="month" v-if="type=='month'" @click="type='day'">
        <h3 @click="type='year'">年</h3> month
    </section>
    <section class="year" v-if="type=='year'" @click="type='month'">
        year
    </section>
</div>

</template>

<script type="text/javascript">

module.exports = {
    props: {
        type: {
            type: String,
            required: true
        }
    },
    data: function() {
        return {
            type: 'day'
        }
    },
    methods: {
        next: function() {
            this.type = 'day';
        }
    }
}

</script>
