/* eslint-disable @next/next/no-img-element */
import { frontendClient } from "../../client";
import { useEffect, useState } from "react";
import { Center, Text } from "@chakra-ui/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

function Achievements() {
  const [achievements, setAchievements] = useState();
  const [selected, setSelected] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState();

  async function getAllAchievments() {
    try {
      const { data } = await frontendClient.get("/achievements/all");
      setAchievements(data);
      setSelectedAchievement(data[0]);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getAllAchievments();
  }, []);
  return (
    <div className={selected ? " !max-h-[80vh] overflow-hidden" : "h-cover"}>
      <h1 className="text-4xl font-bold uppercase text-center">
        Achievements by our club members
      </h1>
      <LayoutGroup>
        <div className="grid grid-cols-2 py-5 gap-4">
          {achievements?.map((achievement) => (
            <motion.div
              onClick={() => {
                setSelected(achievement.id);
              }}
              layoutId={achievement.id}
              key={achievement.id}
              className="relative h-fit max-h-96 rounded-lg ring-1 ring-white/50 hover:scale-[101%] transition-all bg-[#16171d]"
            >
              <div
                className="h-52 rounded-t-lg bg-center bg-cover"
                style={{ backgroundImage: `url(${achievement.image})` }}
              >
                <h3
                  className={
                    "bg-[#101014]/70 font-droid shadow block absolute rounded py-1 px-2 m-2 text-xs"
                  }
                >
                  {achievement.author}
                </h3>
                <h3
                  className={
                    "bg-[#101014]/70 font-droid shadow block absolute rounded py-1 px-2 m-2 text-xs top-0 right-0"
                  }
                >
                  {achievement.duration}
                </h3>
              </div>
              <div className={" p-2"}>
                <Text
                  noOfLines={2}
                  className={
                    "text-2xl font-extrabold font-ligurino tracking-wider"
                  }
                >
                  {/*<Link href={`${props.link}${props.event.slug}`}>*/}
                  {achievement.title}
                  {/*</Link>*/}
                </Text>
                <Text noOfLines={1} pt={1}>
                  {achievement.description}
                </Text>
              </div>
            </motion.div>
          ))}
        </div>
      </LayoutGroup>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={"fixed z-40 top-0 left-0 h-screen w-screen bg-black/80"}
            onClick={() => {
              setSelected(null);
            }}
          >
            <Center className={"h-full"}>
              <motion.div
                layoutId={selected}
                className="bg-[#16171d] p-3 rounded overflow-y-auto h-[80%] w-[80%]"
              >
                <h1
                  className={
                    "font-bold text-4xl tracking-wide font-ligurino pt-2"
                  }
                >
                  {selectedAchievement?.title}
                </h1>
                <div className="py-2">
                  <div className="flex">
                    Project by:{" "}
                    <h3 className={"px-2"}>{selectedAchievement.author}</h3>
                  </div>
                  <div className="flex">
                    Project duration:{" "}
                    <h3 className={"px-2"}>{selectedAchievement.duration}</h3>
                  </div>
                </div>
                <img
                  className={"rounded h-"}
                  src={selectedAchievement.image}
                  alt=""
                />
                <p className="py-3">{selectedAchievement.description}</p>
              </motion.div>
            </Center>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Achievements;
