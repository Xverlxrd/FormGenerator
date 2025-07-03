<template>
  <label class="checkbox_group">
    <input
        type="checkbox"
        v-bind="$attrs"
        :checked="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
        class="checkbox_group-input"
    >
    <span class="checkbox_group-custom"></span>
    <span v-if="label" class="checkbox_group-label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
.checkbox_group {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 8px;
  margin: 4px 0;

  &-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:focus-visible + .checkbox_group-custom {
      box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.3);
    }

    &:checked + .checkbox_group-custom {
      background-color: #42b983;
      border-color: #42b983;

      &::after {
        display: block;
      }
    }

    &:disabled + .checkbox_group-custom {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  &-custom {
    position: relative;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    border: 2px solid #ccc;
    border-radius: 4px;
    transition: all 0.2s ease;

    &::after {
      content: "";
      position: absolute;
      display: none;
      left: 7px;
      top: 2px;
      width: 4px;
      height: 9px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  &-label {

    font-size: 14px;
    line-height: 1.4;
  }
}
</style>