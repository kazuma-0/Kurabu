import AchievementViewer from "../components/AchievementViewer";
import {useRouter} from "next/router";
import Head from 'next/head'

function Events() {
    return <>
        <Head>
            <title>
               Achievements
            </title>
        </Head>
        <AchievementViewer link={"/achievement/"}/>
    </>;
}

export default Events;
