import { useRouter } from "next/router";
import BlogViewer from "../components/BlogViewer";

function Events() {
  return <BlogViewer link={"/blog/"} />;
}

export default Events;
