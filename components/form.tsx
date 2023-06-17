"use client";

import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import styled from "styled-components";

export default function Form() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Row>
        <Column>
          <InputContainer>
            <Label>Token name</Label>
            <Input placeholder="e.g. My Token Name" />
          </InputContainer>
          <InputContainer>
            <Label>Symbol</Label>
            <Input placeholder="e.g. SYM" />
          </InputContainer>
          <InputContainer>
            <Label>Initial supply</Label>
            <Input type="number" min="0" placeholder="e.g. 123456789" />
          </InputContainer>
          <InputContainer>
            <Label>Decimals (0-18)</Label>
            <Input type="number" min="0" placeholder="e.g. 18" />
          </InputContainer>
          <InputContainer>
            <Label>Decimals (0-18)</Label>
            <Input type="number" min="0" placeholder="e.g. 18" />
          </InputContainer>
          <InputContainer>
            <Label>
              <Checkbox id="mintable"/> Mintable
             </Label>
          </InputContainer>
          <InputContainer>
            <Label>
              <Checkbox id="burnable"/> Burnable
             </Label>
          </InputContainer>
          <InputContainer>
            <Label>
              <Checkbox id="pausable"/> Pausable
             </Label>
          </InputContainer>
          <InputContainer>
            <Label>
              <Checkbox id="ownable"/> Ownable
             </Label>
          </InputContainer>
        </Column>
        <Column></Column>
      </Row>
      <Button>Create Token</Button>
    </>
  );
}

const Row = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const InputContainer = styled.div`
  padding: 10px 0px;
`;

const Input = styled.input`
  padding: 1em;
  border: 0.5px lightgray solid;
  border-radius: 5px;
  width: 100%;
  font-size: 1em;
`;

const Label = styled.div`
  width: 100%;
  font-size: 1.5em;
  margin-bottom: 5px;
  color: darkgrey;
`;

const Button = styled.button`
  font-size: 1.5em;
  padding: 10px 40px;
  background: darkgrey;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  font-size: 1.5em;
  margin: 0;
  hieght: 20px;
  width: 20px;
`;
