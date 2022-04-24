<script lang="ts">
import Vue from 'vue'
import AdvantageCard from './AdvantageCard.vue';

export default Vue.extend({
    name: 'OurAdvantages',
    components: {
        AdvantageCard,
    }
})
</script>

<template>
    <section class="container advantages">
        
        <div class="row">
            <div class="col-4">
                <img src="../assets/our_advantages.jpg" alt="desk and computer" class="advantage-image">
            </div>
            <div class="col advantage-cards">
                <div class="row">
                    <h2 class="advantage-title">Our Advantages</h2>
                </div>
                <div class="row">
                    <AdvantageCard />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '../scss/variables.scss';

    .advantages {
        margin-top: $spacer-xxl;
    }

    .advantage-title {
        margin-top: $spacer-lg
    }

    .advantage-image {
        object-fit: cover;
        width: 100%;
    }
</style>