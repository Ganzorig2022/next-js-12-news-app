import { Typography, Stack } from '@mui/material';
import BlogGrids from './BlogGrids';
const BlogItems = () => {
  return (
    <div>
      <Stack justifyContent='flex-start'>
        <Typography color='#000000' fontSize={48} fontWeight={800}>
          Blog Posts
        </Typography>
        <Typography color='#6D7D8B' fontSize={18} fontWeight={600}>
          Our latest updates and blogs about managing your team
        </Typography>
        <BlogGrids />
      </Stack>
    </div>
  );
};

export default BlogItems;
