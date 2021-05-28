import * as React from 'react';
import { Link } from'gatsby';

const NewPage = () => {
    return(
        <main>
            <title>About Page</title>
            <h1>Welcome to gatsby site</h1>
            <p>I'm making this by following the gatsby tutorial</p>
            <Link to="/">Home</Link>
        </main>
    )
}

export default NewPage;