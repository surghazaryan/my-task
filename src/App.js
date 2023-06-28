import React from "react";
import "./App.css";
import Input from "./compInputs/Input";
import Props from "./context/Props";
import { useState } from "react";
import IndexuseReducer from "./usereducer/IndexuseReducer";
import IndexValuereducer from "./usereducer/IndexValuereducer";
import MainRouting from "./compHeader/MainRouting";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Mainpage from "./Redux/screen/Mainpage";
import Seconpage from "./Redux/screen/Seconpage";
import LanguageContext from "./contexts/LanguageContext";
import Header from "./contexts/header";
import Body from "./contexts/body";

export const infocontext = React.createContext(null);

export const LANGUAGES = ['am','ru','en'];

function App() {
  // const [name, setname] = useState("suren");

  // const obj = {
  //   name,
  //   setname,
  // };

  const [lng,setLng] = useState('am')
  return (
    <div className="App">
      {/* <Input />
      <infocontext.Provider value={obj}>
        <Props />
      </infocontext.Provider> */}
      {/* <IndexuseReducer />
     <IndexValuereducer/> */}
      <Provider store={store}>
       <Mainpage/>
       <Seconpage/>
     </Provider>

      {/* <LanguageContext.Provider value={{lng,setLng}}>
        <Header></Header>
        <Body></Body>
      </LanguageContext.Provider> */}
      <MainRouting/>
    </div>
  );
}

export default App;
