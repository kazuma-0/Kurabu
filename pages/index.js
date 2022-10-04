import {Center, useColorMode} from "@chakra-ui/react";
import Programmer from "../assets/Programmer";
import arvr from '../assets/club_images/arvr.png'
import blockchain from '../assets/club_images/blockchain.png'
import datascience from '../assets/club_images/datascience.png'
import {useEffect} from "react";

export default function Home() {
    const {colorMode, toggleColorMode} = useColorMode()
   useEffect(()=>{
       if(colorMode === "light"){
           toggleColorMode();
       }
   }, [])
    return <>
        <Center className="flex flex-col-reverse lg:flex-row h-[calc(100vh_-_7rem)]">
            <div className={"flex-1"}>
                TBD
            </div>
            <Programmer className={"lg:scale-150"}/>
        </Center>
        <div className="grid lg:grid-cols-3 min-h-screen gap-4">
            <div className="h-fit rounded p-4 shadow-xl bg-[#16171d] hover:ring-2">
                <img src={arvr.src} className="rounded-lg shadow mb-4" alt=""/>
                <h1 className={"font-bold font-ligurino tracking-wide text-3xl"}>Augmented reality/ Virtual reality</h1>
                <p className={"py-3 text-justify"}>
                    The ARVR club is a fantastic opportunity to engage with cutting-edge technology and discover new
                    things. The group meets sometimes to talk about various augmented, virtual, and mixed
                    reality-related issues. Additionally, there are invited speakers that show up and discuss their work
                    in the sector. For students, this is an excellent chance to network and get more knowledge about
                    this developing profession.
                </p>
            </div>
            <div className="h-fit rounded p-4 shadow bg-[#16171d] hover:ring-2">
                <img src={blockchain.src} className="rounded-lg shadow mb-4" alt=""/>
                <h1 className={"font-bold font-ligurino tracking-wide text-3xl"}>Blockchain</h1>
                <p className={"py-3 text-justify"}>The club Hash Blocks is dedicated to the research and advancement of
                    blockchain technology. The club members get knowledge about the numerous facets of blockchain
                    technology and its applications across different sectors. They also focus on initiatives for the
                    creation of blockchains. The group gives students a chance to acquire practical experience.</p>
            </div>
            <div className="h-fit rounded p-4 shadow bg-[#16171d] hover:ring-2">
                <img src={datascience.src} className="rounded-lg shadow mb-4" alt=""/>
                <h1 className={"font-bold font-ligurino tracking-wide text-3xl"}>Data science</h1>
                <p className={"py-2 text-justify"}>The goal of the data science club is to bring together students who
                    are interested in the subject and
                    give them opportunity to learn more. Events including guest lectures, workshops, and hackathons are
                    conducted by the club. The Data Science Club works to provide a supportive environment for students
                    interested in the topic in addition to giving its members opportunity to learn more about data
                    science.</p>
            </div>
        </div>
    </>;
}
