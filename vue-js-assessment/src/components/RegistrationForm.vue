<template>
  <form>
    <label for="username">
      Username:
      <input
        v-model="userData.username"
        id="username"
        type="text"
        required
      />
    </label>
    <label for="password">
      Password:
      <input
        v-model="userData.password"
        id="password"
        type="password"
        required
      />
    </label>
    <label for="repeatPassword">
      Repeat password:
      <input
        v-model="userData.repeatPassword"
        id="repeatPassword"
        type="password"
        required
      />
    </label>
    <label for="name">
      Name:
      <input
        v-model="userData.name"
        id="name"
        type="text"
        required
      />
    </label>
    <label for="surname">
      Surname:
      <input
        v-model="userData.surname"
        id="surname"
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
      <button @click="createAccount">
        Create an Account
      </button>
    </div>
  </form>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'RegustrationForm',

  setup() {
    const userData = reactive({
      username: '',
      password: '',
      repeatPassword: '',
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
    });

    function createAccount() {

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
      createAccount,
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
