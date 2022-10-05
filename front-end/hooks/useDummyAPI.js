import axios from 'axios';

export const getDummyData = async (path) => {
  try {
    const result = await axios.get(`http://localhost:8000/${path}`);
    console.log(result);
    // return JSON.parse(JSON.stringify(data));
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

// //=============using dummyapi.io===============================
// export const getDummyData = async (path) => {
//   try {
//     const result = await axios.get(`https://dummyapi.io/data/v1/${path}`, {
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//         // use your own app-id of dummy api
//         'app-id': '63350ae2b3ea36a85acba45f',
//       },
//     });
//     return result.data.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// export const getCommentData = async (postID) => {
//   try {
//     const result = await axios.get(
//       `https://dummyapi.io/data/v1/post/${postID}/comment`,
//       {
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//           // use your own app-id of dummy api
//           'app-id': '63350ae2b3ea36a85acba45f',
//         },
//       }
//     );
//     // console.log('comment result is:', result);
//     return result.data.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const postCommentData = async (ownerID, postID, comment) => {
//   try {
//     await axios.post(
//       'https://dummyapi.io/data/v1/comment/create',
//       {
//         owner: ownerID,
//         post: postID,
//         message: comment,
//         publishDate: new Date(),
//       },
//       {
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//           'app-id': '63350ae2b3ea36a85acba45f',
//         },
//       }
//     );
//     // console.log('just posted comment is:', result);
//   } catch (error) {
//     console.log(error);
//   }
// };
