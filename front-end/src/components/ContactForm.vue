<script lang="ts">
import Vue from 'vue'
import { sendMail } from '../services/mailService';

const TOAST_WAIT_TIME_MS = 10000;
const TOAST_ERROR_MESSAGE = 'There was an error sending your request, please contact us via email';
const TOAST_SUCCESS_MESSAGE = 'Your request has been sent!';

export default Vue.extend({
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            websites: false,
            consulting: false,
            hosting: false,
            webApps: false,
            loading: false,
            toastMessage: TOAST_SUCCESS_MESSAGE,
            toastVisible: false,
            toastError: false,
        }
    },
    methods: {
        handleSendForm() {
            this.loading = true;
            
            const {
                firstName, 
                lastName,
                email,
                message,
                websites,
                consulting,
                hosting,
                webApps
            } = this;
            
            const data = {
                firstName,
                lastName,
                email,
                message,
                servicesRequested: {
                    websites,
                    consulting,
                    hosting,
                    webApps
                },
            };

            sendMail(data)
                .then(res => {
                    if(!res.ok) {
                        this.handleErrorFetch(res.statusText);
                    } else {
                        this.handleSuccessFetch();
                    }
                })
                .catch(err => {
                    this.handleErrorFetch(err);
                });
        },
        handleSuccessFetch() {
            this.clearForm();
            this.loading = false;
            this.toggleToast();
            setTimeout(() => {
                this.toggleToast();
            }, TOAST_WAIT_TIME_MS)
        },
        handleErrorFetch(err: string) {
            console.warn(err);
            this.loading = false;
            this.toastError = true;
            this.toastMessage = TOAST_ERROR_MESSAGE;
            this.toggleToast();
            setTimeout(() => {
                this.toggleToast();
                this.toastError = false;
                this.toastMessage = TOAST_SUCCESS_MESSAGE;
            }, TOAST_WAIT_TIME_MS)
        },
        clearForm() {
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.message = '';
            this.websites = false;
            this.webApps = false;
            this.consulting = false;
            this.hosting = false;
        },
        async recaptcha() {
            // (optional) Wait until recaptcha has been loaded.
            await this.$recaptchaLoaded();

            // Execute reCAPTCHA with action "contact".
            // eslint-disable-next-line
            const token = await this.$recaptcha('contact');
            
            this.handleSendForm();
        },
        toggleToast() {
            this.toastVisible = !this.toastVisible;
        }
        
    },
})
</script>

<template>
    <form clas="contact-us">
        <div class="row">
            <div class="col mb-1">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" name="firstName" class="form-control" v-model="firstName">
            </div>
            <div class="col">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" name="lastName" class="form-control" v-model="lastName">
            </div>
        </div>
        <div class="row mb-2">
            <div>
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" v-model="email">
            </div>
        </div>
        <div class="row">
            <div>
                <label for="message" class="form-label">Message</label>
                <textarea 
                    name="message" 
                    class="form-control" 
                    v-model="message"
                    placeholder="Please tell us a little more about your project."
                />
            </div>
        </div>
        <div class="row mt-4 mb-1">
            <h4>Services</h4>
        </div>
        <div class="row">
            <div class="col">
                <div>
                    <input type="checkbox" value="websites" name="websites" class="form-check-input" v-model="websites">
                    <label for="websites" class="form-check-label">Websites</label>
                </div>
                <div>
                    <input type="checkbox" value="consulting" name="consulting" class="form-check-input" v-model="consulting">
                    <label for="consulting" class="form-check-label">Consulting</label>
                </div>
            </div>
            <div class="col">
                <div>
                    <input type="checkbox" value="webApps" name="webApps" class="form-check-input" v-model="webApps">
                    <label for="webApps" class="form-check-label">Web Apps</label>
                </div>
                <div>
                    <input type="checkbox" value="hosting" name="hosting" class="form-check-input" v-model="hosting">
                    <label for="hosting" class="form-check-label">Hosting</label>
                </div>
            </div>
        </div>
        <hr>
        <div class="row mt-2">
            <div class="col">
                <button type="button" class="btn contact-send-btn" v-on:click="recaptcha">Send</button>
            </div>
        </div>
        <div class="contact-toast" v-bind:class="{'show': toastVisible, 'error': toastError}">
            <div class="toast" v-bind:class="toastVisible ? 'show' : 'hide'" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <strong class="me-auto">Contact Us</strong>
                    <button type="button" class="btn-close" v-on:click="toggleToast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    {{toastMessage}}
                </div>
            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped>
    @import '../scss/invisibles.scss';

    .contact-toast {
        position: fixed;
        z-index: 11;
        transition: right 0.3s ease-out;
        border-radius: 4px;
        // error and success styles;
        background: green;
    }

    .contact-toast.error {
        background: red;
    }

    .contact-toast.show {
        right: 1rem;
        bottom: 1rem;
    }

    .contact-toast.hide {
        right: -20rem;
    }

    .form-check-input {
        margin-right: 4px;
    }

    .contact-send-btn {
        background: $theme-gradient;
        color: white;
        border: none;
    }

    
</style>
        