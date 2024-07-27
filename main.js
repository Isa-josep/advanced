import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { promiseComponent } from './src/concepts/03-promises'
import { asyncComponent } from './src/concepts/05-async'
import { asyncawaitComponent } from './src/concepts/06-async-await'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
     
    </div>
  </div>
`
// promiseComponent(document.querySelector('.card'));
// asyncComponent(document.querySelector('.card'));
asyncawaitComponent(document.querySelector('.card'));