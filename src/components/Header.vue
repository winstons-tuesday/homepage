<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        name: 'Header',
    })
</script>

<template>
    <header class="container-fluid header">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-8 text-center">
                    <h1 class="text-center">Winston's Tuesday</h1>
                    <p class="text-center">
                        At Winston's Tuesday we have over 10 years of web design and development 
                        experience. We create and maintain websites and browser based applications
                        using the best technology and methods available. We do everything from 
                        managing web hosting to designing a new logo.
                    </p>
                    <button class="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        background: slategray;
        color: white;
        min-height: 700px;
        padding-top: 165px;
    }
</style>