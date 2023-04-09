import { useState } from "react";

function ChildComponent(props){
    const [count, setCount] = useState(0);

    function handleClick() {
    setCount(count + 1);
    props.onCountChange(count + 1);
    }
    
    return (
    <div>
    <button onClick={handleClick}>Click me</button>
    <p>Count: {count}</p>
    </div>
    );
}

export default ChildComponent