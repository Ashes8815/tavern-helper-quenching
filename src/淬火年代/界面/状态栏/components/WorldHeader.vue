<template>
  <div class="world-header">
    <span class="date">{{ store.data.世界.当前日期 }}</span>
    <span class="divider">|</span>
    <span class="scene">{{ store.data.世界.当前场景 }}</span>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.world-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: var(--c-accent);
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.divider {
  opacity: 0.5;
}

.scene {
  font-weight: normal;
  opacity: 0.9;
}
</style>
