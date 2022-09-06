import { defineCustomElement } from 'vue'
import TestWebcom from '@/elements/TestWebcom.ce.vue'

const MyVueElement = defineCustomElement(TestWebcom)

window.customElements.define(
  'test-webcom',
  MyVueElement,
)
