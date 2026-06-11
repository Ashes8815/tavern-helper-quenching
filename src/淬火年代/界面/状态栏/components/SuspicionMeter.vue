<template>
  <div class="meter-section">
    <div class="meter-header">
      <span class="label">宋运辉 察觉度</span>
      <span class="hint">{{ suspicionHint }}</span>
    </div>
    <div class="track">
      <div class="fill" :style="{ width: store.data.宋运辉.察觉度 + '%' }"></div>
    </div>
    <div class="meter-footer">
      <span class="value">{{ store.data.宋运辉.察觉度 }} / 100</span>
      <div class="controls">
        <button type="button" :disabled="store.data.宋运辉.察觉度 <= 0" @click="adjust(-5)">−5</button>
        <button type="button" :disabled="store.data.宋运辉.察觉度 >= 100" @click="adjust(5)">+5</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const suspicionHint = $computed(() => {
  const v = store.data.宋运辉.察觉度;
  if (v < 10) return '毫无察觉';
  if (v < 30) return '隐约不安';
  if (v < 50) return '开始留意';
  if (v < 70) return '试探询问';
  if (v < 90) return '接近真相';
  return '即将爆发';
});

function adjust(delta: number) {
  store.data.宋运辉.察觉度 = store.data.宋运辉.察觉度 + delta;
}
</script>

<style lang="scss" scoped>
.meter-section {
  padding: 6px 10px;
  border-bottom: 1px solid var(--c-border);
}

.meter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
}

.label {
  font-weight: bold;
  font-size: 11px;
  color: var(--c-suspicion);
}

.hint {
  font-size: 10px;
  color: var(--c-text-muted);
}

.track {
  height: 8px;
  background: var(--c-bar-bg);
  border: 1px solid var(--c-border);
  overflow: hidden;
}

.fill {
  height: 100%;
  background: var(--c-suspicion);
  transition: width 0.3s ease;
}

.meter-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3px;
}

.value {
  font-size: 10px;
  color: var(--c-text-muted);
}

.controls {
  display: flex;
  gap: 2px;
}

.controls button {
  padding: 0 5px;
  font-size: 10px;
  font-family: inherit;
  border: 1px solid var(--c-border);
  background: var(--c-card);
  cursor: pointer;
}

.controls button:active:not(:disabled) {
  background: var(--c-bar-bg);
}

.controls button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
