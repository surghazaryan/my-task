import React from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";

export default function Input() {
  const [value_1, setvalue_1] = useState("");
  const [value_2, setvalue_2] = useState("");
  const [colors, setcolors] = useState("");

  useEffect(() => {
    if (value_1.length > 8) {
      setcolors("green");
    } else if (value_1.length < 8) {
      setcolors("red");
    }
  }, [value_1]);

  const Clickbtn = useCallback(() => {
    setvalue_2(value_1);
  }, [value_1]);

  return (
    <div>
      <input
        type="text"
        value={value_1}
        onChange={(e) => {
          setvalue_1(e.target.value);
        }}
      />
      <button onClick={Clickbtn}>send</button>
      <h1 style={{ color: colors }}>{value_1}</h1>
    </div>
  );
}
