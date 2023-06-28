import { useContext } from "react";
import { useCallback } from "react";
import { LANGUAGES } from "../../App";
import LanguageContext from "../LanguageContext";

export default () => {
  const { setLng } = useContext(LanguageContext);
  const changeHandler = useCallback(
    (lng) => {
      return () => {
        setLng(lng);
      };
    },
    [setLng]
  );
  return (
    <div>
      {LANGUAGES.map((key, index) => {
        return (
          <button key={index} onClick={changeHandler(key)}>
            {key}
          </button>
        );
      })}
    </div>
  );
};
