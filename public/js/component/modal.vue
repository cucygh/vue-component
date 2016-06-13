<template>
<section class="yo-mask" v-show="show">
    <div class="yo-dialog {{class||''}}">
        <slot name="header">
            <header class="yo-header">
                <h2 class="title">{{title||'温馨提示'}}</h2>
                <span class="affirm" @click="show=false"><i class="yo-ico">&#xf077;</i></span>
            </header>
        </slot>
        <div class="bd">
            <slot name="body">
                <p>少时诵诗书试试</p>
            </slot>
        </div>
        <slot name="footer">
            <footer class="ft">
                <button class="yo-btn yo-btn-dialog yo-btn-l" v-if="type=='prompt'" @click="show=false">取消</button>
                <button class="yo-btn yo-btn-dialog yo-btn-l" v-if="type=='alert'||type=='prompt'" @click="ok">确定</button>
            </footer>
        </slot>
    </div>
</section>
</template>
<script type="text/javascript">
    module.exports = {
        props: {
            show: {
                type: Boolean,
                twoWay: true,
                required: true
            },
            type: String, //alert,prompt,dialog
            title: String, //标题
            class: String, //自定义样式
            ok: {
                type: Function,
                required: true
            }
        }
    }
</script>
