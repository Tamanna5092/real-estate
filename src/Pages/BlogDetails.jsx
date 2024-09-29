import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-7xl mx-auto overflow-hidden rounded">
		<div className="relative">
        <img src={blog.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
		<div className="px-6 pb-12 mx-auto space-y-6 sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="roboto inline-block text-2xl mt-6 text-black font-bold sm:text-3xl">{blog.title}</a>
        <div className="flex gap-6 items-center">
        <img  className="w-20 h-20 rounded-full" src={blog.author_image} alt="" />
				<p className="text-xl dark:text-gray-600">By: 
					<a rel="noopener noreferrer" href="#" className="roboto text-xl font-semibold ml-2 hover:underline">{blog.author}</a>
        <p>{blog.date}</p>
				</p>
        </div>
			</div>
			<div className="dark:text-gray-800">
            <h1 className="text-lg font-semibold my-6">{blog.content}</h1>
       <p>
      {blog.tags.map((tag) => (
            <span className="mr-4 text-red-500">{tag}</span>
          ))}
        </p>
        <p className="text-base mt-4">{blog.description}</p>
			</div>
		</div>
	</div>
</div>
  );
};

export default BlogDetails;
