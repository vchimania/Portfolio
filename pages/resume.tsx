import { BookmarkIcon } from "@heroicons/react/24/solid";

export default function Resume(){
    return(
        <div className="shadow-2xl border rounded-2xl mt-3">
      <div className="p-10">
        <div className="text-3xl my-5 font-bold flex items-center">
          <div>Resume</div>
          <hr className="border border-pink-500 w-36 ml-3" />
        </div>

        <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div>
                <BookmarkIcon className="w-5"/>
            <div className="text-xl ">Education</div>
            </div>
            <div>skdjskdj</div>
            <div>skdjskdj</div>
            <div>Experience</div>
            <div>skdjskdj</div>

        </div>
        </div>
        </div>
    )
}