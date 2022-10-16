import AchievementViewer from "../components/AchievementViewer";
import { useRouter } from "next/router";

function Events() {
  return <AchievementViewer link={"/achievement/"} />;
}

export default Events;
