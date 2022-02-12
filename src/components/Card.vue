<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        title: String,
        blurb: String
    }
})
</script>

<template>
    <div class="col-3 wt-card">
        <slot></slot>
        <h3 class="wt-card-title">{{title}}</h3>
        <p class="wt-card-body">{{blurb}}</p>
    </div>
</template>

<style lang="scss" scoped>
    .wt-card {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding-left: 5px;
        padding-right: 5px;
        margin-bottom: 40px;

        
    }

    .wt-card-title {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .wt-card-body {
        text-align: center;
        color: gray;
        padding-right: 25px;
        padding-left: 25px;
    }

    
</style>