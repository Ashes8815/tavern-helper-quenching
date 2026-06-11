import { mountStreamingMessages } from '@util/streaming';
import { waitUntil } from 'async-wait-until';
import App from './App.vue';

$(async () => {
  await waitGlobalInitialized('Mvu');
  await waitUntil(() => _.has(getVariables({ type: 'message' }), 'stat_data'));
  const { unmount } = mountStreamingMessages(() => createApp(App).use(createPinia()), { host: 'div' });
  $(window).on('pagehide', () => unmount());
});
