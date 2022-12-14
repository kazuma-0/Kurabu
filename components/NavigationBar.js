/* eslint-disable @next/next/no-img-element */
import {
    Container,
    MenuButton,
    Menu,
    MenuList,
    MenuItem,
    MenuDivider,
} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {IconMenu2} from "@tabler/icons";
import Link from "next/link";
import kaheLogo from "../assets/kahe.png";

const links = [
    {
        label: "communities",
        url: "/#communities",
    },
    {
        label: "Vision and Mission",
        url: "/vision-and-mission",
    },
    {
        label: "Collaboration",
        url: "/collaboration"
    },
    {
        label: "Action plans",
        url: "/action-plans",
    },
    {
        label: "events",
        url: "/events",
    },
    {
        label: "blog",
        url: "/blog",
    },
    {
        label: "Contact Us",
        url: "#contact-us"
    }
];

function NavigationBar() {
    const router = useRouter();
    return (
            <Container
                id={"nav"}
                maxW={"container.xl"}
                className={"h-28 flex justify-between items-center"}
                >
                <Link href={"/"}>
                    <div
                        className={
                        "cursor-pointer flex justify-around w-full lg:w-fit space-x-5 items-center"
                    }
                        >
                        {/* <img src={metaverse.src} className={"h-24"} alt="" /> */}
                        <img src={kaheLogo.src} className={"h-20"} alt=""/>
                    </div>
                </Link>
                <div className="lg:flex space-x-6 hidden">
                    {links.map(x=>x).splice(0, 2).map((link) => {
                        return (
                                <div
                                    key={link.label}
                                    className={"text-md hover:scale-[101%] transition-all uppercase tracking-wide font-rubik"}
                                    >
                                    <Link href={link.url} scroll={false}>
                                        {link.label}
                                    </Link>
                                </div>
                                );
                    })}
                    <div>
                        <Menu bgColor="#16171d">
                            <MenuButton className="uppercase">Collaboration</MenuButton>
                            <MenuList className={"!bg-[#16171d]"}>
                                <MenuItem>
                                    <Link href="/collaboration/industrial">Industrial</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href="/collaboration/academic">Academic</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    {links.map(x=>x).splice(3).map((link) => {
                    return (
                            <div
                                key={link.label}
                                className={"text-md hover:scale-[101%] transition-all uppercase tracking-wide font-rubik"}
                                >
                                <Link href={link.url} scroll={false}>
                                    {link.label}
                                </Link>
                            </div>
                            );
                })}

            </div>
            <div className="lg:hidden rounded-full  z-50 fixed bottom-5 right-5">
                {/* Menu button with links */}
                <Menu>
                    <MenuButton rounded="full" bgColor={"black"} p={2}>
                        <IconMenu2 size={50}/>
                    </MenuButton>
                    <MenuList>
                        {links.map((link) => {
                            return (
                                <MenuItem
                                    onClick={() => {
                                        router.push(link.url);
                                    }}
                                    key={link.label}
                                >
                                    {/* <div
                    className={
                      "text-md uppercase tracking-wide font- font-light"
                    }
                  > */}
                                    <Link href={link.url} scroll={false}>
                                        {link.label}
                                    </Link>
                                    {/* </div> */}
                                </MenuItem>
                            );
                        })}
                    </MenuList>
                </Menu>
            </div>
        </Container>
    );
}

export default NavigationBar;
