import React from "react";
import { useState } from "react";

export default function IndexValuereducer() {
  const [name, setName] = useState({
    fullname: "",
    email: "",
  });

  return (
    <div>
      <input
        type="text"
        value={name.fullname}
        onChange={(e) => {
          setName({ fullname: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        value={name.email}
        onChange={(e) => {
          setName({ email: e.target.value });
        }}
      />
    </div>
  );
}
