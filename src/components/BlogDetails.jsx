import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className="">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-sm ">{post.title}</span>
      </NavLink>
      <p>
        By
        <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
        <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[14px]">Posted on {post.date}</p>
      <p className="text-[16px] mt-[13px]">{post.content}</p>
      <div className="flex flex-wrap gap-x-2 items-center">
        {post.tags.map((tag, index) => (
          <NavLink key={index} className="text-xs font-semibold underline text-blue-700 cursor-pointer" to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span>{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
