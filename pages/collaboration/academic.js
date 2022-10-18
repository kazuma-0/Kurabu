import {Center} from "@chakra-ui/react";

const academic_colab = [
    {
        name: "",
        url:"",
        image:"",
        for:"",
    }
]

function Academic(){
    return <div className={"h-cover"}>
        <h1 className={"text-4xl font-bold py-9"}>Academic Collaboration</h1>
        <div className={"grid grid-cols-3 gap-5"}>
            {
                [].map(industry => <Center key={industry.name} flexDirection={"column"}
                    className={"ring-white/40 ring-1 rounded"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://scopik.in/images/scopik-logo.png" alt="no"/>
                    <div className={"text-center uppercase text-2xl pt-2 font-bold"}>{industry.name}</div>
                    <p className={"text-sm pb-2 font-rubik"}>{industry.for}</p>
                </Center>
                )
            }
        </div>
    </div>
}

export default Academic;