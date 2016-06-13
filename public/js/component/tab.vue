<style>
.tab{
    display: block;
    background: #fff;
    margin-top: 10px;
}
.tab .nav{
    border-top: none;
    border-bottom: 1px solid #ddd;
    padding: 0 0 12px;
    text-align: left;
    height: 30px;
    line-height: 30px;
    box-sizing:content-box;
}
.tab .nav li{
    display: inline-block;
    cursor: pointer;
    color: #999;
    font-size: 20px;
    position: relative;
    padding: 5px 14px;
}
.tab .nav li.active{
    color: #222;
    background: none;
    border-top: 2px solid #f85959;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #fff;
}
.tab .content{
    text-align: left;
}
</style>
<template>
    <div class="tab">
        <ul class="nav">
            <li v-for="item in navigation" class="{{item.key==active?'active':''}}" @click="switch(item.key)">
                {{item.text}}
            </li>
        </ul>
        <div class="content" name="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    module.exports={
        props:{
            navigation:{
                type:Array,
                required:true
            },
            active:{
                type:String,
                required:true,
                twoWay:true
            },
            switch:{
                type:Function,
                required:true
            }
        }
    };
</script>
