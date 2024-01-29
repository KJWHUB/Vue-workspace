<script setup lang="ts">
import { ref, useCssModule } from 'vue'

const testColor = 'aqua'
const testRefColor = ref('red')
const testThemeColor = {
  color: 'blue'
}

const $styleScript = useCssModule()
console.log('product $style:', $styleScript)

const vifTestFn = () => {
  console.log('vifTestFn')
  return true
}

// console.log('product event color:', $style.productEventColor)
</script>

<template>
  <div>
    <h1>Product</h1>
    <template v-if="vifTestFn()">
      <div>
        <h2 :class="[$style.product]">v-if 랜더링 테스트</h2>
        <h2>{{ JSON.stringify($style) }}</h2>
        <h2>{{ JSON.stringify($pinia.state.value) }}</h2>
        <h2 :class="[$style['binding-color']]">test cococo</h2>
        <h2 :class="[$style['binding-ref-color']]">test cococo</h2>
        <h2 :class="[$style['binding-objcet-color']]">test cococo</h2>
        {{ console.log('option::>', $options) }}

        <p :style="{ transform: $style ? 'rotate' : 'revert' }">style color</p>
      </div>
    </template>
  </div>
</template>

<style module lang="scss">
$productEventColor: yellow;

.product {
  color: red;
}

.binding-color {
  color: v-bind(testColor);
}
.binding-ref-color {
  color: v-bind(testRefColor);
}
.binding-objcet-color {
  color: v-bind('testThemeColor.color');
}

:export {
  productEventColor: $productEventColor;
}
</style>
