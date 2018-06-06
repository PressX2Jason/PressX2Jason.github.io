import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';


  // var WebFontConfig = {
  //   google: { families: [ 'Roboto:400,300,500:latin' ] }
  // };
  
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
