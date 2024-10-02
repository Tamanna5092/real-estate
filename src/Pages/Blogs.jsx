import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='my-10'>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
             
        </div>
    );
};

export default Blogs;