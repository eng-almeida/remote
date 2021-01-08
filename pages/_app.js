import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";

import Layout from '../components/Layout';
import store from '../redux/store';
import theme from '../styles/theme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp
