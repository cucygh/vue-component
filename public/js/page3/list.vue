

<template>

<header class="yo-header m-header yo-header-nav">
    <ul v-el:nav>
        <li v-for="item in nav" track-by="$index" :class="{'active':item.en==curNav}" @click="switchNav($event)" data-en="{{item.en}}">{{item.cn}}</li>
    </ul>
</header>

<div class="flex" id="body" v-touch:swipe="scroll($event)" v-el:body>
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
    props: {
        move: {
            twoWay: true,
            type: Number
        }
    },
    data: function() {
        return {
            nav: [{
                cn: '推荐',
                en: 'rs'
            }, {
                cn: '新闻',
                en: 'news'
            }, {
                cn: '热点',
                en: 'hosts'
            }, {
                cn: '社会',
                en: 'society'
            }, {
                cn: '美女',
                en: 'beauty'
            }, {
                cn: '段子',
                en: 'slls'
            }, {
                cn: '军事',
                en: 'war'
            }, {
                cn: '娱乐',
                en: 'ernere'
            }, {
                cn: '科技',
                en: 'keji'
            }, {
                cn: '手机',
                en: 'mobile'
            }, {
                cn: '头条',
                en: 'tt'
            }],
            curNav: 'rs',
            list: [],
            pageNo: 1,
            isBottom: 0
        }
    },
    methods: {
        // 导航切换
        switchNav: function(e) {
            this.$data.curNav = e.target.getAttribute('data-en');
            this.$els.nav.scrollLeft = e.target.offsetLeft - this.$els.nav.offsetWidth / 2;
        },
        // 数据初始化
        init: function() {
            this.$data.list.push('1', '2', '3', 't', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j');
        },
        // 加载页面
        add: function() {
            console.log('add page');
        },
        // 滑动处理
        scrollGo: function(begin, offset, el, attanch) {
            var start = 0,
                during = 50,
                _this = this;
            var change = function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            }

            var run = function() {
                start++;
                var top = change(start, 0, offset, during);
                // todo
                el.scrollTop = begin - top;
                if (start < during) {
                    requestAnimationFrame(run);
                } else {
                    if (el.scrollTop == _this.isBottom) {
                        attanch.apply(null, ['attach bottom']);
                    }
                }
            }
            run();
        },
        // 滑动响应
        scroll: function(e) {
            var el = this.$els.body;
            this.scrollGo(el.scrollTop, e.deltaY * 1.2, el, this.add);
        }
    },
    watch: {
        // 监听导航改变
        curNav: function() {
            // todo
            this.add();
        },
        // 监听页面内容改变
        list: function() {
            this.$data.isBottom = this.$els.body.scrollHeight - this.$els.body.offsetHeight;
        }
    },
    ready: function() {
        this.$data.pageNo = 1;
        this.init();
    }

}

</script>
