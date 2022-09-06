<script setup>
// const props = defineProps({
//   msg: { type: String },
// })

const props = defineProps({})
</script>

<template>
  <h1 class="test-webcom">
    test web component
    <div>
      <slot />
    </div>
  </h1>
</template>

<style>
h1 {
  font-size: 100px;
}
.test-webcom {

}
</style>
