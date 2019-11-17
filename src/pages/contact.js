import React from "react";
import ReactDOM from "react-dom";
import Menu from "components/Menu";
import CounterApp from "components/CounterApp";

// contact page
ReactDOM.render(<Menu />, document.getElementById("menu"));
ReactDOM.render(<CounterApp />, document.getElementById("counterList"));
