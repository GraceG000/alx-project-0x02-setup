import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <>
      <header className="mb-2">
        <Header />
      </header>
      <main className="px-4">
        <h1>About Us</h1>

        <Button size="small" shape="rounded-sm">
          Small – Rounded SM
        </Button>

        <Button size="medium" shape="rounded-md">
          Medium – Rounded MD
        </Button>

        <Button size="large" shape="rounded-full">
          Large – Rounded FULL
        </Button>
      </main>
      <footer></footer>
    </>
  );
};
export default About;
