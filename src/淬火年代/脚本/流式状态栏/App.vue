<template>
  <div class="streaming-msg">
    <div class="msg-text" v-html="msgHtml"></div>
    <div class="status-card">
      <div class="sb-hdr">
        <span class="sb-date">{{ store.data.世界.当前日期 }}</span>
        <span class="sb-div">|</span>
        <span class="sb-scene">{{ store.data.世界.当前场景 }}</span>
      </div>
      <div class="sb-body">
        <div class="sb-main-row">
          <span class="sb-name">梁思申</span>
          <span class="sb-stage" :class="stageClass">{{ stageLabel }}</span>
        </div>
        <div class="sb-bar">
          <div class="sb-fill sb-fill-aff" :style="{ width: affPct + '%' }"></div>
        </div>
        <div class="sb-val">好感度 <strong>{{ store.data.梁思申.好感度 }}</strong> / 200</div>
        <div class="sb-btns">
          <button :disabled="store.data.梁思申.好感度 <= 0" @click="adjAff(-5)">−5</button>
          <button :disabled="store.data.梁思申.好感度 >= 200" @click="adjAff(5)">+5</button>
          <button :disabled="store.data.梁思申.好感度 >= 200" @click="adjAff(25)">+25</button>
        </div>
        <div v-if="store.data.梁思申.是否已越界" class="sb-divider"></div>
        <div v-if="store.data.梁思申.是否已越界" class="sb-sub">
          <div class="sb-sub-hdr">
            <span class="sb-sub-label glt"><span class="sb-dot glt"></span>背德感</span>
            <span class="sb-sub-val"><strong>{{ store.data.梁思申.背德感 }}</strong> / 100</span>
          </div>
          <div class="sb-bar"><div class="sb-fill sb-fill-glt" :style="{ width: store.data.梁思申.背德感 + '%' }"></div></div>
          <div class="sb-btns">
            <button :disabled="store.data.梁思申.背德感 <= 0" @click="adjGuilt(-5)">−5</button>
            <button :disabled="store.data.梁思申.背德感 >= 100" @click="adjGuilt(5)">+5</button>
          </div>
        </div>
        <div v-if="store.data.宋运辉.察觉度 > 0" class="sb-divider"></div>
        <div v-if="store.data.宋运辉.察觉度 > 0" class="sb-sub">
          <div class="sb-sub-hdr">
            <span class="sb-sub-label sus"><span class="sb-dot sus"></span>宋运辉 察觉</span>
            <span class="sb-sub-val"><strong>{{ store.data.宋运辉.察觉度 }}</strong> / 100</span>
          </div>
          <div class="sb-bar"><div class="sb-fill sb-fill-sus" :style="{ width: store.data.宋运辉.察觉度 + '%' }"></div></div>
          <div class="sb-btns">
            <button :disabled="store.data.宋运辉.察觉度 <= 0" @click="adjSus(-5)">−5</button>
            <button :disabled="store.data.宋运辉.察觉度 >= 100" @click="adjSus(5)">+5</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { injectStreamingMessageContext } from '@util/streaming';
import { useDataStore } from './store';

const context = injectStreamingMessageContext();
const store = useDataStore();

const msgHtml = computed(() => {
  if (!context.message) return '';
  try {
    return formatAsDisplayedMessage(context.message, { message_id: context.message_id })
      .replaceAll('mes_text', 'mes_streaming');
  } catch {
    return _.escape(context.message).replace(/\n/g, '<br>');
  }
});

const affPct = $computed(() => (store.data.梁思申.好感度 / 200) * 100);
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

function adjAff(d: number) { store.data.梁思申.好感度 += d; }
function adjGuilt(d: number) { store.data.梁思申.背德感 += d; }
function adjSus(d: number) { store.data.宋运辉.察觉度 += d; }
</script>

<style lang="scss" scoped>
.streaming-msg { width: 100%; }
.msg-text { line-height: calc(var(--mainFontSize) + 0.5rem); overflow-wrap: anywhere; }
.status-card {
  max-width: 520px; margin: 12px auto 0; background: #1e1e1e; border: 1px solid #3a3a3a; border-radius: 6px; overflow: hidden; font-size: 13px; color: #d4d4d4; user-select: none;
}
.sb-hdr { display: flex; align-items: center; gap: 8px; padding: 7px 12px; background: linear-gradient(135deg, #1a3340, #254a5e); border-bottom: 1px solid #3a3a3a; font-size: 12px; }
.sb-date { color: #b8d4e3; letter-spacing: 0.5px; }
.sb-div { color: #4a7c96; font-size: 10px; }
.sb-scene { color: #e0e0e0; flex: 1; text-align: right; }
.sb-body { padding: 10px 12px 8px; }
.sb-main-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
.sb-name { font-weight: 600; font-size: 14px; color: #e8e8e8; }
.sb-stage { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 3px; letter-spacing: 1px; color: #fff; background: #4a7c96; }
.stage-初识 { background: #4a7c96; }
.stage-动摇 { background: #c4893c; }
.stage-越界 { background: #7b5ea7; }
.stage-沦陷 { background: #c44536; }
.sb-bar { height: 8px; background: #1a1a1a; border-radius: 4px; overflow: hidden; margin-bottom: 3px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.4); }
.sb-fill { height: 100%; border-radius: 4px; transition: width 0.4s ease; }
.sb-fill-aff { background: linear-gradient(90deg, #c44536, #e05545); }
.sb-fill-glt { background: linear-gradient(90deg, #6b4c8a, #8b6cae); }
.sb-fill-sus { background: linear-gradient(90deg, #a0842c, #c9a43c); }
.sb-val { font-size: 11px; color: #888; margin-bottom: 4px; }
.sb-val strong { color: #c0c0c0; font-weight: 600; }
.sb-btns { display: flex; gap: 3px; margin-top: 2px; }
.sb-btns button { padding: 1px 6px; font-size: 10px; font-family: inherit; border: 1px solid #3a3a3a; background: #2a2a2a; color: #b0b0b0; border-radius: 3px; cursor: pointer; }
.sb-btns button:hover:not(:disabled) { background: #3a3a3a; color: #e0e0e0; }
.sb-btns button:disabled { opacity: 0.35; cursor: not-allowed; }
.sb-divider { height: 1px; background: #3a3a3a; margin: 8px 0; }
.sb-sub { margin-bottom: 2px; }
.sb-sub-hdr { display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px; }
.sb-sub-label { font-size: 11px; font-weight: 600; display: flex; align-items: center; gap: 5px; }
.sb-sub-label.glt { color: #9b84c0; }
.sb-sub-label.sus { color: #c9a43c; }
.sb-dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
.sb-dot.glt { background: #7b5ea7; }
.sb-dot.sus { background: #c9a43c; }
.sb-sub-val { font-size: 10px; color: #888; }
.sb-sub-val strong { color: #c0c0c0; font-weight: 600; }
</style>
