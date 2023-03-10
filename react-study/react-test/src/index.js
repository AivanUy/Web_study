/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-01-26 17:37:27
 * @LastEditTime: 2023-03-10 15:00:11
 * @LastEditors:  
 */
/**
 * @author aivan
 * @date 2023.02.06
 * @description 学习react
 */
 //console.log("hello react")
import React from "react";
import ReactDOM  from "react-dom";
//import createRoot from 'react-dom/client';
// import App from "./component/App";
import Fpp from "./Fpp";
import Rpp from "./Rpp";
import Filmapp from "./04-router/Filmapp";
// import a from "./proxy/setupProxy"

//import App from "./05-Redux/App"
import App from "./10-mobx/App"

// ReactDOM.render(<div>Hi I`m Aivan,I`m learning react</div>,document.getElementById("root"))


ReactDOM.render(<App/>,document.getElementById("root"))

//const container = document.getElementById("root")
//createRoot().render("<div>Hi I`m Aivan,I`m learning react</div>")