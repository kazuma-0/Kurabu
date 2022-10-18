import {Center} from "@chakra-ui/react";

const industrial_colab = [
    {
        name: "Scopik",
        url: "",
        image: "",
        for: "AR/VR Specialization"
    },
    {
        name: "Raise",
        url: "",
        image: "",
        for: "AI/ML/Data Science",
    },
    {
        name: "Celastial",
        url: "",
        image: "",
        for: "Blockchain Technology"
    },
    {
        name: "Dell",
        url: "",
        image: "",
        for: "AI-related projects"
    }
]

function Industrial() {
    return <div className={"h-cover"}>
        <h1 className={"text-4xl font-bold py-9"}>Industrial Collaborations</h1>
        <div className={"grid grid-cols-3 gap-5"}>
            {
                industrial_colab.map(industry => <Center key={industry.name} flexDirection={"column"}
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

export default Industrial;
