<template>
  <form class="form-generator" @submit.prevent="handleSubmit">
    <div v-for="field in config.fields" :key="field.name" class="form-field">
      <component
          :is="fieldComponents[field.type] || FormInput"
          v-model="formData[field.name]"
          :label="field.label"
          :options="field.options"
          v-bind="field.attributes || {}"
      />
    </div>

    <div class="form-actions">
      <FormButton type="submit" >
        {{ config.submitText || 'Сохранить' }}
      </FormButton>
      <FormButton type="reset" @click="handleReset">
        {{ config.cancelText || 'Отмена' }}
      </FormButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import FormButton from "../ui/FormButton/FormButton.vue";
import FormInput from "../ui/FormInput/FormInput.vue";
import FormSelect from "../ui/FormSelect/FormSelect.vue";
import FormCheckbox from "../ui/FormCheckbox/FormCheckbox.vue";
import FormTextarea from "../ui/FormTextarea/FormTextarea.vue";
import {useStore} from "vuex";

const fieldComponents: Record<string, any> = {
  input: FormInput,
  select: FormSelect,
  checkbox: FormCheckbox,
  textarea: FormTextarea
}

const props = defineProps({
  config: {
    type: Object as () => {
      fields: Array<{
        name: string
        type: 'input' | 'select' | 'checkbox' | 'textarea'
        label?: string
        attributes?: Record<string, unknown>
        options?: Array<{ value: unknown, label: string }>
      }>
      submitText?: string
      cancelText?: string
    },
    required: true,
    default: () => ({
      fields: [],
      submitText: 'Сохранить',
      cancelText: 'Отмена'
    })
  },
  modelValue: {
    type: Object as () => Record<string, unknown>,
    required: true
  },
  submitDisabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'submit', 'cancel'])
const store = useStore();

const formData = ref({ ...props.modelValue })

watch(() => props.modelValue,
    (newValue) => {
      formData.value = { ...newValue }
    },
    { deep: true }
)

const handleSubmit = () => {
  emit('update:modelValue', formData.value)
  emit('submit', formData.value)
}

const handleReset = () => {
  store.dispatch('clearForm');
  formData.value = {}
};
</script>

<style lang="scss" scoped>
.form-generator {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.form-field {
  margin-bottom: 1rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}
</style>