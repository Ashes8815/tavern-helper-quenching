<template>
  <div class="streaming-msg">
    <div v-if="store?.data" class="panel">
      <div class="panel-top">
        <div class="panel-ornament"></div>
        <div class="panel-hdr">
          <span class="panel-date">{{ store.data.世界.当前日期 }}</span>
          <span class="panel-dot">·</span>
          <span class="panel-scene">{{ store.data.世界.当前场景 }}</span>
        </div>
        <div class="panel-ornament"></div>
      </div>
      <div class="panel-main">
        <div class="char-block">
          <div class="char-name">梁思申</div>
          <div class="char-stage" :class="stageClass">{{ stageLabel }}</div>
        </div>
        <div class="gauges">
          <div class="gauge">
            <div class="gauge-top">
              <span class="gauge-icon">♥</span>
              <span class="gauge-label">好感度</span>
              <span class="gauge-val">{{ store.data.梁思申.好感度 }}<em>/200</em></span>
            </div>
            <div class="gauge-track">
              <div class="gauge-fill aff" :style="{ width: affPct + '%' }"></div>
              <div class="gauge-ticks">
                <span v-for="n in 4" :key="n" class="gauge-tick" :style="{ left: n * 25 + '%' }"></span>
              </div>
            </div>
          </div>
          <div class="gauge">
            <div class="gauge-top">
              <span class="gauge-icon">✧</span>
              <span class="gauge-label glt-text">背德感</span>
              <span class="gauge-val">{{ store.data.梁思申.背德感 }}<em>/100</em></span>
            </div>
            <div class="gauge-track">
              <div class="gauge-fill glt" :style="{ width: store.data.梁思申.背德感 + '%' }"></div>
            </div>
          </div>
          <div class="gauge">
            <div class="gauge-top">
              <span class="gauge-icon">◈</span>
              <span class="gauge-label sus-text">宋运辉 察觉</span>
              <span class="gauge-val">{{ store.data.宋运辉.察觉度 }}<em>/100</em></span>
            </div>
            <div class="gauge-track">
              <div class="gauge-fill sus" :style="{ width: store.data.宋运辉.察觉度 + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from './store';

const store = useDataStore();

const affPct = computed(() => ((store.data?.梁思申.好感度 ?? 0) / 200) * 100);

const stageLabel = computed(() => {
  switch (store.data?.梁思申.关系阶段) {
    case '初识': return '初识';
    case '动摇': return '动摇';
    case '越界': return '越界';
    case '沦陷': return '沦陷';
    default: return store.data?.梁思申.关系阶段 ?? '初识';
  }
});

const stageClass = computed(() => 'stage-' + (store.data?.梁思申.关系阶段 ?? '初识'));
</script>

<style lang="scss" scoped>
.streaming-msg { width: 100%; }

.panel {
  max-width: 440px;
  margin: 16px auto 0;
  background: #121316;
  border: 1px solid #26282d;
  border-radius: 10px;
  overflow: hidden;
  font-family: 'Segoe UI', 'Microsoft YaHei', system-ui, sans-serif;
  color: #b8bac4;
  user-select: none;
  box-shadow: 0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02) inset;
}

.panel-top {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
  border-bottom: 1px solid #1e1f24;
  gap: 12px;
}
.panel-ornament {
  width: 32px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #3a3d44 50%, transparent);
}
.panel-hdr {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.panel-date {
  font-size: 10px;
  font-weight: 500;
  color: #6b7080;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.panel-dot {
  color: #3a3d44;
  font-size: 14px;
}
.panel-scene {
  font-size: 10px;
  color: #7b8090;
}

.panel-main {
  padding: 16px;
}

.char-block {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 16px;
}
.char-name {
  font-size: 18px;
  font-weight: 700;
  color: #e4e5ea;
  letter-spacing: 1px;
}
.char-stage {
  font-size: 10px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 3px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #fff;
  background: #2a3340;
}
.stage-初识 { background: #2a3340; }
.stage-动摇 { background: #9a6d2e; }
.stage-越界 { background: #5e4380; }
.stage-沦陷 { background: #a03d34; }

.gauges {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.gauge { }
.gauge-top {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 6px;
}
.gauge-icon {
  font-size: 12px;
  width: 16px;
  text-align: center;
  &.aff { color: #d94f3d; }
}
.gauge-icon { color: #d94f3d; }
.gauge-icon + .glt-text { & ~ * { --c: #7b5da7; } }
.gauge:nth-child(2) .gauge-icon { color: #7b5da7; }
.gauge:nth-child(3) .gauge-icon { color: #c4a23c; }

.gauge-label {
  font-size: 11px;
  font-weight: 500;
  color: #8a8e9a;
}
.glt-text { color: #9280b8; }
.sus-text { color: #c4a23c; }
.gauge-val {
  margin-left: auto;
  font-size: 12px;
  font-weight: 600;
  color: #c0c3cc;
  font-variant-numeric: tabular-nums;
  em { font-style: normal; font-weight: 400; color: #4a4d56; font-size: 10px; }
}

.gauge-track {
  position: relative;
  height: 8px;
  background: #0c0d10;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.6);
}
.gauge-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.15), transparent 60%, rgba(0,0,0,0.1));
  }
  &.aff { background: linear-gradient(90deg, #b83227, #e05343); box-shadow: 0 0 8px rgba(224,83,67,0.3); }
  &.glt { background: linear-gradient(90deg, #4e3572, #7b5da7); box-shadow: 0 0 8px rgba(123,93,167,0.3); }
  &.sus { background: linear-gradient(90deg, #8a6f24, #c4a23c); box-shadow: 0 0 8px rgba(196,162,60,0.3); }
}

.gauge-ticks {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.gauge-tick {
  position: absolute;
  top: 0; bottom: 0;
  width: 1px;
  background: rgba(255,255,255,0.06);
}
</style>
