import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { useEffect, useState } from "react";

const Posts: React.FC = () =>{

    const [posts, setPosts] = useState<PostProps[]>([]);

     useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      const formatted = data.map((item: any) => ({
        title: item.title,
        content: item.body,
        userId: item.userId,
      }));

       setPosts(formatted);
    };

    fetchPosts();
  }, []);

  return(
    <>
    <header>
       <Header />
    </header>
    
    <main className="px-4 py-2">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>

     <div className="grid grid-cols-4 gap-2">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
       ))} 
     </div>
    </main>

    <footer></footer>

   
      
    </>
  )
}
export default Posts;