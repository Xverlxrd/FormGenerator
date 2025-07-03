<template>
  <div class="form_group">
    <label v-if="label" :for="id" class="form_group-label">{{ label }}</label>
    <input
        :id="id"
        :value="modelValue"
        v-bind="$attrs"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="form_group-input"
    />
  </div>
</template>

<script setup lang="ts">
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
  }
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

  &-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      border-color: #42b983;
      outline: none;
      box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
    }
  }
}


</style>