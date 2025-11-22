import { useState } from "react";

export interface userInput {
  title: string;
  content: string;
}

const PostModal: React.FC<userInput> = ({ title, content }) => {

  const [close, setClose] = useState(false);

 const handleClose = () =>{
    setClose(true);
 }

  // 🔥 If closed, render nothing
  if (close) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 bg-opacity-90 z-10"></div>
              <div className="fixed inset-0 z-20 flex items-center justify-center">
        <div className="bg-amber-50 text-black fixed z-10 top-[25%] left-[25%] right-[25%] bottom-[25%] rounded-2xl p-5">
          <div className="flex flex-1 justify-between">
            <div className="text-3xl font-medium">Add a new blog post</div>
          <div><img onClick={handleClose} src="/close.png" className="h-[20px]"/></div>
          </div>
          
          <div>
            <div>
              <hr />
            </div>
            <div className="w-full mt-4">
              <form className="w-full">
                <div className="flex flex-col flex-1">
                  <label>Add a title:</label>
                  <input
                    type="text"
                    defaultValue={title}
                    className="border p-2 rounded"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label>Add content:</label>
                  <textarea
                    defaultValue={content}
                    className="border p-2 rounded"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-pink-950 text-amber-50 py-2 px-4
                rounded-[0.25rem]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostModal;
