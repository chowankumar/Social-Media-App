import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../axios';
import Post from './Post';

function Posts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await makeRequest.get('/posts');
      return response.data;
    },
  });
 
  console.log(data)
  

  

  

  return (
    <div className='flex flex-col gap-6'>
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
