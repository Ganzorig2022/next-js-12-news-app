import BlogItems from '../../components/blog/BlogItems';
import Layout from '../../components/Layout';
import { getDummyData } from 'hooks/useDummyAPI';

const Blog = (props) => {
  console.log(props);
  return (
    <Layout title='Blogs'>
      <div style={{ margin: '64px 40px 20px' }}>
        asdfas
        <BlogItems />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const test = await getDummyData('users');
  console.log(test);

  return {
    props: { test },
  };

  // try {
  //   const allData = await getDummyData('users');
  //   //   // const { params, req, res } = context;
  // } catch (error) {
  //   console.log(error);
  // }

  // return {
  //   props: alldata,
  // };
};
export default Blog;
