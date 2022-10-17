import EventViewer from "../components/EventViewer";
import Head from 'next/head'

function Events() {
  return <>
  <Head>
      <title>Events</title>
  </Head>
  <EventViewer link={"/event/"} />
  </>;
}

export default Events;
