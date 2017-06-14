import React from 'react';
import ReactDOM from 'react-dom';

import '@xo-union/tk-css-essentials';

import HeaderNav from '@xo-union/tk-component-header-nav';
import FooterNav from '@xo-union/tk-component-footer-nav';

function App() {
  return (
    <div>
      <HeaderNav />
        <div style={{marginBottom: '500px'}}>
          {/* Put your app stuff here */}
        </div>
      <FooterNav />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
