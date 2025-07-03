<template>
  <div class="form_group">
    <label v-if="label" :for="id" class="form_group-label">{{ label }}</label>
    <select
        v-bind="$attrs"
        :id="id"
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        class="form_group-select"
    >
      <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";

interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
}

defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
});

defineEmits(['update:modelValue']);
</script>

<style scoped lang="scss">
.form_group {
  margin-bottom: 1rem;

  &-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  &-select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    background-color: white;
    cursor: pointer;

    &:focus {
      border-color: #42b983;
      outline: none;
      box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
    }

    &:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
  }
}
</style>