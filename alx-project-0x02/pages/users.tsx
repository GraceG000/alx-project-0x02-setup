// pages/users.tsx
import React, { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: UserProps[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="p-4 text-lg">Loading users...</p>;

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default Users;






// import { UserProps } from "@/interfaces";
// import Header from "@/components/layout/Header";
// import UserCard from "@/components/common/UserCard";

// interface UsersPageProps{
//     users: UserProps[];
// }

// export const getStaticProps = async() => {
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data: UserProps[] = await res.json();

//         return{
//             props: {
//               users: data,
//             }
//         }
//     }catch (error) {
//         console.error("Error fetching users:", error);

//         return{
//             props:{
//                 users: []
//             }
//         }
//     }
// };

// const Users: React.FC<UsersPageProps> = ({users}) =>{
//   return(
//     <>
//         <header>
//             <Header />
//         </header>
//         <main>
//            <div className="grid grid-cols-4 gap-2">
//         {users.map((user) => (
//           <UserCard key={user.id} user={user} />
//         ))}
//             </div> 
         
//         </main>
//         <footer></footer>
//     </>
//   )
// }
// export default Users;