import { eductaion, experience } from "@/src/components/about/helpers";
import { BookmarkIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { SetStateAction, useState } from "react";

export default function Resume() {
  const [reactDetails, setReactDetails] = useState("85");

  const handleReactChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setReactDetails(e.target.value);
  };

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
                  <div>{e.year}</div>
                  <Link href="/works" className="text-blue-500">Click Here</Link>
                </div>
                <div>{e.organisation}</div>
                <div>{e.desgination}</div>
                <div>{e.techStack}</div>
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
                <div>{e.year}</div>
                <div>{e.branch}</div>
                <div>{e.college}</div>
                <div>{e.marks}</div>
                <div>{e.location}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="shadow-2xl rounded-2xl">
          <div className="grid grid-cols-4 gap-4 pt-6">
            <div className="col-span-2">
              <div className="text-2xl font-semibold">Working Skill</div>
              <div>
                <div className="flex justify-between">
                  <div>Web Design</div>
                  <div>{reactDetails}%</div>
                </div>
                <input
                  type="range"
                  name="react"
                  value={reactDetails}
                  onChange={() => {
                    handleReactChange;
                  }}
                />
              </div>

              <div>
                <div className="flex justify-between">
                  <div>JS</div>
                  <div>{reactDetails}%</div>
                </div>
                <input
                  type="range"
                  name="react"
                  value={reactDetails}
                  onChange={() => {
                    handleReactChange;
                  }}
                />
              </div>

              <div>
                <div className="flex justify-between">
                  <div>React</div>
                  <div>{reactDetails}%</div>
                </div>
                <input
                  type="range"
                  name="react"
                  value={reactDetails}
                  onChange={() => {
                    handleReactChange;
                  }}
                />
              </div>
            </div>

            <div className="col-span-2">
              <div className="text-2xl font-semibold">Knowledges</div>
              <div className="flex flex-wrap space-x-7">
                <div  className="bg-[#edf2f2] rounded-xl p-3 ">HTML</div>
                <div  className="bg-[#edf2f2] rounded-xl p-3">CSS</div>
                <div  className="bg-[#edf2f2] rounded-xl p-3">Remix</div>
                <div  className="bg-[#edf2f2] rounded-xl p-3">TypeScript</div>
                <div  className="bg-[#edf2f2] rounded-xl p-3">Git</div>
                <div  className="bg-[#edf2f2] rounded-xl p-3">Vercel</div>
                <div  className="bg-[#edf2f2] rounded-xl p-3">Responsive Design</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
