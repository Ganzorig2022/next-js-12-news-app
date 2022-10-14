import '../styles/globals.css';
import { CustomTheme } from 'utils/theme';
import { SingleDataProvider } from '@/context/SingleData';
import { AuthProvider } from '@/context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomTheme>
        <AuthProvider>
          <SingleDataProvider>
            <Component {...pageProps} />
          </SingleDataProvider>
        </AuthProvider>
      </CustomTheme>
    </>
  );
}

export default MyApp;
