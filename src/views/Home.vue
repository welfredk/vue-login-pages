<template>
    <Logo />
    <div class="signin-form">
        <h1 class="heading">Signed in!</h1>
        <div class="container">
            <div class="form-group">
                <ButtonBox buttonText="Log out" :handleClick="signout"/>
            </div>
        </div>
    </div>
</template>

<script >
import { signoutUser } from '../components/firebaseAuth';
import Logo from '../components/Logo.vue';
import ButtonBox from '../components/BottonBox.vue';

export default {
    components: {
        Logo,
        ButtonBox
    },
    methods: {
        signout() {
            signoutUser()
                .then((data) => {
                    this.$router.push( { name: 'signin' } )
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}

</script>

<style scoped>

.topHead {
    display: flex;
    justify-content: center;
    padding-bottom: 14px;
}

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

.button {
    font-family: inherit;
    line-height: 20px;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 550;
    color: #ffffff;
    background-color: #30a14e;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin: 4px;
    width: 100%;
}

.buttonBox {
    display: flex;
    justify-content: center;
}

.button:hover {
  background-color: #216e39;
}

label {
    color: #1f2328;
    font-size: 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


.heading {
    margin: 0;
    color: #1f2328;
    font-weight: 300;
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

* {
    box-sizing: border-box;
}

</style>