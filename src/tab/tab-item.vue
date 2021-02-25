<template>
  <div
    class="digital-tab-item"
    @click="onItemClicked">
    <div class="digital-tab-item-icon" v-if="$parent.fixBottom"><slot name="icon"></slot></div>
    <div class="digital-tab-item-label"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'DigitalTabItem',
  computed: {
    activeStyle () {
      return {
        color: this.$parent.activeColor
      }
    }
  },
  data () {
    return {
      id: (this.$parent.$children.length || 1) - 1
    }
  },
  methods: {
    onItemClicked () {
      this.$parent.$emit('input', this.id)
    }
  }
}
</script>

<style>
.digital-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.digital-tab-item-icon {
  margin: 0 auto 5px;
}

</style>
