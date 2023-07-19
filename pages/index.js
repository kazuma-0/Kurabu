/* eslint-disable @next/next/no-img-element */
import {Center, Container, useColorMode} from "@chakra-ui/react";
import Programmer from "../assets/Programmer";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence, LayoutGroup, motion} from "framer-motion";
import {IconX} from "@tabler/icons";
import Head from 'next/head';

import clubs from "../utils/clubs";

export default function Home() {
    const {colorMode, toggleColorMode} = useColorMode();
    const ref = useRef();
    const [selected, setSelected] = useState();
    const [selectedClub, setSelectedClub] = useState();
    useEffect(() => {
        if (colorMode === "light") {
            toggleColorMode();
        }
    }, []);
    return (
        <>
            <Head>
                <title>The Metaverse Association</title>
            </Head>
            <div ref={ref}>
                <Center
                    className="flex flex-col-reverse items-start !justify-between lg:flex-row h-[calc(100vh_-_7rem)]">
                    <div className={"flex-[.6]"}>
                        <div
                            className="text-4xl font-extrabold font-ligurino lg:text-left pt-5 lg:text-6xl tracking-wide uppercase">
                            the{" "}
                            <span
                                className="text-[#f4f1d0] text-center selection:text-[#101014] tracking-wider  selection:bg-[#f4f1d0]">
                            metaverse association
                        </span>
                        </div>
                        <p className="text-lg pt-3 text-justify max-w-lg font-sofia">
                            The department of Computer Science and Engineering in Faculty of Engineering has a
                            Research and development club called The Metaverse Association. Karpagam Academy of Higher
                            Education students are passionate about innovation and technology in Artificial Intelligence
                            and Machine learning, Blockchain, Augmented reality and Virtual reality, and Mobile and Web
                            application development. The Metaverse club aims to brainstorm and explore initiatives
                            pertinent to today&apos;s industry standards.
                        </p>
                    </div>
                    <Programmer className={"lg:scale-150 flex-[.3]"}/>
                </Center>
                <LayoutGroup>
                    <div id="clubs" className="grid lg:grid-cols-3 py-10 pb-20 gap-4">
                        {clubs.map((club) => (
                            <motion.div
                                layoutId={club.name}
                                onClick={() => {
                                    setSelectedClub(club);
                                }}
                                key={club.name}
                                className="max-h-full rounded p-4 shadow-xl bg-[#16171d] ring-white/30 ring-1 transition-all hover:ring-1 hover:ring-white/70"
                            >
                                <img
                                    src={club.image.src}
                                    className="rounded-lg shadow mb-4"
                                    alt=""
                                />
                                <h1
                                    className={
                                        "font-bold font-ligurino tracking-wider text-2xl text-center"
                                    }
                                >
                                    {club.name}
                                </h1>
                            </motion.div>
                        ))}
                    </div>
                </LayoutGroup>
                <AnimatePresence>
                    {selectedClub && (
                        <motion.div
                            initial={{opacity: 0, transformOrigin: "bottom"}}
                            animate={{opacity: 1, transformOrigin: "bottom"}}
                            exit={{opacity: 0, transformOrigin: "bottom"}}
                            transition={{duration: 0.3, ease: "linear"}}
                            className={"fixed top-0 left-0 h-screen w-screen bg-black/80"}
                        >
                            <Container maxW={"container.lg"} className={"h-full"}>
                                <Center className={"h-full"}>
                                    <motion.div
                                        className={
                                            "bg-[#101014] p-5 rounded shadow max-h-full overflow-auto"
                                        }
                                    >
                                        <div className={"lg:grid grid-cols-5 gap-x-5 gap-y-5"}>
                                            <Center className={"col-span-2 w-full"}>
                                                <img
                                                    src={selectedClub?.image.src}
                                                    className={"lg:col-span-2 rounded-lg shadow p-1"}
                                                    alt=""
                                                />
                                            </Center>
                                            <div className={"lg:col-span-3 lg:p-2"}>
                                                <div className="relative">
                                                    <h1
                                                        className={
                                                            "text-4xl uppercase font-bold font-ligurino tracking-wider"
                                                        }
                                                    >
                                                        {selectedClub?.name}
                                                    </h1>
                                                    <IconX
                                                        className={
                                                            "absolute top-0 right-0 cursor-pointer rounded"
                                                        }
                                                        onClick={() => setSelected(null)}
                                                    />
                                                </div>
                                                <p
                                                    className={
                                                        "text-justify max-w-xl py-10 text-lg leading-relaxed"
                                                    }
                                                >
                                                    {selected?.description}
                                                </p>
                                                <h2 className={"text-xl font-bold pb-3"}>Contact</h2>
                                                <div className={"grid lg:grid-cols-2"}>
                                                    {selected?.contact.map((contact) => {
                                                        return (
                                                            <div key={contact.name}>
                                                                <div className={""}>{contact.name}</div>
                                                                <div className={""}>{contact.department}</div>
                                                                <a
                                                                    href={`mailto:${contact.email}`}
                                                                    target={"_blank"}
                                                                    rel={"noreferrer"}
                                                                >
                                                                    <div className={"cursor-pointer"}>
                                                                        {contact.email}
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Center>
                            </Container>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>);
}
