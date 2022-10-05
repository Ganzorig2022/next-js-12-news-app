import Head from 'next/head';
import Navbar from './Navbar';
import { Footer } from './Footer';
// import Showcase from './Showcase';
// import { useRouter } from 'next/router';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      </Head>
      <Navbar />
      {/* {router.pathname === '/' && <Showcase />} */}
      <div>{children}</div>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: 'News Blog Post',
  description: 'Find the user blog and posts',
  keywords: 'blogs, pages, posts',
};
export default Layout;
