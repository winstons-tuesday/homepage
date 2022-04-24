<script lang="ts">
    import Vue from 'vue'
    import ServiceCard from './ServiceCard.vue';
    import BubbleIcon from './BubbleIcon.vue';
    import {CardData, SERVICES_CARDS_DATA} from '../data/data'

    export default Vue.extend({
        name: 'Services',
        components: {
            ServiceCard,
            BubbleIcon
        },
        data: function() {
            return {
                cardInfo: SERVICES_CARDS_DATA as CardData[],
            }
        }
    })
</script>

<template>
    <section class="container services">
        <div class="row d-flex justify-content-center">
            <h2 class="text-center services-title">Services</h2>
        </div>
        <div class="row d-flex justify-content-center service-card-container">
            <ServiceCard v-for="(info, index) in cardInfo"
                v-bind:key="index"
                v-bind:title="info.title"
                v-bind:blurb="info.blurb">
                <BubbleIcon v-bind:icon="info.icon"/>
            </ServiceCard>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import "../../node_modules/bootstrap/scss/bootstrap";
    @import '../scss/invisibles.scss';

    .services {
        margin-top: $spacer-xxl;
    }

    .services-title {
        margin-bottom: $spacer-lg;
    }

    .service-card-container {
        @include row-cols(1);

        @include media-breakpoint-up(md) {
            @include row-cols(2);
        }

        @include media-breakpoint-up(lg) {
            @include row-cols(4);
        }
    }
</style>