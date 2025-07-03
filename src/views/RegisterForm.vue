<template>
  <div class="form-container">
    <FormGenerate
        :config="formConfig"
        v-model="formData"
        @submit="handleSubmit"
    >
      <template #password="{ field }">
        <FormInput
            v-model="formData.password"
            :label="field.label"
            type="password"
            placeholder="Не менее 8 символов"
        />
      </template>
    </FormGenerate>

    {{store.getters.getFormData}}
  </div>
</template>

<script setup lang="ts">
import FormGenerate from "../components/FormGenerate/FormGenerate.vue";
import FormInput from "../components/ui/FormInput/FormInput.vue";
import { reactive } from 'vue'
import { useStore } from "vuex";
import type { FormConfig } from "../types/form.ts";

const store = useStore()

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agreeTerms: false
})

const formConfig: FormConfig = {
  fields: [
    {
      name: 'firstName',
      type: 'input',
      label: 'Имя',
      attributes: {
        placeholder: 'Введите ваше имя',
        required: true
      }
    },
    {
      name: 'lastName',
      type: 'input',
      label: 'Фамилия',
      attributes: {
        placeholder: 'Введите вашу фамилию',
        required: true
      }
    },
    {
      name: 'email',
      type: 'input',
      label: 'Email',
      attributes: {
        type: 'email',
        placeholder: 'example@mail.com',
        required: true
      }
    },
    {
      name: 'password',
      type: 'input',
      label: 'Пароль',
      attributes: {
        required: true,
        type: 'password'
      }
    },
    {
      name: 'agreeTerms',
      type: 'checkbox',
      label: 'Я согласен с условиями использования',
      attributes: {
        required: true
      }
    }
  ],
  submitText: 'Зарегистрироваться',
  cancelText: 'Отмена'
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