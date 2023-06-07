<template>
  <Logo />
  <div>
    <h1 class="heading">Sign up new account</h1>
    <WarningBox :showWarning="invalidEmail !==''" :warningText="invalidEmail"/>
    <WarningBox :showWarning="passwordError !==''" :warningText="passwordError"/>
    <div class="container">
      <div class="form-group">
        <InputLabel class="labels" htmlFor="email" label="Email Address"/>
        <Input htmlType="email" :value="email" @update:value="email = $event" />
        <InputLabel class="labels" htmlFor="password" label="Password"/>
        <Input htmlType="password" :value="password" @update:value="password = $event" />
        <ButtonBox buttonText="Sign up" :handleClick="signup"/>
        <div class="googleButton">
          <GoogleSignInButton buttonText="Sign up with Google" :handleClick="googlesignUp"/>
        </div>
      </div>
    </div>
    <div class="signin-callout">
      <p class="signin-callout-p">Already have an account? <RouterLink class="nav" :to="{ name: 'signin' }">Sign in</RouterLink></p>
    </div>
  </div>
</template>

<script >
import { signupUser } from '../components/firebaseAuth';
import { RouterLink } from 'vue-router'
import { googleSignIn } from '../components/firebaseAuth';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import authState from '../components/firebaseAuth'
import Logo from '../components/Logo.vue'
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
            passwordError: '',
            invalidEmail: ''
        }
    },
    methods: {
      signup() {
        const { email, password } = this;
        const auth = getAuth();

        signupUser(email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            if(authState.isSignedIn) {
              this.$router.push({ name: 'home' });
            }
          })
          .catch((err) => {
            if (err.code === "auth/weak-password") {
              this.passwordError = 'Password should be at least 6 characters';
            } else if (err.code === "auth/invalid-email") {
              this.invalidEmail = 'Invalid email'
            } else if (err.code === "auth/missing-password") {
              this.passwordError = 'Password cannot be empty'
            } else if(err.code === 'auth/email-already-in-use') {
              this.invalidEmail = 'User already exist'
            } else if(err.code === 'auth/missing-email') {
              this.invalidEmail = 'Email cannot be empty'
            }
          });
      },
      googlesignUp() {
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
        this.passwordError = '';
      },
      email(newValue) {
        this.invalidEmail = '';
      }
    },
    computed: {
      authState() {
            return authState;
        },
    }
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
.signin-callout-p {
    padding: 16px 50px;
    text-align: center;
    border: 1px solid hsla(210,18%,87%,1);
    border-radius: 6px;
    margin-top: 1px;
    margin-bottom: 10px;
    font-size: 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.signin-callout {
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
    padding: 8px 50px;
    text-align: center;
    width: 100%;
    border-radius: 6px;
}

</style>