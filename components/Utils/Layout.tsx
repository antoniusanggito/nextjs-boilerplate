import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useOnlineStatus } from './useOnlineStatus';
import 'twin.macro';

export const Layout: React.FC = ({ children }) => {
  const isOnline = useOnlineStatus();
  // const [status, setStatus] = useState(isOnline);

  // useEffect(() => {
  //   localStorage.setItem('isOnline', JSON.stringify(isOnline));
  //   const data = localStorage.getitem('isOnline');
  //   setStatus(JSON.parse(data));
  // }, [isOnline]);

  return (
    <>
      <Head>
        <title>NextJS Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="icon" type="image/png" href="/icon-192x192.png" />
      </Head>
      <div tw="min-h-screen flex flex-col items-center justify-center">
        <div tw="min-h-screen w-full">{children}</div>
        {!isOnline && (
          <div tw="bg-yellow-300 w-full fixed bottom-10 text-center">
            You are Offline!
          </div>
        )}
        <div tw="fixed bg-white bottom-0 border w-full">
          <div tw="flex justify-center items-center h-10">
            <p>Ceritanya Navbar</p>
          </div>
        </div>
      </div>
    </>
  );
};
