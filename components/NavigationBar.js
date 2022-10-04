import {Container} from "@chakra-ui/react";
import Link from "next/link";
import metaverse from '../assets/logo.png'
const links = [
    {
        label: "clubs",
        url: "/#clubs"
    },

    {
        label: "events",
        url: "/events"
    },

    {
        label: "blog",
        url: "/blog"
    },

]


function NavigationBar(){
    return <Container maxW={"container.xl"} className={"h-28 flex justify-between items-center"}>
        <div>
            <img src={metaverse.src} width={"100px"} alt=""/>
        </div>
        <div className="flex space-x-8">
            {
                links.map(link=>{
                    return <div key={link.label} className={"text-lg uppercase tracking-wide font-ligurino font-light"}>
                        <Link href={link.url}>
                            {link.label}
                        </Link>
                    </div>
                })
            }
        </div>
    </Container>
}

export default  NavigationBar;