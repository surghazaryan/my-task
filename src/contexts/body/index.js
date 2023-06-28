import { useMemo } from "react";
import { useContext } from "react";
import LanguageContext from "../LanguageContext";
import { translate } from "../localization/localization";

export default () => {
  const { lng } = useContext(LanguageContext);

  return <div>{translate[lng]["text"]}</div>;
};
