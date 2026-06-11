<template>
  <div class="meter-section">
    <div class="meter-header">
      <span class="label">背德感</span>
      <span class="hint">越界后的罪恶</span>
    </div>
    <div class="track">
      <div class="fill" :style="{ width: store.data.梁思申.背德感 + '%' }"></div>
    </div>
    <div class="meter-footer">
      <span class="value">{{ store.data.梁思申.背德感 }} / 100</span>
      <div class="controls">
        <button type="button" :disabled="store.data.梁思申.背德感 <= 0" @click="adjust(-5)">−5</button>
        <button type="button" :disabled="store.data.梁思申.背德感 >= 100" @click="adjust(5)">+5</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

function adjust(delta: number) {
  store.data.梁思申.背德感 = store.data.梁思申.背德感 + delta;
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
  color: var(--c-guilt);
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
  background: var(--c-guilt);
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
