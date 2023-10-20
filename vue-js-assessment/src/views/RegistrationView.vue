<template>
  <div>
    <registration-form />
    <registration-error
      v-if="showErrorBanner"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
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

    const showErrorBanner = computed(() => store.getters.registrationStatus === 'Error');

    function closeErrorBanner() {
      showErrorBanner.value = false;
    }

    return {
      showErrorBanner,
      closeErrorBanner,
    };
  },
});
</script>
