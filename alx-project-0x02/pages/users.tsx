import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

interface UsersPageProps{
    users: UserProps[];
}

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

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // Format the users if needed
    const formatted: UserProps[] = data.map((item: any) => ({
      id: item.id.toString(),
      name: item.name,
      username: item.username,
      email: item.email,
      address: {
        street: item.address.street,
        suite: item.address.suite,
        city: item.address.city,
        zipcode: item.address.zipcode,
        geo: {
          lat: item.address.geo.lat,
          lng: item.address.geo.lng,
        },
      },
      phone: item.phone,
      website: item.website,
      company: {
        name: item.company.name,
        catchPhrase: item.company.catchPhrase,
        bs: item.company.bs,
      },
    }));

    return {
      props: {
        users: formatted,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
};

export default Users;