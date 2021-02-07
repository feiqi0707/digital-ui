import DigitalUI from './src/index'
import Vue from 'vue'
import { commonJssdk } from 'digital-jsapi'
const install = function (Vue, config = {}) {
  if (install.installed) return
  let compKeys = commonJssdk.objectSDK.ownKeys(DigitalUI)
  for (let i = 0; i < compKeys.length; i++) {
    Vue.component(DigitalUI[compKeys[i]].name, DigitalUI[compKeys[i]])
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  DigitalUI
}
