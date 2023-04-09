
import React from "react";
import Show from "./hide/show the element/Show";
import Counter from "./customhooks/Counter";
import ParentComponent from "./counter/ParentComponent";
//import SignIn from "./signin/SignIn";
import Array from "./display array of users/Array";
import Binding from "./2 way data binding/Binding";

function App(){
    return (
        <>
            {/* <SignIn /> */}
            <h1>ques 1</h1>
            <ParentComponent />
            <h1>ques 2</h1>
            <Counter />
            <h1>ques 3</h1>
            <Array />
            <h1>ques 4</h1>
            <Show />
            <h1>ques 5</h1>
            <Binding />
            <h1>ques 6</h1>
            
        </>
    );
}

export default App;