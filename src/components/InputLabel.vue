<template>
    <div class="labels">
        <label :for="htmlFor">{{ label }}</label>
    </div>
</template>

<script >
export default {
  props: {
    htmlFor: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
label {
    color: #1f2328;
    font-size: 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>