import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home2: React.FC = () => {
    return(
        <>
        <header className="mb-2">
        <Header />
        </header>
        <main className="px-4">
           <Card title="First Post" content="This is my very first post. I hope you'll like it" />

           <Card title="Second Post" content="Sigh...another post. I don't know what to type" />

           <Card title="Another One" content="I'm just going to not say anything..." />  
   
        </main>
       <footer>
        
       </footer>
        </>
    )
}
export default Home2;