import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
    return(
        <>
         <article className="h-auto w-auto rounded-2xl text-black mb-2">
         <div className="bg-pink-400 font-bold text-2xl py-2 px-2">{title}</div>
         <div className="bg-amber-50 px-2 py-2">{content}</div>
         </article>
         
        </>
    )
}
export default Card;