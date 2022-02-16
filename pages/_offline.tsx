import React from 'react';
import 'twin.macro';
import { Layout } from '../components/Utils/Layout';

const Offline: React.FC = () => (
  <Layout>
    <div tw="pt-8 pb-16 flex min-h-screen flex-col items-center justify-center bg-red-300">
      <h1 tw="text-xl font-bold">Your device is offline</h1>
      <h3>Please check your internet connection.</h3>
      {/* <img src="/static/images/icon-new.png" alt="fallback" /> */}
    </div>
  </Layout>
);

export default Offline;
