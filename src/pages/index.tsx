import type { NextPage } from 'next';
import Head from 'next/head';
import { Provider } from 'react-redux';
import {store} from '../app/store'
import { Exercise } from '../Exercise';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Form Time!</title>
        <meta name="description" content="IABBB Form Exercise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Form Exercise</h1>
        <Provider store={store}>
        <Exercise />
        </Provider>
      </main>
    </div>
  );
};

export default Home;
