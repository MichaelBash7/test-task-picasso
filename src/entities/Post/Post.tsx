import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from "../../shared/ui/Button/Button";

const Post = React.forwardRef(({ post }, ref) => {

    const router = useNavigate();

    const postBody = (
        <>
            <p>{post.id}</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Button onClick={() => router(`/posts/${post.id}`)}>
                Просмотр
            </Button>
        </>
    )

    return ref
        ? <article ref={ref}>{postBody}</article>
        : <article>{postBody}</article>
})

export default Post;
