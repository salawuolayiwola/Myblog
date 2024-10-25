import About from "../../comps/home/about";
import Breadcrumbs from "../../comps/home/breadcrumb";
import Form from "../../comps/home/form";
import Hero from "../../comps/home/hero";
import Services from "../../comps/home/services";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Form />
    </>
  );
};

export default Home;
