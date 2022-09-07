<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const show = ref(true)
const visible = ref(true)

const onEmit = (event) => {
  console.log('🚀 ~ onEmit ~ event', event)
}

const dataArray = ref([])
const updateArray = () => {
  dataArray.value.push('test')
}
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <button @click="show = !show">toggle webcom show</button>
    <button @click="visible = !visible">toggle webcom visible</button>
    <button @click="updateArray">update array</button>
  </header>

  <main>
    <test-webcom
      v-if="show"
      v-show="visible"
      prop-string="string"
      prop-number="1"
      :prop-array.prop="dataArray"
      :prop-object.prop="{'key-a': 'value-a', 'key-b': 'value-b'}"
      @test-event="onEmit"
    >
      <HelloWorld msg="<slot> You did it!" />
    </test-webcom>
  </main>
</template>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
