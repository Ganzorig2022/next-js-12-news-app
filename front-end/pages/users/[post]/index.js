import posts from '../../../public/data.json';
import PostItems from '../../../components/blog/more/PostItems';
import Layout from '../../../components/Layout';
import { getDummyData } from 'hooks/useDummyAPI';

const Post = (props) => {
  // console.log(props);
  // const postData = posts.posts.filter((post) => post.id === props.post)[0];

  return (
    <Layout>
      <div style={{ margin: '100px 40px 20px' }}>
        <PostItems post={postData} />
      </div>
    </Layout>
  );
};

export default Post;

// export const getServerSideProps = async (context) => {
//   const allData = await getDummyData('users');
//   // const { params, req, res } = context;

//   return {
//     props: alldata,
//   };
// };
