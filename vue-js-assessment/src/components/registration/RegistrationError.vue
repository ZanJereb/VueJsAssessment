<template>
  <div class="banner">
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'RegistrationError',

  setup() {
    const store = useStore();

    const errorMessage = computed(() => store.getters.errorMessage);

    return {
      errorMessage,
    };
  },
});
</script>

<style scoped>
.banner {
  max-width: 420px;
  line-height: 50px;
  margin: 30px auto;
  background: #C10015;
  border-radius: 10px;
  text-align: center;
}
span {
  color: white;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
</style>
