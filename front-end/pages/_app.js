import '../styles/globals.css';
import { CustomTheme } from 'utils/theme';
import { SingleDataProvider } from '@/context/SingleData';
import { AuthProvider } from '@/context/AuthContext';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('running');
  }, []);
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
