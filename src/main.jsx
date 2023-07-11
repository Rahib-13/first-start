import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
const rootElem = document.getElementById("root");
ReactDOM.createRoot(rootElem).render(
    <BrowserRouter>
    <App/>
    
    
    </BrowserRouter>
);
