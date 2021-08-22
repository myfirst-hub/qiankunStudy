import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render (props) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  ); // 这里是挂载到自己的html中，基座会拿到这个挂载后的html 将其插入进去
}

if (window.__POWERED_BY_QIANKUN__) { // 动态添加publicPath
  console.log('window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__.........', window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
if (!window.__POWERED_BY_QIANKUN__) { // 默认独立运行
  render()
}

export async function bootstrap (props) {
  console.log('props.............', props)
}

export async function mount (props) {
  render(props)
}

export async function unmount (props) {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
