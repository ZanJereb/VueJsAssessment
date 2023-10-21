<template>
  <div>
    <dynamic-form
      :form-definition="formDefinition"
      @submit="handleFormSubmit"
    >
      <template #form-fields>
        <div
          v-for="field in formDefinition"
          :key="field.name"
        >
          <label :for="field.name">
            {{ field.label }}
            <input
              v-model="formData[field.name]"
              :type="field.type"
              :name="field.name"
            />
          </label>
        </div>
      </template>
    </dynamic-form>
  </div>
</template>

<script>
import { ref } from 'vue';
import DynamicForm from '../components/dynamicFrom/DynamicForm.vue';

export default {
  components: {
    DynamicForm,
  },
  setup() {
    const formData = ref({});

    const formDefinition = ref([
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        required: true,
      },
      {
        name: 'email',
        label: 'Email',
        type: 'text',
        required: true,
      },
    ]);

    const handleFormSubmit = (data) => {
      console.log('Form Data:', data);
    };

    return {
      formDefinition,
      formData,
      handleFormSubmit,
    };
  },
};
</script>

<style scoped>
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
</style>
