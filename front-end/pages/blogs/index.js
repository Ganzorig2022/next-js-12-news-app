import BlogItems from '../../components/blog/BlogItems';
import Layout from '../../components/Layout';
import { useEffect, useState, useContext } from 'react';
import { getAllData } from '../../helpers/getDataFromServer';
import LoadingSpinner from 'components/Spinner';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/router';
const Blog = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await getAllData('blogs');

        setBlogData(result.posts);
        setIsLoading(false);
      } catch (error) {
        // console.log('error', error);
        // alert(error.data);
      }
    };

    getData();
  }, []);

  console.log(isLoggedIn);
  console.log(blogData);
  // if (isLoading) return <LoadingSpinner open={true} />;

  return (
    <Layout title='Blogs'>
      <div style={{ margin: '64px 40px 20px' }}>
        <BlogItems data={blogData} />
      </div>
    </Layout>
  );
};

// export const getStaticProps = async () => {
//   const result = await getAllData();
//   return {
//     props: { result: result },
//     revalidate: 60,
//   };
// };
export default Blog;
