<template>
  <div>
    <registration-form />
    <registration-error
      v-if="showErrorBanner"
    />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';

import RegistrationForm from '../components/RegistrationForm.vue';
import RegistrationError from '../components/RegistrationError.vue';

export default defineComponent({
  name: 'RegistrationView',

  components: {
    RegistrationForm,
    RegistrationError,
  },

  setup() {
    const store = useStore();

    const showErrorBanner = ref(false);
    const errorMessage = ref('');

    watch(() => store.getters.registrationStatus, (status) => {
      if (status === 'Error') {
        showErrorBanner.value = true;
      } else {
        showErrorBanner.value = false;
      }
    });

    function closeErrorBanner() {
      showErrorBanner.value = false;
    }

    return {
      showErrorBanner,
      errorMessage,
      closeErrorBanner,
    };
  },
});
</script>
