import axios from 'axios';
import { instance } from './instance';
import { getCookies } from 'cookies-next';

//https://axios-http.com/docs/instance
export const getAllData = async (path, page, limit) => {
  try {
    // const result = await axios.get(`http://localhost:8000/${path}`);
    const tokenResult = getCookies('token');

    const result = await axios.get(`http://localhost:8000/${path}`, {
      headers: {
        authorization: `Bearer ${tokenResult.token}`,
        page: page,
        limit: limit,
      },
    });

    return result.data;
  } catch (error) {
    console.log('aldaa:', error);
  }
};

export const getSingleData = async (path, id) => {
  try {
    const result = await instance.get(`${path}/${id}`);

    return result.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const updateSingleData = async (path, id, update) => {
  try {
    const result = await axios.patch(
      `http://localhost:8000/${path}/${id}`,
      update
    );

    return result.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (path, userData) => {
  try {
    const result = await axios.post(`http://localhost:8000/${path}`, userData);

    return result;
  } catch (error) {
    console.log(error);
  }
};
export const loginUser = async (path, userData) => {
  try {
    const result = await axios.post(`http://localhost:8000/${path}`, userData);

    return result;
  } catch (error) {
    alert(error.response.data.message);
  }
};

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
