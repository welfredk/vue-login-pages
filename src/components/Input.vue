<template>
    <div>
        <input :type="htmlType" class="input" :value="value" @input="$emit('update:value', $event.target.value)">
    </div>
</template>

<script >
export default {
  props: {
    htmlType: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.input {
    margin-top: 4px;
    margin-bottom: 16px;
    width: 100%;
    height: 24px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>