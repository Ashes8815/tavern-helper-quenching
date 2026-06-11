<template>
  <div class="streaming-msg">
    <div class="msg-text" v-html="msgHtml"></div>
  </div>
</template>

<script setup lang="ts">
import { injectStreamingMessageContext } from '@util/streaming';

const context = injectStreamingMessageContext();

const msgHtml = computed(() => {
  if (!context.message) return '';
  try {
    return formatAsDisplayedMessage(context.message, { message_id: context.message_id })
      .replaceAll('mes_text', 'mes_streaming');
  } catch {
    return _.escape(context.message).replace(/\n/g, '<br>');
  }
});
</script>

<style scoped>
.streaming-msg { width: 100%; }
.msg-text {
  line-height: calc(var(--mainFontSize) + 0.5rem);
  overflow-wrap: anywhere;
}
</style>
