<script setup lang="ts">
const message = 'Hello!'

const log = (): void => {
  // eslint-disable-next-line no-console
  console.log(message)
}
</script>

<template>
  <button :class="$style.greeting" type="button" @click="log">
    {{ message }}
  </button>
</template>

<style module>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
