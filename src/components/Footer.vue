<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Footer',
})
</script>
<template>
    <footer class="container-fluid footer">
        <div class="row">
            <h2 class="text-center footer-title">Footer</h2>  
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @import '../scss/invisibles.scss';
    $footer-background: $theme-background;
    $footer-color: white;

    .footer {
        height: 300px;
        background: $footer-background;
        color: $footer-color;
        margin-top: $spacer-xxl;
    }

    .footer-title {
        margin-top: $spacer-lg;
    }
</style>