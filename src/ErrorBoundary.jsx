import React, { useState } from 'react';
import MyComponent from './MyComponent';

function ErrorBoundary(props) {
    const [hasError, setHasError] = useState(false);

    function handleErrors(error) {
        setHasError(true);
    }

    if (hasError) {
        return <h1>Something went wrong.</h1>;
    }

    return props.children;
}
export default ErrorBoundary