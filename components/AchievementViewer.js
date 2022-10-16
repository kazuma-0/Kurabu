import { frontendClient } from "../client";
import AchievementCard from "./AchievementCard";
import { useEffect, useState } from "react";

function AchievementViewer(props) {
  const [blogPosts, setBlogPosts] = useState(null);
  useEffect(() => {
    async function fetchAchievement() {
      const { data } = await frontendClient.get("/api/achievements/all");
      setBlogPosts(data);
      console.log(data);
    }
    fetchAchievement();
  }, []);
  return (
    <div className={"h-cover"}>
      <div className="grid md:grid-cols-2 gap-10">
        {blogPosts?.map((post) => (
          <AchievementCard link={props.link} key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default AchievementViewer;
