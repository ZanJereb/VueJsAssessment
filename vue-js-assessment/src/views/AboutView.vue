<template>
  <div>
    <h1>This is an about page with custom directives</h1>
    <p v-highlight="'yellow'">Hover over this text to highlight it in yellow.</p>
    <p v-highlight="'lightblue'">Hover over this text to highlight it in light blue.</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',

});
</script>
