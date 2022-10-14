import { frontendClient } from "../client";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";

function EventViewer(props) {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    async function fetchEvents() {
      const { data } = await frontendClient.get("/api/event/all");
      setEvents(data);
      console.log(data);
    }
    fetchEvents();
  }, []);
  return (
    <div className={"h-cover"}>
      <div className="grid md:grid-cols-2 gap-10">
        {events?.map((event) => (
          <EventCard link={props.link} key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventViewer;
