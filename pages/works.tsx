import { DocumentMagnifyingGlassIcon, PlusIcon, SquaresPlusIcon, TruckIcon } from "@heroicons/react/24/solid";

export default function Works() {

  return (
    <div className="shadow-2xl border rounded-2xl mt-3">
      <div className="p-10">
        <div className="text-5xl my-5 font-bold flex items-center">
          <div>Works</div>
          <hr className="border border-pink-500 w-36 ml-3" />
        </div>

        <div className="space-y-5">
          <div  className="flex items-start bg-[#fcf4ff] rounded-2xl p-5">
            <div className="w-12 text-pink-500 mt-1">
              <TruckIcon />
            </div>
            <div className="ml-3">
              <div className="text-xl font-bold">OTO Capital
              <span className="text-sm text-gray-400 ml-6"> - Fulltime</span>
              </div>
              <div className="text-gray-500 my-2">
                <ul className="space-y-3">
                  <li>
                    Introduced modern tools like Next.js, Tailwind CSS, ESLint,
                    and Prettier, resulting in fewer errors, improved code
                    readability, and increased developer productivity.
                  </li>
                  <li>
                    Improved page load performance and SEO by utilizing Next.js
                    Image Compression, Static Site Generation (SSG), slug-based
                    URLs, and customized page titles.
                  </li>
                  <li>
                    Integrated Clevertap events using Google Tag Manager to gain
                    a better understanding of user behavior and analytics.
                  </li>
                  <li>
                    Integrated the Vimeo SDK for the Reviews section, allowing
                    users to watch video reviews by other customers and make
                    informed decisions about their two-wheeler purchase.
                  </li>
                  <li>
                    Integrated the Vimeo SDK for the Reviews section, allowing
                    users to watch video reviews by other customers and make
                    informed decisions about their two-wheeler purchase.
                  </li>
                  <li>
                    Developed the Disbursement Module for the Internal Team,
                    resulting in significant productivity improvements. The
                    workload that previously required a team of 6-7 people can
                    now be handled by just 2 people, and the solution is highly
                    scalable.
                  </li>
                  <li>
                    Developed a Lender Portal for OPS team, catering to multiple
                    lenders including NAC, WCAP, and Suryoday Small Finance Bank
                    Ltd.
                  </li>
                  <li>
                    Received the Employee of the Quarter Award for 2022
                    (Nov-Jan) in recognition of outstanding contributions.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-start bg-[#fcf4ff] rounded-2xl p-5">
            <div className="w-8 text-pink-500 mt-1">
              <SquaresPlusIcon />
            </div>
            <div className="ml-3">
              <div className="text-xl font-bold">Newton School
              <span className="text-sm text-gray-400 ml-6"> - Mock Interviewer</span>
              </div>
              <div className="text-gray-500 my-2">
                <ul>
                  <li>
                    Conducted mock interviews for aspiring developers at Newton
                    School, focusing on React.js and HTML/CSS.
                  </li>
                  <li>
                    Assessed candidates technical skills and evaluated their
                    proficiency in React.js concepts and HTML/CSS best
                    practices.
                  </li>
                  <li>
                    Employed a structured interview process to simulate
                    real-world scenarios and assess candidates problem-solving
                    abilities.
                  </li>
                  <li>
                    Provided detailed feedback to help candidates improve their
                    technical skills, coding style, and understanding of
                    React.js and HTML/CSS.
                  </li>
                  <li>
                    Collaborated with the Newton School team to refine the mock
                    interview process and provide valuable insights for
                    curriculum development.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-start bg-[#fcf4ff] rounded-2xl p-5">
            <div className="w-6 text-pink-500 mt-1">
              <PlusIcon />
            </div>
            <div className="ml-3">
              <div className="text-xl font-bold">Trukker Technologies
              <span className="text-sm text-gray-400 ml-6"> - Full-time</span>
            </div>
              <div className="text-gray-500 my-2">
                <ul>
                  <li>
                    Implemented All driver system from scratch which helped the
                    organization to add drivers and there details.
                  </li>
                  <li>
                    Worked on developing new features and improving existing
                    features including bug fixes.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-start bg-[#fcf4ff] rounded-2xl p-5">
            <div className="w-6 text-pink-500 mt-1">
              <DocumentMagnifyingGlassIcon />
            </div>
            <div className="ml-3">
              <div className="text-xl font-bold">Newton School
              <span className="text-sm text-gray-400 ml-6"> - Internship</span>
              </div>
              <div className="text-gray-500 my-2">
                <ul>
                  <li>Full Stack Web Development along with Problem Solving</li>
                  <li>
                    Technical Stack Learned: Node JS, React JS, HTML, Express,
                    CSS, JavaScript, Java, Data Structure Algorithm, and
                    Bootstrap
                  </li>
                  <li>
                    Participated in various Coding Contest Organized by the
                    platform
                  </li>
                  <li>
                    Worked on Various Projects Like To-Do-List, Basic
                    Calculator, Human Verification Captcha
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
