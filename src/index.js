import './style2.scss';
import './style.css';
import imgurl from './test.jpeg';
import printMe from './print.js';
import {test} from './test';
import {test2} from './test2';

function component() {
  var element = document.createElement('div');
  element.setAttribute('class','item');
  // cosnole.error('I get called from print.js!');
  var itemlist = `<div class="item_list">item_list</div>`;
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack22',itemlist], ' ');

  return element;
}

document.body.appendChild(component());

var img = new Image();
img.src = imgurl;
document.body.append(img);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })

  module.hot.accept('./test.js', function() {
     test();
  })

  module.hot.accept('./test2.js', function() {
    test2();
  })
}

if (process.env.NODE_ENV != 'production') {
  console.log(`当前环境是${process.env.NODE_ENV}`);
}
