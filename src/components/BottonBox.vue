<template>
  <div class="buttonBox">
    <button class="button" @click="handleClick">{{ buttonText }}</button>
  </div>
</template>

<script >
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    handleClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
.buttonBox {
    display: flex;
    justify-content: center;
}
.button:hover {
  background-color: #216e39;
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
</style>