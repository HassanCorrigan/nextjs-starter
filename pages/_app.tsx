import Layout from 'components/layout';
import { AppProps } from 'next/app';
import 'public/styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
