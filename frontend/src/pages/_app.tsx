import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Page from '../components/Page';
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Page>
        <Head>
          <title>hello</title>
        </Head>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
};

export default MyApp;
