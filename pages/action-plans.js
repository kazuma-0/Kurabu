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
                        <li>Planning to provide industry-oriented Hands-on Training</li>
                        <li>Guiding students towards product-based research ideas</li>
                        <li>Participation in Hackathon and other technical events</li>
                        <li>Consultancy Project – Students are working</li>
                        <li>Students Research paper under process for ACM SAC 2023</li>
                        <li>Planning to conduct boot camp on AR & VR</li>
                        <li>Planning To Conduct Two Hackathon</li>
                        <li>Applying for Patent and Publications</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ActionPlans;
