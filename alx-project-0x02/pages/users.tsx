import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

interface UsersPageProps{
    users: UserProps[];
}

export const getStaticProps = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: UserProps[] = await res.json();

        return{
            props: {
              users: data,
            }
        }
    }catch (error) {
        console.error("Error fetching users:", error);

        return{
            props:{
                users: []
            }
        }
    }
};

const Users: React.FC<UsersPageProps> = ({users}) =>{
  return(
    <>
        <header>
            <Header />
        </header>
        <main>
           <div className="grid grid-cols-4 gap-2">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
            </div> 
         
        </main>
        <footer></footer>
    </>
  )
}
export default Users;