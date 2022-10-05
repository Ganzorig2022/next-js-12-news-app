import BlogItems from '../../components/blog/BlogItems';
import Layout from '../../components/Layout';

const Blog = () => {
  return (
    <Layout title='Blogs'>
      <div style={{ margin: '64px 40px 20px' }}>
        <BlogItems />
      </div>
    </Layout>
  );
};

export default Blog;
