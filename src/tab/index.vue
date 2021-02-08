<template>
<div class="tab-list">
  <digital-tabbar
    v-model="selectedId"
    v-bind="options"
  >
    <digital-tab-item
      class="tab-item"
      v-for="(item, index) in items.contents"
      :key="index"
      :style="items.customStyle"
      >
      <div
        v-if="options.fixBottom && item.title.icon"
        slot="icon">
        <i :class="item.title.icon"></i>
      </div>
      <div class="title" :style="item.title.customStyle">{{ item.title.name }}</div>
      <div class="sub-title" :style="item.subTitle && item.subTitle.customStyle">{{ item.subTitle && item.subTitle.name }}</div>
    </digital-tab-item>
  </digital-tabbar>
</div>
</template>

<script>
import DigitalTabbar from './tabbar'
import DigitalTabItem from './tab-item'

export default {
  name: 'DigitalTab',
  components: {
    DigitalTabbar,
    DigitalTabItem
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    items: {
      type: Object,
      default () {
        return {}
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      selectedId: this.value
    }
  },
  computed: {
    labelKey () {
      return this.options.labelKey || 'label'
    }
  },
  watch: {
    value (value) {
      this.selectedId = value
    },
    selectedId (value) {
      this.$emit('input', value)
      this.$emit('change', this.items.contents[value], value)
    }
  }
}
</script>

<style>

.tab-list{
  background-color: #c5c1c1;
}

</style>
