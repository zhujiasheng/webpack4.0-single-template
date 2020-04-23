import print from './print';

if (module.hot) {
  print();
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    print();
  })
}
