import BlogViewer from "../components/BlogViewer";
import Head from 'next/head'
function Events() {
   return <>
   <Head>
       <title>Blog</title>
   </Head>
        <BlogViewer link={"/blog/"}/>
    </>;
}

export default Events;
