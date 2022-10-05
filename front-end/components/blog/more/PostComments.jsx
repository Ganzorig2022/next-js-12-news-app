import React, { useEffect, useState } from 'react';
import { Typography, Stack, Card, CardContent, Avatar } from '@mui/material';
import { getCommentData } from '../../../hooks/useDummyAPI';

const PostComments = ({ postId }) => {
  const [userComments, setUserComments] = useState();

  useEffect(() => {
    const getData = async () => {
      setUserComments(await getCommentData(postId));
    };
    getData();
  }, [postId]);

  return (
    <div
      style={{
        width: 700,
        overflowX: 'scroll',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
    >
      <Stack direction='row'>
        {userComments &&
          userComments.map((comment, idx) => {
            return (
              <Card
                key={idx}
                sx={{
                  margin: 5,
                  width: 'auto',
                  overflow: 'visible',
                }}
              >
                <CardContent>
                  <Typography height={100}>{comment.message}</Typography>
                  <Avatar src={comment.owner.picture} />
                  <Stack direction='row'>
                    <Typography color='text.grey' mr={2}>
                      {comment.owner.firstName}
                    </Typography>
                    <Typography color='text.grey'>
                      {comment.owner.lastName}{' '}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
      </Stack>
    </div>
  );
};

export default PostComments;
