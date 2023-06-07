<template>
    <div class="warningBox">
        <p v-if="showWarning" class="warning">{{ warningText }}</p>
    </div>
</template>

<script >
export default {
  props: {
    showWarning: {
      type: Boolean,
      required: true
    },
    warningText: {
      type: String,
      required: true
    }
  }
};

</script>

<style scoped>
.warning {
  color: #ff3b3b;
  font-size: 14px;
  border: 1px solid #ff9191;
  padding: 15px 60px;
  border-radius: 6px;
  background-color: #ffeaec;
  margin-bottom: -5px;
}
.warningBox {
    display: flex;
    justify-content: center;
}

</style>