/* eslint-disable @next/next/no-img-element */
import {Center, Container, useColorMode} from "@chakra-ui/react";
import Programmer from "../assets/Programmer";
import arvr from "../assets/club_images/arvr.png";
import blockchain from "../assets/club_images/blockchain.png";
import datascience from "../assets/club_images/datascience.png";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence, LayoutGroup, motion} from "framer-motion";
import {IconX} from "@tabler/icons";

const clubs = [
    {
        name: "AR/VR Club",
        description:
            "The AR/VR club is a student-run club that indulges in activities related to augmented reality and virtual reality. The club was started with the aim of providing students with a platform to explore and experiment with these technologies. The club organizes various events and workshops related to AR and VR, and also hosts guest lectures from industry experts. The club provides its members with an opportunity to learn about the latest trends in the field of AR and VR, and also allows them to network with like-minded individuals.",
        image: arvr,
        contact: [
            {
                name: "Anuj S",
                department: "CSD - II year",
                email: "hello@kazuma.in",
            },
            {
                name: "Sanjay B",
                department: "AIDS - III year",
                email: "sanjaychandar2002@gmail.com",
            },
        ],
    },
    {
        name: "Blockchain club",
        description:
            "The student-led KAHE Blockchain Club is dedicated to the advancement of blockchain technology and its many applications through teaching, research, and development. At the conclusion of each session, participants and students acquire fundamental application knowledge. The ultimate goal is to promote study, research, and conversation about blockchain technology among students and the community while also exploring potential applications in commerce, healthcare, mining, and finance. Quizzes, study/training sessions, readings from research papers, projects, guest lecturers, and hackathons are just a few of the club's activities. The club intends to hold regular activities and seminars to accommodate all skill levels and provide equitable participation chances for all of our members.",
        image: blockchain,
        contact: [
            {
                name: "Pradish Pranam",
                department: "AIDS - III year",
                email: "pradish2125@gmail.com",
            },
            {
                name: "Yosuva B E",
                department: "AIDS - III year",
                email: "yosuvabe.26@gmail.com",
            },
        ],
    },
    {
        name: "Data Science club",
        description:
            "Ideologies is to create the perfect path to success in the Data Science industry for aspiring students. Students can engage in a wide range of activities in a data science club. Working with real data sets to learn cleaning, displaying, and analysing data might be one exercise. Various software applications or programming languages could be used for this. Discussing case studies of successful or unsuccessful data science projects could be another pastime. As a result, club members would be able to learn from the achievements and mistakes of others in the industry. Clubs could also have guest speakers who are professionals in data science to impart their wisdom to students. Lastly, groups could participate in online contests centred on using data analysis to solve real-world problems.",
        image: datascience,
        contact: [
            {
                name: "Loga prakash",
                department: "AIDS - III year",
                email: "loga@loga.com",
            },
            {
              name: "Ramkumar P",
              department: "AIDS - III year",
              email: "ramkumarpasupathi@gmail.com",
            },
        ],
    },
    // {
    //     name: "Entrepreneurship club",
    //     description: "All aspiring campus entrepreneurs get a platform thanks to the Entrepreneurship Club. Reputable businesspeople are known to attend the tech talks and seminars that are often held there.",
    //     image: datascience,
    //     contact: [
    //         {
    //             name: "Pradish",
    //             department: "AIDS - III year",
    //             email: "pradish.26@gmail.com"
    //         },
    //         {
    //             name: "Yosuva",
    //             department: "AIDS - III year",
    //             email: "pradish.26@gmail.com"
    //         },
    //     ]
    //
    // }
];

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
    // const preventScroll = useCallback((e) => {
    //     e.preventDefault()
    //     e.stopPropagation()
    // }, [])

    // const disableScroll = useCallback(() => {
    //     ref.current.addEventListener('wheel', preventScroll);
    // }, [ref])
    // const enableScroll = useCallback(() => {
    //     ref.current.removeEventListener('wheel', preventScroll);
    // }, [ref])

    // useEffect(() => {
    //     if (selected) {
    //         disableScroll()
    //     } else {
    //         enableScroll()
    //     }
    // }, [selected])
    return (
        <div ref={ref}>
            <Center className="flex flex-col-reverse items-start !justify-between lg:flex-row h-[calc(100vh_-_7rem)]">
                <div className={"flex-[.6]"}>
                    <div
                        className="text-4xl font-extrabold font-ligurino lg:text-left pt-5 lg:text-6xl tracking-wide uppercase">
                        the{" "}
                        <span className="text-[#f4f1d0] text-center selection:text-[#101014] tracking-wider  selection:bg-[#f4f1d0]">
              metaverse community
            </span>
                    </div>
                    <p className="text-lg pt-3 text-justify max-w-lg font-sofia">
                        The department of Computer Science and Engineering and Faculty of
                        Engineering has an Research and development club called The
                        Metaverse Community. The students in Karpagam Academy of Higher
                        Education are passionate about innovation and technology in sectors
                        of Artificial Intelligence and Machine learning, Blockchain,
                        Augmented reality and Virtual reality, Mobile and Web application
                        development. The metaverse community&apos;s objective is to
                        brainstorm and explore initiative that are pertinent to today&apos;s
                        industry standard.
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
                            className="max-h-full rounded p-4 shadow-xl bg-[#16171d] hover:ring-2"
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
                                                    onClick={() => setSelectedClub(null)}
                                                />
                                            </div>
                                            <p
                                                className={
                                                    "text-justify max-w-xl py-10 text-lg leading-relaxed"
                                                }
                                            >
                                                {selectedClub?.description}
                                            </p>
                                            <h2 className={"text-xl font-bold pb-3"}>Contact</h2>
                                            <div className={"grid lg:grid-cols-2"}>
                                                {selectedClub?.contact.map((contact) => {
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
    );
}
