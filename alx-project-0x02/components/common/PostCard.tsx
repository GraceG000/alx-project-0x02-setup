import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({title, content, userId}) => {
    return(
        <>
        
    <div className="border rounded p-4 shadow-sm mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-pink-700 mt-2">{content}</p>
      <p className="text-sm text-pink-900 mt-3">User ID: {userId}</p>
    </div>
        
        </>
    )
}
export default PostCard;