import React from 'react';

import {
    useParams
} from 'react-router-dom';

export default (props) => {
    // Get the "id" (our Array index) from React Router.
    const { id } = useParams();

    // const params = useParams();
    // const id = params.id;
    // Use the id to get a specific post from the Array.
    const post = props.posts[id];
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>

    );
};
