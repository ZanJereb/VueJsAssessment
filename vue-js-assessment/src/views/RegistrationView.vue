<template>
  <div>
    <registration-form />
    <registration-error v-if="showErrorBanner" />
    <registartion-success v-if="showSuccessBanner" />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import RegistrationForm from '../components/registration/RegistrationForm.vue';
import RegistrationError from '../components/registration/RegistrationError.vue';
import RegistartionSuccess from '../components/registration/RegistrationSuccess.vue';

export default defineComponent({
  name: 'RegistrationView',

  components: {
    RegistrationForm,
    RegistrationError,
    RegistartionSuccess,
  },

  setup() {
    const store = useStore();

    const showErrorBanner = computed(() => store.getters.registrationStatus === 'Error');
    const showSuccessBanner = computed(() => store.getters.registrationStatus === 'Error');

    return {
      showErrorBanner,
      showSuccessBanner,
    };
  },
});
</script>
