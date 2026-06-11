<template>
  <div class="affection-section">
    <div class="affection-header">
      <span class="label">梁思申 好感度</span>
      <span class="stage-badge" :class="stageClass">{{ stageLabel }}</span>
    </div>
    <div class="track">
      <div class="fill" :style="{ width: fillPercent + '%' }"></div>
      <div class="ticks">
        <span class="tick" v-for="n in 4" :key="n" :style="{ left: n * 25 + '%' }"></span>
      </div>
    </div>
    <div class="affection-footer">
      <span class="value">{{ store.data.梁思申.好感度 }} / 200</span>
      <div class="controls">
        <button type="button" :disabled="store.data.梁思申.好感度 <= 0" @click="adjust(-5)">−5</button>
        <button type="button" :disabled="store.data.梁思申.好感度 >= 200" @click="adjust(5)">+5</button>
        <button type="button" :disabled="store.data.梁思申.好感度 >= 200" @click="adjust(25)">+25</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const fillPercent = $computed(() => (store.data.梁思申.好感度 / 200) * 100);

const stageLabel = $computed(() => {
  switch (store.data.梁思申.关系阶段) {
    case '初识': return '端庄人妻';
    case '动摇': return '暗流涌动';
    case '越界': return '越界挣扎';
    case '沦陷': return '彻底沦陷';
    default: return store.data.梁思申.关系阶段;
  }
});

const stageClass = $computed(() => 'stage-' + store.data.梁思申.关系阶段);

function adjust(delta: number) {
  store.data.梁思申.好感度 = store.data.梁思申.好感度 + delta;
}
</script>

<style lang="scss" scoped>
.affection-section {
  padding: 8px 10px;
  border-bottom: 1px solid var(--c-border);
}

.affection-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.label {
  font-weight: bold;
  font-size: 12px;
}

.stage-badge {
  font-size: 10px;
  padding: 1px 6px;
  border: 1px solid var(--c-border);
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.stage-初识 { background: var(--c-accent); }
.stage-动摇 { background: #c4893c; }
.stage-越界 { background: var(--c-guilt); }
.stage-沦陷 { background: var(--c-affection); }

.track {
  position: relative;
  height: 12px;
  background: var(--c-bar-bg);
  border: 1px solid var(--c-border);
  overflow: hidden;
}

.fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: var(--c-affection);
  transition: width 0.3s ease;
}

.ticks {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.tick {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(0, 0, 0, 0.15);
}

.affection-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
}

.value {
  font-size: 11px;
  color: var(--c-text-muted);
}

.controls {
  display: flex;
  gap: 3px;
}

.controls button {
  padding: 1px 6px;
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
