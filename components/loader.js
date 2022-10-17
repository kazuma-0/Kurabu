import {Center} from "@chakra-ui/react";

function Loader(){
    return <>
    <div className={"fixed top-0 left-0 h-screen w-screen z-[999] bg-[#101014]"}>
        <Center className="h-full">
            <div className={"w-32 h-1 rounded-sm bg-black relative before:content-[''] before:animate-load overflow-x-hidden before:rounded-sm before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:z-2"}></div>
        </Center>
    </div>
    </>
}

export default Loader;