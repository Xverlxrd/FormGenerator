<template>
  <form class="form">
    <FormInput
        v-model="username"
        label="Имя пользователя"
        type="text"
        placeholder="Введите имя"
        id="username"
        autocomplete="off"
        required
    />
    <FormTextarea
        v-model="comment"
        label="Комментарий"
        placeholder="Напишите ваш комментарий..."
        id="comment"
        rows="5"
        maxlength="500"
    />
    <FormSelect
        :options="cities"
        label="Fewfw"
        id="city"
        v-model="city"

    />
    {{username}}
    {{comment}}
  </form>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import FormInput from "../ui/FormInput/FormInput.vue";
import FormTextarea from "../ui/FormTextarea/FormTextarea.vue";
import FormSelect from "../ui/FormSelect/FormSelect.vue";

const username = ref('');
const comment = ref('');
const city = ref('');
const cities = [
  { value: 'moscow', label: 'Москва' },
  { value: 'spb', label: 'Санкт-Петербург' },
  { value: 'kazan', label: 'Казань', disabled: true },
  { value: 'novosibirsk', label: 'Новосибирск' },
];

watch(city, () => console.log(city.value))
</script>

<style scoped>
.form {
  width: 500px;
  height: 100%;
}
</style>