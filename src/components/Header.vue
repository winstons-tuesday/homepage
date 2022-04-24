<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        name: 'Header',
        methods: {
            onContactUs() {
                console.log(arguments);

                const contactElement = document.querySelector('[data-js-selector="contact-section"]');

                contactElement?.scrollIntoView({behavior: "smooth", });
            }
        }
    });

</script>

<template>
    <header class="container-fluid header">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-8 text-center">
                    <h1 class="text-center">Winston's Tuesday</h1>
                    <p class="text-center">
                        Winston's Tuesday is a website design and development company. With over 10 years of 
                        experience creating websites, web based apps, and mobile apps. We create and maintain websites and browser based applications
                        using the best technology and methods available. We do everything from 
                        managing web hosting to logo design.
                    </p>
                    <button class="btn btn-lg contact-cta" v-on:click="onContactUs()">Contact Us</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @import '../scss/invisibles.scss';

    $header-background: $theme-background;
    $header-color: white;
    $header-button-background: $theme-gradient;

    .header {
        background: $header-background;
        color: $header-color;
        min-height: 600px;
        padding-top: 165px;

        .contact-cta {
            background: $header-button-background;
            color: $header-color;
            border: none;
            margin-top: $spacer-md;
        }
    }
</style>