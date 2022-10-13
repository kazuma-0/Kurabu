import dayjs from "dayjs";
import { Tag, Text } from "@chakra-ui/react";
import Link from "next/link";

function AcheivementCard(props) {
  return (
    <div className="relative h-fit max-h-96 rounded-lg ring-1 ring-white/50 hover:scale-[101%] transition-all bg-[#16171d]">
      <div
        className="h-52 rounded-lg bg-center bg-cover"
        style={{ backgroundImage: `url(${props.post.image_url})` }}
      >
        <h3
          className={
            "bg-[#101014]/70 font-droid shadow block absolute rounded py-1 px-2 m-2 text-xs"
          }
        >
          {props.post.author}
        </h3>
        <h3
          className={
            "bg-[#101014]/70 font-droid shadow block absolute rounded py-1 px-2 m-2 text-xs top-0 right-0"
          }
        >
          {dayjs
            .unix(Math.floor(Date.parse(props.post.created_at) / 1000))
            .fromNow()}
            {
            }
        </h3>
      </div>
      <div className={" p-2"}>
        <Text
          noOfLines={2}
          className={"text-2xl font-extrabold font-ligurino tracking-wider"}
        >
          <Link href={`${props.link}${props.post.slug}`}>
            {props.post.title}
          </Link>
        </Text>
        <Text noOfLines={1} pt={1}>
          {props.post.description}
        </Text>
        <div className={"text-xs pt-1 font-droid"}>
          {props.post.tags.split(",").map((tag) => (
            <Tag m={0.5} size={"sm"} colorScheme={"linkedin"} key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AcheivementCard;
