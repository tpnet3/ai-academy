import { useFetchReducer } from "@/hooks/useFetchReducer";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchDataPage() {
  const { data } = useFetchReducer<Post>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div>
      <h1>Fetch Data Page</h1>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}
