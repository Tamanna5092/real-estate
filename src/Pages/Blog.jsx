import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    const {image, author, title, tags, date, content, id} = blog;
    
    return (
        <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<Link to={`/${id}`} className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h3>
				<span className="text-xs dark:text-gray-600">{date}</span>
				<p>{content}</p>
			</Link>
		</a>
	</div>
</section>
        </div>
    );
};

export default Blog;