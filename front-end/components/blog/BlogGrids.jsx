import {
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Divider,
} from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../Spinner';
import { useRouter } from 'next/router';
import { getDummyData } from '../../hooks/useDummyAPI';

const BlogGrids = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await getDummyData('post');
        setBlogData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  const goToPost = (id) => {
    router.push(`/blog/${id}`);
  };

  if (isLoading) return <LoadingSpinner open={true} />;

  return (
    <div>
      <Stack
        direction='row'
        flexWrap='wrap'
        alignItems='center'
        justifyContent='center'
        sx={{}}
      >
        {blogData.map(({ text, owner, tags, image, publishDate, id }, idx) => {
          return (
            <Card
              sx={{ maxWidth: 350, margin: 5, borderRadius: '20px' }}
              key={idx}
              onClick={() => goToPost(id)}
            >
              <CardMedia
                component='img'
                height='140'
                image={image}
                alt={tags[3]}
              />
              <CardContent>
                <Typography
                  variant='h6'
                  fontSize={24}
                  fontWeight={500}
                  component='div'
                  m={2}
                >
                  {text.slice(0, 20)}
                </Typography>
                <Typography variant='body2' m={2}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat voluptate asperiores nostrum, maiores iste expedita
                  esse amet modi pariatur inventore.
                </Typography>
                <Stack
                  direction='row'
                  alignItems='center'
                  justifyContent='space-between'
                  mt={5}
                >
                  <Avatar src={owner.picture} />
                  <Stack direction='row'>
                    <Typography color='text.grey' mr={2}>
                      {owner.firstName}
                    </Typography>
                    <Typography color='text.grey'>{owner.lastName} </Typography>
                  </Stack>
                  <Divider orientation='vertical' flexItem />
                  <Typography color='text.grey'>
                    {new Date(publishDate.slice(0, 10)).toLocaleDateString(
                      'en-US',
                      { day: 'numeric', month: 'long', year: 'numeric' }
                    )}
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

export default BlogGrids;
