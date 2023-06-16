import type { NextPage } from "next";
import { FlexboxGrid } from "rsuite";
import { useAddress } from "@thirdweb-dev/react";
import Form from "../components/form";

const Home: NextPage = () => {
  const address = useAddress();
  return (
    <div>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={12}>
          <Form />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default Home;
