import React from 'react';
import './App.css';
import QRCode from 'qrcode.react';

function App() {
  return (
    <div className='App'>
      <h1>Test React QR Code</h1>
      <QRCode
        id='qrcode'
        value='https://github.com/diennguyenduy'
        size={200}
        level={'H'}
        includeMargin={true}
      />
    </div>
  );
}

export default App;
