import BlogItems from '../../components/blog/BlogItems';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import { getAllData } from '../../helpers/getDataFromServer';
import LoadingSpinner from 'components/Spinner';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { Typography, Stack, Pagination } from '@mui/material';

const Blog = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const limit = 5;
        const result = await getAllData('blogs', page, limit);
        console.log('first', result);

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
  }, [page]);

  if (isLoading) return <LoadingSpinner open={true} />;

  return (
    <Layout title='Blogs'>
      <div style={{ margin: '64px 40px 20px' }}>
        {isLoggedIn && <BlogItems data={blogData} />}
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={4} page={page} onChange={handleChange} />
        </Stack>{' '}
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
