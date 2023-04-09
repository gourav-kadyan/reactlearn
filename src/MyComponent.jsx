function MyComponent(props) {
    if (props.data === 'error') {
        throw new Error('Data is invalid');
    }
    
    return <div>{props.data}</div>;
}
export default MyComponent;