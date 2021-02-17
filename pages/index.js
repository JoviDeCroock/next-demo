import React from 'react';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <div>
      Hello world!
      <Head>
        <link rel="stylesheet" href="http://example.org" />
      </Head>
    </div>
  );
}