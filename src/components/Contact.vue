<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Contact',
})
</script>
<template>
    <section class="container contact">
        <div class="row d-flex justify-content-center">
            <h2 class="text-center contact-title">Contact</h2>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center align-items-center">
                <div>
                    <h4 class="address-line">Winston's Tuesday, LLC</h4>
                    <h5 class="address-line">1117 Heather Heath Dr.</h5>
                    <h5 class="address-line">Howell, MI 48843</h5>
                    <a href="mailto:adam@winstonstuesday.com">adam@winstonstuesday.com</a>
                </div>
            </div>
            <div class="col map-container">
                <GmapMap
                    :center="{lat: 42.607170, lng: -83.929604}"
                    :zoom="13"
                    map-type-id="roadmap"
                    style="width: 100%; height: 100%"
                >
                <GmapMarker
                    :key="1"
                    :position="{lat: 42.607694, lng: -83.945315}"
                    :clickable="false"
                    :draggable="false"
                />
                </GmapMap>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '../scss/invisibles.scss';

    .contact {
        margin-top: $spacer-xxl;
    }

    .contact-title {
        margin-bottom: $spacer-lg;
    }

    .address-container {
        margin-top: 0;
        margin-bottom: 0;
    }
    
    .map-container {
        height: 500px;
    }
</style>