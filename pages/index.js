import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import ChatPage from '../components/chatPage';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>ChatBot</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <ChatPage />
      </div>
    </div>
  );
}
