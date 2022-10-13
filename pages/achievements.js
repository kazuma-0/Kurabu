import AcheivementViewer from "../components/AchievementViewer";
import { useRouter } from "next/router";

function Events() {
  return <AcheivementViewer link={"/achievement/"} />;
}

export default Events;
