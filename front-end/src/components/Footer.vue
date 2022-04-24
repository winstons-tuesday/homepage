<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear(),
        }
    }
})
</script>
<template>
    <footer class="container-fluid footer">
        <div class="row d-flex justify-content-end">
            <p class="text-center footer-legal">&copy; {{year}} Winston's Tuesday, LLC</p>  
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @import '../scss/invisibles.scss';
    $footer-background: $theme-background;
    $footer-color: $theme-text-dark;

    .footer {
        height: 100px;
        background: $footer-background;
        color: $footer-color;
        margin-top: $spacer-xxl;
    }

    .footer-legal {
        margin-top: $spacer-lg;
    }
</style>