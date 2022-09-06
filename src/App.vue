<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const show = ref(true)
const visible = ref(true)

const onEmit = (event) => {
  console.log('🚀 ~ onEmit ~ event', event)
}

</script>

<template>
  <header>
    <button @click="show = !show">toggle webcom show</button>
    <button @click="visible = !visible">toggle webcom visible</button>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <test-webcom
      v-if="show"
      v-show="visible"
      prop-string="string"
      prop-number="1"
      :prop-array.prop="['a', 'b']"
      :prop-object.prop="{'a': 'a', 'b': 'b'}"
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
