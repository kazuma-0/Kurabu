import {useEffect, useState} from "react";
import {frontendClient} from "../client";
import {Tag, Text} from "@chakra-ui/react";
import dayjs from "dayjs";
import Link from "next/link";

function Events() {
    const [events, setEvents] = useState(null)
    useEffect(() => {
        async function fetchEvents() {
            const {data} = await frontendClient.get('event/all')
            setEvents(data)
            console.log(data)
        }

        fetchEvents()
    }, [])
    return <div className={"h-cover"}>
        <div className="grid grid-cols-2 gap-10">
            {
                events?.map(event => <div key={event.id}
                                          className="relative h-fit max-h-96 rounded-lg ring-1 ring-white/50 hover:scale-[101%] transition-all bg-[#16171d]">
                        <div className="h-52 rounded-lg bg-center bg-cover"
                             style={{backgroundImage: `url(${event.image_url})`}}>
                            <h3 className={"bg-[#101014]/70 font-droid shadow block absolute rounded py-1 px-2 m-2 text-xs"}>{event.author}</h3>
                            <h3 className={"bg-[#101014]/70 font-droid shadow block absolute rounded py-1 px-2 m-2 text-xs top-0 right-0"}>{dayjs.unix(Math.floor(Number(event.created_at) / 1000)).fromNow()}</h3>
                        </div>
                        <div className={" p-2"}>
                            <Text noOfLines={2}
                                  className={"text-2xl font-extrabold font-ligurino tracking-wider"}>
                                <Link href={`/event/${event.slug}`}>
                                    {event.title}
                                </Link>
                            </Text>
                            <Text noOfLines={1} pt={1}>
                                {event.description}
                            </Text>
                            <div className={"text-xs space-x-1 pt-1 font-droid"}>
                                {
                                    event.tags.split(',').map(tag => <Tag size={"sm"} colorScheme={"linkedin"} key={tag}>
                                            {tag}
                                        </Tag>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            {/*<div className="h-72 rounded-lg bg-red-300"></div>*/}
        </div>
    </div>
}

export default Events;