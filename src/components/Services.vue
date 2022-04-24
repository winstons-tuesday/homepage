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
    @import '../scss/invisibles.scss';

    .services {
        margin-top: $spacer-xxl;
    }

    .services-title {
        margin-bottom: $spacer-lg;
    }
</style>