import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { waitUntil } from 'async-wait-until';
import App from './App.vue';

$(async () => {
  await waitGlobalInitialized('Mvu');
  await waitUntil(() => _.has(getVariables({ type: 'message' }), 'stat_data'));
  const app = createApp(App).use(createPinia());
  const el = document.querySelector('StatusPlaceHolderImpl');
  if (el) {
    const wrapper = document.createElement('div');
    el.replaceWith(wrapper);
    app.mount(wrapper);
  }
  $(window).on('pagehide', () => app.unmount());
});
