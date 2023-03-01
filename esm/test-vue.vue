<script setup>
const message = "Hello!";

function log() {
  // eslint-disable-next-line no-console
  console.log(message);
}
</script>

<template>
  <button type="button" class="greeting" @click="log">{{ msg }}</button>
</template>

<style scoped>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
