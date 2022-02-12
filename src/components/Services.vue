<script lang="ts">
    import Vue from 'vue'
    import Card from './Card.vue';
    import BubbleIcon from './BubbleIcon.vue';
    import {CardData, SERVICES_CARDS_DATA} from '../data/data'

    export default Vue.extend({
        name: 'Services',
        components: {
            Card,
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
            <h2 class="text-center">Services</h2>

                <card v-for="(info, index) in cardInfo"
                    v-bind:key="index"
                    v-bind:title="info.title"
                    v-bind:blurb="info.blurb">
                    <BubbleIcon />
                </card>
                
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .services {
        padding-top: 120px;
    }
</style>