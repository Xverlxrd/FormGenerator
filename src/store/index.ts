import { createStore } from 'vuex';

export default createStore({
    state: {
        formData: {}
    },
    mutations: {
        SAVE_FORM_DATA(state, formData) {
            state.formData = { ...formData };
        },
        CLEAR_FORM_DATA(state) {
            state.formData = {};
        }
    },
    actions: {
        saveForm({ commit }, formData) {
            commit('SAVE_FORM_DATA', formData);
            alert('Данные сохранены:');
            console.log(formData)
        },
        clearForm({ commit }) {
            commit('CLEAR_FORM_DATA');
            alert('Данные формы очищены');
        }
    },
    getters: {
        getFormData: (state) => state.formData
    }
});