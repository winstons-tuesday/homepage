<script lang="ts">
import Vue from 'vue'
import ContactForm from './ContactForm.vue';

export default Vue.extend({
    name: 'Contact',
    components: {
        ContactForm,
    }
})
</script>
<template>
    <section class="container contact" data-js-selector="contact-section">
        <div class="row d-flex justify-content-center">
            <h2 class="text-center contact-title">Contact</h2>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
                <p>Fill out the form below or email us at <a href="mailto:adam@winstonstuesday.com">adam@winstonstuesday.com</a></p>
                <ContactForm />
            </div>
            <div class="col-12 col-lg-6 map-container">
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
    @import "../../node_modules/bootstrap/scss/bootstrap";
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

    @include media-breakpoint-down(lg) {
        .map-container {
            margin-top: $spacer-xl;
        }
    }
</style>