"use client";

import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [count, setCount] = useState(0);

  return (
    <Menu className="container">
      <Logo>Token Creator</Logo>
      <ConnectWallet theme="light" />
    </Menu>
  );
}

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;
