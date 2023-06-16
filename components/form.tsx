"use client";

import { Input } from "rsuite";
import { useState } from "react";

export default function Form() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Input placeholder="Default Input" />
    </>
  );
}
