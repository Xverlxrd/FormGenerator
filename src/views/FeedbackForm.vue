<template>
  <div class="form-container">
    <FormGenerate
        :config="formConfig"
        v-model="formData"
        @submit="handleSubmit"
    >
      <template #message="{ field }">
        <FormTextarea
            v-model="formData.message"
            :label="field.label"
            :rows="5"
            placeholder="Опишите вашу проблему..."
        />
      </template>
    </FormGenerate>
    {{store.getters.getFormData}}
  </div>
</template>

<script setup lang="ts">
import FormGenerate from "../components/FormGenerate/FormGenerate.vue";
import FormTextarea from "../components/ui/FormTextarea/FormTextarea.vue";
import { reactive } from 'vue'
import { useStore } from "vuex";
import type { FormConfig } from "../types/form.ts";

const store = useStore()

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  contactBack: true
})

const formConfig: FormConfig = {
  fields: [
    {
      name: 'name',
      type: 'input',
      label: 'Ваше имя',
      attributes: {
        placeholder: 'Как к вам обращаться?'
      }
    },
    {
      name: 'email',
      type: 'input',
      label: 'Email для ответа',
      attributes: {
        type: 'email',
        placeholder: 'example@mail.com',
        required: true
      }
    },
    {
      name: 'subject',
      type: 'select',
      label: 'Тема обращения',
      options: [
        { value: 'question', label: 'Вопрос' },
        { value: 'problem', label: 'Проблема' },
        { value: 'suggestion', label: 'Предложение' }
      ]
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Сообщение',
    },
    {
      name: 'contactBack',
      type: 'checkbox',
      label: 'Связаться для уточнения'
    }
  ],
  submitText: 'Отправить сообщение'
}

const handleSubmit = (data: typeof formData) => {
  store.dispatch('saveForm', data)
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
}
</style>