<style media="screen">



</style>

<template>

<div class="yo-btnbar" v-if="total">
    <span class="yo-btn yo-btn-s" v-for="item in list">
        <i class="yo-ico" v-if="item.type!='num'">{{{item.text}}}</i>
        <i v-else @click="change">{{{item.text}}}</i>
    </span>
</div>

</template>

<script type="text/javascript">

module.exports = {
    props: {
        current: {
            type: Number,
            twoWay: true,
            required: true
        },
        width: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        beforeChange: Function,
        change: {
            type: Function,
            required: true
        }
    },
    data: function() {
        return {
            goPage: 1
        }
    },
    computed: {
        list: function() {
            return this.makePages(this.current, this.width, this.total)
        }
    },
    methods: {
        /**
         * @param   cur  当前页
         * @param   width 当前页的左右边距
         * @param   pages 总页数
         */
        makePages: function(cur, width, pages) {
            var start, end, i, r = [];
            width = width || 5;
            start = Math.max(cur - width, 1);
            end = Math.min(start + width * 2, pages);
            for (i = start; i <= end; i++) {
                r.push({
                    text: i,
                    type: 'num'
                });
            }
            if (start > 2) {
                r.unshift({
                    type: 'dot',
                    text: '&#xf07e;'
                });
                r.unshift({
                    type: 'num',
                    text: 1
                });
                r.unshift({
                    text: '&#xf07d;',
                    type: 'prev'
                });
            } else if (start == 2) {
                r.unshift({
                    type: 'num',
                    text: 1
                })
            }
            if (pages - end >= 2) {
                r.push({
                    type: 'dot',
                    text: '&#xf07e;'
                });
                r.push({
                    type: 'num',
                    text: pages
                });
                r.push({
                    type: 'next',
                    text: '&#xf07f;'
                });
            } else if (pages - end == 1) {
                r.push({
                    type: 'num',
                    text: pages
                });
            }
            return r;
        }
    }
}

</script>
