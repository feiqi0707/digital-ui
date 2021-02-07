# digitalcnzz-ui-library

 数字郑州前端UI组件库

## Installation
```shell
npm i digital-ui -S

```
or
```shell
yarn add digital-ui

```

## Usage

```javascript
import Vue from 'vue'
import {DigitalTab} from 'digital-ui'

Vue.use(DigitalTab)
// 之后便可在全局使用了
```

### Example (DigitalTab(可滚动菜单、轮播、展示型组件))

`````` JS
items: {
        contents:
        [
          {
            title: {name: '首页', customStyle: {textAlign: 'left'}},
            subTitle: {name: '子标题', customStyle: {textAlign: 'left'}},
            customStyle: {textAlign: 'left'}
          },
          {
            title: {name: '首页1', customStyle: {textAlign: 'left'}},
            subTitle: {name: '子标题1', customStyle: {textAlign: 'left'}},
            customStyle: {textAlign: 'left'}
          },
          {
            title: {name: '首页', customStyle: {textAlign: 'left'}},
            subTitle: {name: '子标题', customStyle: {textAlign: 'left'}},
            customStyle: {textAlign: 'left'}
          },
          {
            title: {name: '首页1', customStyle: {textAlign: 'left'}},
            subTitle: {name: '子标题1', customStyle: {textAlign: 'left'}},
            customStyle: {textAlign: 'left'}
          }
        ],
        customStyle: {flexGrow: 0, width: '85px', backgroundColor: '#fff', borderRadius: '5px', textAlign: 'left', padding: '5px 20px', height: '50px'}
      },
      options: {
        activeColor: '#1d98bd',
        fixBottom: false
      },
      bottomItems: {
        contents: [
          {title: {name: '首页', icon: 'iconfont icon-Homehomepagemenu', customStyle: {}}},
          {title: {name: '消息', icon: 'iconfont icon-message', customStyle: {}}},
          {title: {name: '发现', icon: 'iconfont icon-search', customStyle: {}}},
          {title: {name: '我的', icon: 'iconfont icon-me', customStyle: {}}}
        ],
        customStyle: {flexGrow: 1}
      },
```


## Build Setup

```bash
# install dependencies
npm install
# or
yarn

# serve with hot reload at localhost:8080
npm run dev
# or
yarn dev

```

## License
MIT
