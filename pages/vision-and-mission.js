import Head from 'next/head'
function VisionMission() {
  return (
          <>
          <Head>
              <title>Vision and Mission</title>
          </Head>
          <div className="h-cover py-3">
              <h1 className="text-4xl tracking-wider font-bold font-ligurino">
                  Vision
              </h1>
              <p className="py-4 text-xl text-justify leading-relaxed">
                  <ul className="list-disc px-4">
                      <li>
                          To provide students with top-notch advanced technical training, they may become dedicated, well-prepared technology experts with cutting-edge research talents, ethical standards, and moral principles.
                      </li>
                  </ul>
              </p>
              <h1 className="text-4xl tracking-wider font-bold font-ligurino">
                  Mission
              </h1>
              <p className="py-4 text-xl text-justify leading-relaxed">
                  <ul className="list-disc px-4">
                      <li>
                          Train students in the fundamentals and current technological advancements in Computer Science and Engineering, such as AR/VR, Data Science and Blockchain Technology.
                      </li>
                      <li>
                          Pursue creative and innovative research ideas and Projects in Computer science specialization to serve the needs of Industry and Society with integrity, ethical and moral values
                      </li>
                  </ul>
              </p>
          </div>

          </>
  );
}

export default VisionMission;
