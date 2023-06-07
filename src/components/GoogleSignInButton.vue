<template>
    <button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-google firebaseui-id-idp-button"
        data-provider-id="google.com"
        style="background-color:#ffffff"
        data-upgraded=",MaterialButton"
        @click="handleClick">
        <span class="firebaseui-idp-icon-wrapper">
            <img class="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg">
        </span>
        <span class="firebaseui-idp-text firebaseui-idp-text-long">{{ buttonText }}</span>
        <span class="firebaseui-idp-text firebaseui-idp-text-short">Google</span>
    </button>
</template>

<script >
import 'firebaseui/dist/firebaseui.css';
export default {
    props:{
        buttonText: {
        type: String,
        required: true
    },
    handleClick: {
        type: Function,
        required: true
        }
    }
}
</script>

<style scoped>

</style>