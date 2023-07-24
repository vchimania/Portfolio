import { eductaion, experience } from "@/src/components/about/helpers";
import { BookmarkIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="shadow-2xl border rounded-2xl mt-3">
      <div className="p-10">
        <div className="text-5xl my-5 font-bold flex items-center">
          <div>Resume</div>
          <hr className="border border-pink-500 w-36 ml-3" />
        </div>

        <div className="grid grid-cols-4 gap-4 pt-6">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center">
              <BriefcaseIcon className="w-7 text-[#f95054] mr-2" />
              <div className="text-2xl font-semibold">Experience</div>
            </div>

            {experience.map((e) => (
              <div className="bg-[#fcf4ff] rounded-2xl p-5" key={e.id}>
                <div className="flex justify-between">
                <div className="font-bold">{e.organisation}</div>
                  <div className="text-gray-500 text-sm">{e.year}</div>
                </div>
                
                <div>{e.desgination}</div>
                <div><span className="font-bold">Tech Stack : </span>{e.techStack}</div>
                <div>{e.location}</div>
              </div>
            ))}
          </div>
          <div className="col-span-2 space-y-4">
            <div className="flex items-center">
              <BookmarkIcon className="w-7 text-[#f95054] mr-2" />
              <div className="text-2xl font-semibold">Education</div>
            </div>

            {eductaion.map((e) => (
              <div className="bg-[#fcf4ff] rounded-2xl p-5" key={e.id}>
                <div className="flex justify-between">
                <div className="font-bold">{e.college}</div>
                <div className="text-gray-500 text-sm">{e.year}</div>
                </div>
                <div>{e.branch}</div>
                <div>{e.marks}</div>
                <div>{e.location}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="shadow-2xl rounded-2xl mt-5">
          <div className="grid grid-cols-4 gap-4 pt-6 p-7">
            <div className="col-span-2 space-y-2">
              <div className="text-2xl font-semibold py-3">Working Skill</div>
              <div className="space-y-4">
                <div>
                  <div className="text-[#526377]">Web Design</div>
                  <ProgressBar completed={87} />
                </div>

                <div>
                  <div className="text-[#526377]">React</div>
                  <ProgressBar completed={90}/>
                </div>

                <div>
                  <div className="text-[#526377]">JavaScript</div>
                  <ProgressBar completed={80} />
                </div>

                <div>
                  <div className="text-[#526377]">HTML</div>
                  <ProgressBar completed={91} />
                </div>

                <div>
                  <div className="text-[#526377]">CSS</div>
                  <ProgressBar completed={90} />
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="text-2xl font-semibold py-2">Knowledges</div>
              <div className="flex flex-wrap space-x-4 space-y-2 text-[#526377]">
                <div className="bg-[#edf2f2] rounded-xl p-3">Remix</div>
                <div className="bg-[#edf2f2] rounded-xl p-3">TypeScript</div>
                <div className="bg-[#edf2f2] rounded-xl p-3">Git</div>
                <div className="bg-[#edf2f2] rounded-xl p-3">Vercel</div>
                <div className="bg-[#edf2f2] rounded-xl p-3">
                  Frameworks and Libraries
                </div>
                <div className="bg-[#edf2f2] rounded-xl p-3">
                  Version Control
                </div>
                <div className="bg-[#edf2f2] rounded-xl p-3">
                  Web Performance
                </div>
                <div className="bg-[#edf2f2] rounded-xl p-3">
                  Responsive Web Design
                </div>
                <div className="bg-[#edf2f2] rounded-xl p-3">
                  Browser Developer Tools
                </div>
                <div className="bg-[#edf2f2] rounded-xl p-3">
                  Web Accessibility
                </div>
                <div className="bg-[#edf2f2] rounded-xl p-3">
                  Web Performance
                </div>
                <div className="bg-[#edf2f2] rounded-xl p-3">
                  CSS Preprocessors
                </div>
                <div className="bg-[#edf2f2] rounded-xl p-3">RESTful APIs</div>
                <div className="bg-[#edf2f2] rounded-xl p-3">Testing</div>
                <div className="bg-[#edf2f2] rounded-xl p-3">
                  Performance Optimization
                </div>
                <div className="bg-[#edf2f2] rounded-xl p-3">Security</div>
                <div className="bg-[#edf2f2] rounded-xl p-3">
                  Performance Profiling
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
