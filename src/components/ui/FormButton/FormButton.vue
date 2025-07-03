<template>
  <button
      class="form_button"
      v-bind="$attrs"
      :type="type"
      @click="$emit('click', $event)"
  >
    <span class="form_button-text">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">

defineProps({
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  }
})
defineEmits(['click'])
</script>

<style scoped lang="scss">
.form_button {
  position: relative;
  padding: 0.625rem 1.25rem;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  min-width: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;


  &-text {
    background: transparent;
    color: #42b983;
    border: none;
    padding: 0.25rem 0.5rem;
    min-width: auto;
  }
}
</style>