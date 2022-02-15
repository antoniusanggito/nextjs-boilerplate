import React from 'react';
import 'twin.macro';

const Offline: React.FC = () => (
  <div tw="flex min-h-screen flex-col items-center justify-center bg-red-300 py-2">
    <h1>Device is offline</h1>
    <h3>Please connect to an internet connection</h3>
    <img src="/static/images/icon-new.png" alt="fallback" />
  </div>
);

export default Offline;
