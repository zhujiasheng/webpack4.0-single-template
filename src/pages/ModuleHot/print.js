function test(){
  console.log('改变这个 页面也在变  ');
  document.body.innerHTML = '改变这个 页面也在变' + Math.random();
}

export default test;
