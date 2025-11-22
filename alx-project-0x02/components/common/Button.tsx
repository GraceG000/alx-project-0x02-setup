import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({size, shape, children, className}) =>{
  return(
    <>
      <button className={` bg-pink-900 py-2 px-4 text-white cursor-pointer mx-2 ${size} ${shape} ${className}`}>{children}</button>
    </>
  )
}
export default Button;