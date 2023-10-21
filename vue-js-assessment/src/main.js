/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App).use(store).use(router);

app.directive('highlight', {
  beforeMount(el, binding) {
    const color = binding.value;

    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = color;
    });

    el.addEventListener('mouseleave', () => {
      el.style.backgroundColor = '';
    });
  },

  unbind(el) {
    el.removeEventListener('mouseenter');
    el.removeEventListener('mouseleave');
  },
});

app.mount('#app');
