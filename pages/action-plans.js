import Head from 'next/head'

function ActionPlans() {
    return (
        <>
            <Head>
                <title>Action Plans</title>
            </Head>
            <div className="h-cover py-5">
                <h1 className="text-4xl font-bold font-ligurino tracking-wider">
                    Action Plans for the next academic year
                </h1>
                <div className="py-3">
                    <ul className="list-disc text-xl px-5 leading-relaxed tracking-wide">

                        <li>Planning to provide industry-oriented Hands-on Training on AR/VR</li>

                        <li>Guiding students toward product-based research ideas in AR/VR, Data Science and Blockchain
                        </li>

                        <li>Student Exchange Program with Kyungpook National University for Blockchain Project</li>

                        <li>Participation in Hackathon and other technical events</li>

                        <li>Consultancy Project – Students are working on a Blockchain application for an industrial
                            framework
                        </li>

                        <li>Microsoft Student&apos;s Research paper under process for ACM SAC 2023</li>

                        <li>Planning to conduct boot camp on AR &VR by SCOPIK</li>

                        <li>Planning To Conduct Two Hackathons based on SDG goals</li>

                        <li>Applying for Patent and Publications on specific research specializations</li>

                    </ul>
                </div>
            </div>
        </>
    );
}

export default ActionPlans;