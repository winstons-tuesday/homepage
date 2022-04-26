<script lang="ts">
    import Vue from 'vue';
    import WinstonIcon from './WinstonIcon.vue';

    export default Vue.extend({
        name: 'Header',
        components: {
            WinstonIcon,
        },
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
                <div class="col-8 d-flex justify-content-center flex-column">
                    <div class="winstons-tuesday-logo">
                        <h2 class="text-center winstons">
                            <WinstonIcon />
                            <div class="winstons-ball"></div>
                            WINSTON
                            <span>S</span>
                        </h2>
                        <h2 class="text-center tuesday">TUESDAY</h2>
                    </div>
                    
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
    @import "../../node_modules/bootstrap/scss/bootstrap";
    @import '../scss/invisibles.scss';

    $header-background: $theme-background;
    $header-color: white;
    $header-button-background: $theme-gradient;

    .header {
        background: $header-background;
        color: $header-color;
        min-height: 600px;
        padding-top: 10rem;
    }

    .winstons-tuesday-logo {
        width: fit-content;
        align-self: center;
    }

    .winston-icon {
        transform: translate(-10%, -70%);
        position: absolute;
        top: 0;
        left: 0;

        @include media-breakpoint-down(md) {
            transform: translate(-18%, -70%);
        }

        @include media-breakpoint-down(sm) {
            transform: translate(-20%, -70%);
        }
    }

    .winstons-ball {
        position: absolute;
        border-radius: .75rem;
        background: $theme-orange;
        width: 1.25rem;
        height: 1.25rem;
        right: 2.6rem;

        @include media-breakpoint-down(md) {
            right: 2.5rem;
        }

        @include media-breakpoint-down(md) {
            border-radius: .5rem;
            width: 1rem;
            height: 1rem;
            right: 1.8rem;
        }
    }

    .winstons {
        font-size: 5rem;
        width: fit-content;
        margin-bottom: 0px;
        position: relative;
        white-space: nowrap;

        @include media-breakpoint-down(md) {
            font-size: 4.6rem;
        }

        @include media-breakpoint-down(md) {
            font-size: 3.35rem;
        }
    }

    .tuesday {
        margin-top: -2rem;
        font-size: 6rem;

        @include media-breakpoint-down(md) {
            margin-top: -2rem;
            font-size: 5.6rem;
        }

        @include media-breakpoint-down(md) {
            margin-top: -1.5rem;
            font-size: 4rem;
        }
    }

    .contact-cta {
        background: $header-button-background;
        color: $header-color;
        border: none;
        margin-top: $spacer-md;
        width: fit-content;
        align-self: center;

        @include media-breakpoint-down(md) {
            margin-bottom: 2rem;
        }
    }
</style>