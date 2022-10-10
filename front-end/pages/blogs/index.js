import BlogItems from '../../components/blog/BlogItems';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import { getAllData } from '../../helpers/getDataFromServer';
import LoadingSpinner from 'components/Spinner';

const Blog = () => {
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
        console.log(error.message);
      }
    };
    getData();
  }, []);

  if (isLoading) return <LoadingSpinner open={true} />;

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
