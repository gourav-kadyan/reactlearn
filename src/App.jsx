import "./css files/App.css";
import React from "react";

import Show from "./hide/show the element/Show";

import Counter from "./customhooks/Counter";

import ParentComponent from "./counter/ParentComponent";

import SignIn from "./signin/SignIn";

import Array from "./display array of users/Array";

import Binding from "./2 way data binding/Binding";

import Disabled from "./disabled button/Disabled";

import Navigation from "./navigation/Navigation";
import Home from "./navigation/Home";
import About from "./navigation/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Parent from "./Update Parent/Parent";

import Parentforchild from "./print child/Parentforchild";
import ChildforParent from "./print child/ChildforParent";

import Add from "./AddTwoNumber/Add";

function App(){
    return (
        <>
            <h1>ques 1 - sigin form</h1>
            <SignIn />
            <h1>ques 2 - counter sum</h1>
            <ParentComponent />
            <h1>ques 3 - counter</h1>
            <Counter />
            <h1>ques 4 - print array using map</h1>
            <Array />
            <h1>ques 5 - hide/show element</h1>
            <Show />
            <h1>ques 6 - 2 way binding</h1>
            <Binding />
            <h1>ques 7 - disable button</h1>
            <Disabled />
            <h1>ques 8</h1>
            <h3>Navigation bar</h3>
            <Router>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/about" element={<About/>} />
                    
                </Routes>
            </Router>
            <h1>ques 9 - update parent</h1>
            <Parent />
            <h1>ques 10 - Show entire Child component content inside Parent component</h1>
            <Parentforchild>
                <ChildforParent />
            </Parentforchild>
            <h1>ques 11 - add two numbers</h1>
            <Add />
        </>
    );
}

export default App;