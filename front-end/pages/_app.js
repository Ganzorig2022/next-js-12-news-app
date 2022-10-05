import '../styles/globals.css';
import { CustomTheme } from 'utils/theme';
import { PostIdProvider } from '@/context/PostId';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomTheme>
        <PostIdProvider>
          <Component {...pageProps} />
        </PostIdProvider>
      </CustomTheme>
    </>
  );
}

export default MyApp;
