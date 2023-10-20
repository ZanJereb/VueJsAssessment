<template>
  <registration-form />
</template>

<script>
import { defineComponent } from 'vue';
import RegistrationForm from '../components/RegistrationForm.vue';

export default defineComponent({
  name: 'RegistrationView',

  components: {
    RegistrationForm,
  },
});
</script>
