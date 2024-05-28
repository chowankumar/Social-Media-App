import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../axios';

function Posts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => makeRequest.get('/posts').then((res) => res.data),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);
  return (
    <div>
      {/* {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))} */}
    </div>
  );
}

export default Posts;
