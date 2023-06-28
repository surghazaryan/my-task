import React, { useContext } from "react";
import { infocontext } from "../App";

export default function Props2(props) {
  let str = useContext(infocontext);

  return (
    <div>
      {str.name}
      <button
        onClick={() => {
          str.setname("ghazaryan");
        }}
      >
        change
      </button>
    </div>
  );
}
