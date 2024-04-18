import Image from "next/image";

export default function Home() {
  const border = ``
  return (
    <main>
      <div className="flex flex-col min-h-screen m-2 gap-2">

        <div className="flex flex-row min-w-screen min-h-60">

          <div className="basis-1/6 flex flex-row justify-center self-start mt-12 px-[12px]">
            <div className="relative rounded-full overflow-hidden w-[150px]">
              <img src="https://avatars.githubusercontent.com/u/167353440?v=4" alt="Tiago's photo"/>
            </div>
          </div>

          <div className="basis-10/12 pb-[12px] mt-12 px-[12px]">
            <p className="text-2xl">Tiago Takeda</p>
            <p className="text-[15px] text-gray-400 mb-2">Javascript Developer</p>
            <p className="text-[15px] leading-5">A passionate Fullstack Web Developer specializing in AWS, React, and Node.js to create high-performance web applications. Expertise includes designing and deploying scalable cloud infrastructures utilizing a broad range of AWS services such as EC2, S3, Lambda, and DynamoDB. Proficient in multiple programming languages including Python, JavaScript, TypeScript, and C++. Skilled in building feature-rich frontends and powerful server-side solutions, with extensive experience in automating deployment through CI/CD pipelines using AWS Code tools. Also proficient in optimizing web applications for speed using CDN and other performance-enhancing techniques. Beyond technical skills in web development, there is a deep fascination with machine learning and AI, with a commitment to continually exploring new technologies and frameworks for innovative problem-solving.</p>
          </div>

        </div>

        <div className="flex flex-row gap-2 border-2 border-blue-800">

          <div className="border-2 border-gray-300 border-radius rounded-lg basis-2/3">
            <p className="flex flex-row justify-center items-center py-20">
              WORKHISTORY + EDUCATION
            </p>
          </div>

          <div className="border-2 border-gray-300 border-radius rounded-lg basis-1/3">
            <p className="flex flex-row justify-center items-center py-20">
            TECHNICAL SKILLS
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
