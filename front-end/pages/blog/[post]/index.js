import posts from '../../../public/data.json';
import PostItems from '../../../components/blog/more/PostItems';
import Layout from '../../../components/Layout';

const Post = (props) => {
  const postData = posts.posts.filter((post) => post.id === props.post)[0];

  return (
    <Layout>
      <div style={{ margin: '100px 40px 20px' }}>
        <PostItems post={postData} />
      </div>
    </Layout>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: params,
  };
}
