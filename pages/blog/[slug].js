import { useRouter } from "next/router";
import { frontendClient } from "../../client";
import { useEffect, useState } from "react";
import MdViewer from "../../components/MdViewer";
import dayjs from "dayjs";
import readingTime from "reading-time";
import { IconHeart } from "@tabler/icons";
import { Tag } from "@chakra-ui/react";

function Blog() {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState();
  const [like, setLike] = useState({
    count: 0,
    liked: false,
  });
  function LikeBlog() {
    //TODO: change logic
    if (!like.liked) {
      setLike({
        count: like.count + 1,
        liked: true,
      });
    } else {
      setLike({
        count: Math.max(0, like.count - 1),
        liked: false,
      });
    }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await frontendClient.get(
          `/api/blog/blog?slug=${slug}`
        );
        setBlog(data);
      } catch (e) {
        console.error(e);
      }
    }

    if (slug) {
      fetchData();
    }
  }, [slug]);
  return (
    <div className={"h-cover"}>
      {blog && (
        <>
          <div
            className={"h-64 bg-center bg-cover rounded shadow-lg"}
            style={{ backgroundImage: `url(${blog.image_url})` }}
          ></div>
          <div className="flex pt-3 justify-between items-center">
            <div className=" text-md flex items-center space-x-2 text-gray-100">
              <h3>{blog.author}</h3>
              <span>•</span>
              <h3>{readingTime(blog.markdown).text}</h3>
              <span>•</span>
              <h3>
                {dayjs
                  .unix(Math.floor(Date.parse(blog.created_at) / 1000))
                  .format("ll")}
              </h3>
            </div>
            <div className={"flex items-center"} onClick={LikeBlog}>
              <IconHeart
                color={like.liked ? "red" : "white"}
                fill={like.liked ? "red" : "white"}
              />
              <p className={"pl-1 text-xl"}>{like.count}</p>
            </div>
          </div>
          <div className={"text-xs space-x-1 pt-1 font-droid"}>
            {blog.tags.split(",").map((tag) => (
              <Tag size={"sm"} colorScheme={"linkedin"} key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
          <MdViewer css={blog.styles} markdown={blog.markdown}></MdViewer>
        </>
      )}
    </div>
  );
}

export default Blog;
//dayjs.unix(Math.floor(Number(blog.created_at) / 1000)).format("lll")
