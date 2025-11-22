import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({posts}) =>{

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

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const formatted: PostProps[] = data.map((item: any) => ({
      title: item.title,
      content: item.body,
      userId: item.userId,
    }));

    return {
      props: {
        posts: formatted,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Posts;