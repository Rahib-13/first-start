import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
const rootElem = document.getElementById("root");
ReactDOM.createRoot(rootElem).render(
  <>
    <App 
    ad={"Rahib"}
    soyad={"İsmayılov"}
    yash={20}
    seher={"Baki"} />    
  </>
);
