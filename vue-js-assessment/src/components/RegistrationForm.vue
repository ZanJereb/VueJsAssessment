<template>
  <form>
    <label for="name">
      Name:
      <input
        v-model="userData.name"
        id="name"
        type="text"
        required
      />
    </label>
    <label for="email">
      E-mail:
      <input
        v-model="userData.email"
        id="email"
        type="text"
        required
      />
    </label>
    <label for="phoneNumber">
      Phone number:
      <input
        v-model="userData.phoneNumber"
        id="phoneNumber"
        type=""
        required
        @keypress="isNumber"
      />
    </label>
    <div class="submit">
      <button @click="createUser">
        Create User
      </button>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'RegustrationForm',

  setup() {
    const store = useStore();

    const userData = ref({
      name: '',
      email: '',
      phoneNumber: '',
    });

    // Checks for errors on registration form on submit
    function checkForError(data) {
      const errorMessage = ref('');

      if (!data.value.name) {
        errorMessage.value += 'name is required; ';
      }
      if (!data.value.email) {
        errorMessage.value += 'e-mail is required; ';
      }
      if (!data.value.phoneNumber) {
        errorMessage.value += 'phone number is required;';
      }

      return errorMessage.value;
    }

    function createUser() {
      const errorMessage = checkForError(userData);

      if (errorMessage) {
        store.dispatch('createError', errorMessage);
      } else {
        store.dispatch('createUser', userData.value);
      }
    }

    // To prevent input of any other character that arent number
    function isNumber($event) {
      const keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if (keyCode < 48 || keyCode > 57) {
        $event.preventDefault();
      }
    }

    return {
      userData,
      createUser,
      isNumber,
    };
  },
});
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
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.7em;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
}
input {
  display: block;
  margin: 2px;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  color: white;
}
.submit {
  text-align: right;
}
</style>
