import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../axios';
import Post from './Post';

function Posts({userId}) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await makeRequest.get('/posts?userId='+userId);
      return response.data;
    },
  });
 
   
  
  return (
    <div className='flex flex-col gap-2'>
      {
      error?"something went wrong "
      : isLoading?"Loading"
      : data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
