"use client";

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useState } from "react";
import styled from "styled-components";

const INITIAL_STATE = {
  tokenName: "",
  symbol: "",
  initialSupply: "",
  decimals: "",
  mintable: false,
  burnable: false,
  pausable: false,
  ownable: false,
};

export default function Form() {
  const address = useAddress();

  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [initialSupply, setInitialSupply] = useState("");
  const [decimals, setDecimals] = useState("");
  const [mintable, setMintable] = useState(false);
  const [burnable, setBurnable] = useState(false);
  const [pausable, setPausable] = useState(false);
  const [ownable, setOwnable] = useState(false);
  const [tokenNameError, setTokenNameError] = useState("");
  const [symbolError, setSymbolError] = useState("");
  const [initialSupplyError, setInitialSupplyError] = useState("");
  const [decimalsError, setDecimalsError] = useState("");
  const [addressError, setAddressError] = useState("");

  const createToken = () => {
    // Reset previous error messages
    setTokenNameError("");
    setSymbolError("");
    setInitialSupplyError("");
    setDecimalsError("");
    setAddressError("");

    let hasErrors = false;

    if (tokenName === "") {
      setTokenNameError("Token name is required.");
      hasErrors = true;
    }
    if (symbol === "") {
      setSymbolError("Symbol is required.");
      hasErrors = true;
    }
    if (initialSupply === "") {
      setInitialSupplyError("Initial supply is required.");
      hasErrors = true;
    }
    if (decimals === "") {
      setDecimalsError("Decimals is required.");
      hasErrors = true;
    }
    if (!address) {
      setAddressError("Please connect your wallet.");
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    console.log("Token name:", tokenName);
    console.log("Symbol:", symbol);
    console.log("Initial supply:", initialSupply);
    console.log("Decimals:", decimals);
    console.log("Mintable:", mintable);
    console.log("Burnable:", burnable);
    console.log("Pausable:", pausable);
    console.log("Ownable:", ownable);

    setTokenName(INITIAL_STATE.tokenName);
    setSymbol(INITIAL_STATE.symbol);
    setInitialSupply(INITIAL_STATE.initialSupply);
    setDecimals(INITIAL_STATE.decimals);
    setMintable(INITIAL_STATE.mintable);
    setBurnable(INITIAL_STATE.burnable);
    setPausable(INITIAL_STATE.pausable);
    setOwnable(INITIAL_STATE.ownable);
  };

  const handleTokenNameChange = (e) => {
    setTokenName(e.target.value);
    setTokenNameError("");
  };

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
    setSymbolError("");
  };

  const handleInitialSupplyChange = (e) => {
    setInitialSupply(e.target.value);
    setInitialSupplyError("");
  };

  const handleDecimalsChange = (e) => {
    setDecimals(e.target.value);
    setDecimalsError("");
  };

  return (
    <>
      <Row>
        <Column>
          <InputContainer>
            <Label>Token name</Label>
            <Input
              placeholder="e.g. My Token Name"
              value={tokenName}
              onChange={handleTokenNameChange}
            />
            {tokenNameError && <ErrorMessage>{tokenNameError}</ErrorMessage>}
          </InputContainer>
          <InputContainer>
            <Label>Symbol</Label>
            <Input
              placeholder="e.g. SYM"
              value={symbol}
              onChange={handleSymbolChange}
            />
            {symbolError && <ErrorMessage>{symbolError}</ErrorMessage>}
          </InputContainer>
          <InputContainer>
            <Label>Initial supply</Label>
            <Input
              type="number"
              min="0"
              placeholder="e.g. 123456789"
              value={initialSupply}
              onChange={handleInitialSupplyChange}
            />
            {initialSupplyError && (
              <ErrorMessage>{initialSupplyError}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <Label>Decimals (0-18)</Label>
            <Input
              type="number"
              min="0"
              placeholder="e.g. 18"
              value={decimals}
              onChange={handleDecimalsChange}
            />
            {decimalsError && <ErrorMessage>{decimalsError}</ErrorMessage>}
          </InputContainer>
          <InputContainer>
            <Label>
              <Checkbox
                id="mintable"
                checked={mintable}
                onChange={() => setMintable(!mintable)}
              />
              Mintable
            </Label>
          </InputContainer>
          <InputContainer>
            <Label>
              <Checkbox
                id="burnable"
                checked={burnable}
                onChange={() => setBurnable(!burnable)}
              />
              Burnable
            </Label>
          </InputContainer>
          <InputContainer>
            <Label>
              <Checkbox
                id="pausable"
                checked={pausable}
                onChange={() => setPausable(!pausable)}
              />
              Pausable
            </Label>
          </InputContainer>
          <InputContainer>
            <Label>
              <Checkbox
                id="ownable"
                checked={ownable}
                onChange={() => setOwnable(!ownable)}
              />
              Ownable
            </Label>
          </InputContainer>
        </Column>
        <Column></Column>
      </Row>
      <Button onClick={createToken}>Create Token</Button>
      <div>{addressError && <ErrorMessage>{addressError}</ErrorMessage>}</div>
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
  margin-right: 5px;
  hieght: 20px;
  width: 20px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
