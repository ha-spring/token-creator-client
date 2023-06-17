import type { NextPage } from "next";
import { useAddress } from "@thirdweb-dev/react";
import Form from "../components/form";

const Home: NextPage = () => {
  const address = useAddress();
  return (
    <div className="container">
      <Form />
    </div>
  );
};

export default Home;
