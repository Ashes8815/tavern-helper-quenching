import { mountStreamingMessages } from '@util/streaming';
import { waitUntil } from 'async-wait-until';
import App from './App.vue';

$(async () => {
  await waitGlobalInitialized('Mvu');
  await waitUntil(() => {
    const vars = getVariables({ type: 'message' });
    return _.has(vars, 'stat_data.世界') && _.has(vars, 'stat_data.梁思申') && _.has(vars, 'stat_data.宋运辉');
  });
  const { unmount } = mountStreamingMessages(() => createApp(App).use(createPinia()), { host: 'div' });
  $(window).on('pagehide', () => unmount());
});
