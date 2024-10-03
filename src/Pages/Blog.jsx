import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { image, title, date, content, id } = blog;

  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={image}
              alt=""
              className="object-cover w-full h-64 cursor-default rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <Link
              to={`/${id}`}
              className=" p-6 space-y-2 animate__animated animate__backInRight lg:col-span-5"
            >
              <h3 className="roboto text-2xl font-semibold sm:text-4xl hover:text-red-500 group-hover:underline group-focus:underline">
                {title}
              </h3>
              <p className="my-4 text-[#949494] dark:text-gray-600">{date}</p>
              <p className="text-base ">{content}</p>
            </Link>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
