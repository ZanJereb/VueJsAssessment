<template>
  <form>
    <label for="username">
      Username:
      <input
        v-model="userData.username"
        id="username"
        type="text"
      />
    </label>
    <label for="password">
      Password:
      <input
        v-model="userData.password"
        id="password"
        type="password"
      />
    </label>
    <label for="name">
      Name:
      <input
        v-model="userData.name"
        id="name"
        type="text"
      />
    </label>
    <label for="surname">
      Surname:
      <input
        v-model="userData.surname"
        id="surname"
        type="text"
      />
    </label>
    <label for="email">
      E-mail:
      <input
        v-model="userData.email"
        id="email"
        type="text"
      />
    </label>
    <label for="phoneNumber">
      Phone number:
      <input
        v-model="userData.phoneNumber"
        id="phoneNumber"
        type=""
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

export default defineComponent({
  name: 'RegustrationForm',

  setup() {
    const userData = ref({
      username: '',
      password: '',
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
    });

    function createUser() {
      this.$store.dispatch('createUser', userData);

      console.log(this.$store.state.registration.userData);
    }

    // To prevent input of any other character that arent number or '+'
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

<style>
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
