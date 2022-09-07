<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

const props = defineProps({
  propString: { type: String },
  propNumber: { type: Number },
  propArray: { type: Array, default: () => [] },
  propObject: { type: Object, default: () => ({}) },
  test: { type: Object, default: () => ({}) },
  'test-object': { type: Object, default: () => ({}) },
})

const count = ref(0)

// const props = defineProps({})

const emits = defineEmits(['test-event'])

onMounted(() => {
  console.log('🚀 ~ onMounted ~ onMounted', props)
})

onUnmounted(() => {
  console.log('🚀 ~ onUnmounted ~ onUnmounted')
})

onUpdated(() => {
  console.log('🚀 ~ onUpdated ~ onUpdated')
})
</script>

<template>
  <h1 class="test-webcom">
    test web component
    <div>
      <slot />
    </div>
    <div>
      <button @click="emits('test-event', {'test': 'test'})">emit event</button>
      <button @click="count++">add count {{ count }}</button>
    </div>
  </h1>
  <div>
    <p>
      propString: {{ propString }}
    </p>
    <p>
      propNumber: {{ propNumber }}
    </p>
    <p>
      propArray: {{ propArray }}
      <span v-for="i in propArray" :key="i">
        {{ i }} |
      </span>
    </p>
    <p>
      propObject: {{ propObject }}
      <span v-for="(i, key) in propObject" :key="i">
        {{ i }} | {{ key }}
      </span>
    </p>
  </div>
</template>

<style>
h1 {
  font-size: 100px;
}
.test-webcom {

}
</style>
