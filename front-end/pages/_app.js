import '../styles/globals.css';
import { CustomTheme } from 'utils/theme';
import { SingleDataProvider } from '@/context/SingleData';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomTheme>
        <SingleDataProvider>
          <Component {...pageProps} />
        </SingleDataProvider>
      </CustomTheme>
    </>
  );
}

export default MyApp;
