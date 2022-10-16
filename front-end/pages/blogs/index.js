import BlogItems from '../../components/blog/BlogItems';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import { getAllData } from '../../helpers/getDataFromServer';
import LoadingSpinner from 'components/Spinner';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const Blog = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await getAllData('blogs');

        if (!result) {
          router.push('/login');
        }
        setBlogData(result.posts);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
        // alert(error.data);
      }
    };

    getData();
  }, []);

  if (isLoading) return <LoadingSpinner open={true} />;

  return (
    <Layout title='Blogs'>
      <div style={{ margin: '64px 40px 20px' }}>
        {isLoggedIn && <BlogItems data={blogData} />}
      </div>
    </Layout>
  );
};

// export const getStaticProps = async () => {
//   const result = await getAllData('blogs');
//   return {
//     props: { result: result },
//     revalidate: 60,
//   };
// };
export default Blog;
