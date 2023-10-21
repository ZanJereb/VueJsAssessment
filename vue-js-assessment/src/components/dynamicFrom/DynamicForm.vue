<template>
  <div>
    <form>
      <slot name="form-fields"></slot>
      <div class="submit">
        <button @click.prevent="submitForm">Submit</button>
      </div>
    </form>

    <div
      v-if="!isValid"
      class="banner"
    >
      <span>{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    formDefinition: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const formData = ref({});
    const errorMessage = ref('');
    const isValid = ref(Boolean);

    function submitForm() {
      errorMessage.value = 'Error: ';
      isValid.value = true;

      props.formDefinition.forEach((field) => {
        const input = document.querySelector(`[name="${field.name}"]`);
        const { value } = input;

        if (field.required && !value) {
          isValid.value = false;
          errorMessage.value += `${field.name} is required; `;
        }

        formData.value[field.name] = value;
      });

      if (isValid.value) {
        emit('submit', formData.value);
      }
    }

    return {
      isValid,
      formData,
      errorMessage,
      submitForm,
    };
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}
span {
  color: white;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
.submit {
  text-align: right;
}
.banner {
  max-width: 420px;
  line-height: 50px;
  margin: 30px auto;
  background: #C10015;
  border-radius: 10px;
  text-align: center;
}
</style>
