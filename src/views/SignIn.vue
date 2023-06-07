<template>
    <Logo />
    <div>
        <h1 class="heading">Sign in to your account</h1>
        <WarningBox :showWarning="invalidInput !== ''" :warningText="invalidInput"/>
        <div class="container">
            <div class="form-group">
                <InputLabel class="labels" htmlFor="email" label="Email Address"/>
                <Input htmlType="email" :value="email" @update:value="email = $event" />
                <InputLabel class="labels" htmlFor="password" label="Password"/>
                <Input htmlType="password" :value="password" @update:value="password = $event" />
                <ButtonBox buttonText="Sign in" :handleClick="signin"/>
                <div class="googleButton">
                    <GoogleSignInButton buttonText="Sign in with Google" :handleClick="googleSignin"/>
                </div>
            </div>
        </div>
        <div class="signup-callout">
            <p class="signup-callout-p">New? <RouterLink class="nav" :to="{ name: 'signup' }">Create new account</RouterLink></p>
        </div>
    </div>
</template>

<script >
import { signinUser } from '../components/firebaseAuth';
import { RouterLink } from 'vue-router'
import { googleSignIn } from '../components/firebaseAuth';
import { GoogleAuthProvider } from "firebase/auth";
import authState from '../components/firebaseAuth';
import Logo from '../components/Logo.vue';
import WarningBox from '../components/WarningBox.vue';
import InputLabel from '../components/InputLabel.vue';
import Input from '../components/Input.vue';
import ButtonBox from '../components/BottonBox.vue';
import GoogleSignInButton from '../components/GoogleSignInButton.vue';


export default {
    components: {
        Logo,
        WarningBox,
        InputLabel,
        Input,
        ButtonBox,
        GoogleSignInButton
    },
    data() {
        return {
            email: '',
            password: '',
            invalidInput: ''
        }
    },
    methods: {
        signin() {
            const { email, password } = this;

            signinUser(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if(authState.isSignedIn) {
                        this.$router.push( { name: 'home' } );
                    }
                })
                .catch((err) => {
                    this.invalidInput = 'Incorrect email or password';
                });
        },
        googleSignin() {
            googleSignIn()
                .then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    if(credential) {
                        this.$router.push({ name: 'home' })
                    } 

                })
                .catch((err) => {
                    console.log(err.message)
                    console.log(err.code)
                });
        }                     
    },
    watch: {
        password(newValue) {
            this.invalidInput = '';
        },
        email(newValue) {
            this.invalidInput = '';
        }
    },
    computed: {
        authState() {
            return authState;
        },
    },
}

</script>

<style scoped>
form, .container {
    max-width: 300px;
    margin: 20px auto;
    margin-bottom: 15px;
    background-color: #f6f8fa;
    text-align: left;
    padding: 16px;
    border-radius: 10px;
    border: 1px solid hsla(210,18%,87%,1);
    display: block;
  }

.form-group {
  margin-bottom: 10px;
}
.labels {
    margin-bottom: 6px;
}
.heading {
    margin: 0;
    color: #1f2328;
    font-weight: 300;
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.signup-callout-p {
    padding: 16px 70px;
    text-align: center;
    border: 1px solid hsla(210,18%,87%,1);
    border-radius: 6px;
    margin-top: 1px;
    margin-bottom: 10px;
    font-size: 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.signup-callout {
    display: flex;
    justify-content: center;
    padding: 0px;
    text-align: center;
}
* {
    box-sizing: border-box;
}
.googleButton {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.firebaseui-idp-button, .firebaseui-tenant-button {
    direction: ltr;
    font-weight: 500;
    height: auto;
    line-height: normal;
    max-width: none;
    min-height: 40px;
    padding: 8px 56px;
    text-align: center;
    width: 100%;
    border-radius: 6px;
}

</style>