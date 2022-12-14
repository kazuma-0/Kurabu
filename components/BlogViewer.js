import { frontendClient } from "../client";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

function BlogViewer(props) {
  const [blogPosts, setBlogPosts] = useState(null);
  useEffect(() => {
    async function fetchBlogPosts() {
      const { data } = await frontendClient.get("/api/blog/all");
      setBlogPosts(data);
      console.log(data);
    }
    fetchBlogPosts();
  }, []);
  return (
    <div className={"h-cover"}>
      <div className="grid md:grid-cols-2 gap-10">
        {blogPosts?.map((post) => (
          <BlogCard link={props.link} key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogViewer;
