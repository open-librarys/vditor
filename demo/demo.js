// webpack.demo.js
import Vditor from '../src/index'
// import Vditor from 'vditor'
// import Vditor from '../dist/index.min'

const vditor = new Vditor('vditor', {
  toolbar: [
    'emoji', {
      name: 'bold',
      icon: '123',
      tip: 'bbbb',
    }],
})