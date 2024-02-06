// pages/_app.tsx
import { AppProps } from 'next/app';
import Layout from '../components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default MyApp;
