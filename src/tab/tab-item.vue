<template>
  <a class="digital-tab-item"
       :style="$parent.value === id ? activeStyle : {}"
       @click="onItemClicked">
    <div class="digital-tab-item-icon"><slot name="icon"></slot></div>
    <div class="digital-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  name: 'DigitalTabItem',
  computed: {
    activeStyle () {
      return {
        color: this.$parent.activeColor,
        borderColor: this.$parent.activeColor,
        borderWidth: this.$parent.lineWidth,
        borderBottomStyle: 'solid'
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

<style lang="scss">
.digital-tab-item {
  text-decoration: none;
  text-align: center;
  .digital-tab-item-icon {
    margin: 0 auto 5px;
  }
  .digital-tab-item-label {
    margin: 0 auto 10px;
    line-height: 18px;
  }
}
</style>
