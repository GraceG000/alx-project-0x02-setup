import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { useState } from "react";

const Home2: React.FC = () => {
   
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
        <header className="mb-2">
        <Header />
        </header>
        <main className="px-4 flex flex-col">
          <div>
            <button className="float-right mb-4 bg-pink-950 text-white cursor-pointer py-[7px] px-[14px] rounded-[.5rem]" onClick={toggleModal}>Add Post</button>

            {!isOpen && <PostModal title={""} content={""} />}
          </div>

          <div className="grid grid-cols-4 gap-2">
           <div>
            <Card title="First Post" content="This is my very first post. I hope you'll like it" />
           </div>
           

           <div>
             <Card title="Second Post" content="Sigh...another post. I don't know what to type" />
           </div>
           
           <div>
              <Card title="Another One" content="I'm just going to not say anything..." />  
           </div>
          
          </div>
           
   

          
        </main>
       <footer>
        
       </footer>
        </>
    )
}
export default Home2;