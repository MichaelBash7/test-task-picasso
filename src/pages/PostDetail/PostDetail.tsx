import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../shared/lib/hooks/useFetching";
import PostService from "../../shared/api/PostService";
import Button from "../../shared/ui/Button/Button";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли пост с ID: {params.id}</h1>
            <p>Заголовок: {post.title}</p>
            <p>Текст: {post.body}</p>
            <Button onClick={() => window.history.back()}>Назад</Button>
        </div>
    )};

export default PostIdPage;
