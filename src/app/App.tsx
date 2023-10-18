import PostList from "../pages/PostList/PostList";
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import PostIdPage from "../pages/PostDetail/PostDetail";

const App = () => {
    return (
        <Routes>
            <Route path="/*" element={<PostList/>}/>
            <Route path="/posts/:id" element={<PostIdPage/>}/>
        </Routes>
    );
};
export default App;
