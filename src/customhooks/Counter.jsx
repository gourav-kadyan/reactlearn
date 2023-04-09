import UseCounter from "./UseCounter";

function Counter(){
    const [count, increment, decrement ] = UseCounter(0);
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment }>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
        </div>
    );
}

export default Counter;