import EventViewer from "../components/EventViewer";
import {useRouter} from "next/router";

function Events() {

    return <EventViewer link={"/event/"}/>
}

export default Events;