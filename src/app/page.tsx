import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/MyFirstComponent"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <DynamicComponent />
    </>
  );
};

export default Home;
