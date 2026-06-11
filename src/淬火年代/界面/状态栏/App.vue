<template>
  <div class="status-card">
    <WorldHeader />
    <AffectionBar />
    <GuiltMeter v-if="store.data.梁思申.是否已越界" />
    <SuspicionMeter v-if="store.data.宋运辉.察觉度 > 0" />
  </div>
</template>

<script setup lang="ts">
import AffectionBar from './components/AffectionBar.vue';
import GuiltMeter from './components/GuiltMeter.vue';
import SuspicionMeter from './components/SuspicionMeter.vue';
import WorldHeader from './components/WorldHeader.vue';
import { useDataStore } from './store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.status-card {
  width: 100%;
  max-width: 640px;
  background: var(--c-card);
  border: 2px solid var(--c-border);
  font-family: var(--font-mono);
  color: var(--c-text);
  font-size: 12px;
  line-height: 1.4;
  margin: 0 auto;
  user-select: none;
}
</style>
