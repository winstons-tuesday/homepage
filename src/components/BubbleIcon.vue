<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'BubbleIcon',
        props: {
            icon: {
                type: Array,
            }
        }
    })
</script>

<template>
    <div class="bubble-icon">
        <fa-icon :icon="icon" class="bubble-icon-svg"/>
    </div>
</template>

<style lang="scss" scoped>
    @import "../scss/invisibles.scss";
    
    $bi-primary: $theme-background;
    $bi-one: $theme-orange;
    $bi-two: $theme-purple;
    $bi-transition: 450ms ease-in-out;

    .bubble-icon {
        position: relative;
        width: 7rem;
        height: 7rem;
        border-radius: 3.5rem;
        border: 3px solid;
        border-color: $bi-primary;
        color: $bi-primary;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: $bi-transition;
    }

    .bubble-icon:hover {
        color: $bi-one;
        border-color: $bi-one;
    }

    .bubble-icon:before {
        transition: $bi-transition;
        content: "";
        position: absolute;

        top: 50%;
        bottom: 50%;
        left: 50%;
        right: 50%;
        opacity: 0;
    }

    .bubble-icon:hover:before,
    .bubble-icon:active:before {
        content: "";
        transition: $bi-transition;
        transition-delay: 200ms;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 1;
        border-radius: 3.5rem;
        box-shadow: 0 8px 29px #3f096640;
        background: $theme-gradient;
    }

    .bubble-icon-svg {
        font-size: 2.5em;
    }
</style>