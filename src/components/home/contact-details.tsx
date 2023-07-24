import Image from "next/image";
import React from "react";
import { connectionDetails, homeContactDetails } from "../about/helpers";
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const ContactDetails = () => {
  return (
    <div className="shadow-2xl rounded-2xl border bg-white h-fit sticky top-0 left-0">
      <div className="text-center">
        <div className="flex justify-center">
          <Image
            unoptimized
            alt="profile image"
            src="/vini-profile.jpeg"
            width={200}
            height={150}
            className="-mt-32 rounded-2xl "
          />
        </div>
        <div className="space-y-4">
          <div className="font-bold mt-5 text-lg">Vini Chimania</div>
          <div className="text-gray-400">Software Developer</div>
          <div className="flex justify-evenly">
            {connectionDetails.map((c) => (
              <div
                className="bg-gray-300 p-3 rounded-lg cursor-pointer"
                key={c.id}
              >
                <Link href={c.link}>
                  <div>{c.icon}</div>
                </Link>
              </div>
            ))}
          </div>

          {/* contact details section */}
          <div className="p-8">
            <div className="p-5 bg-[#f3f6f6] rounded-xl space-y-3">
              {homeContactDetails.map((h) => (
                <div className="flex" key={h.id}>
                  <div className="p-3 rounded-lg bg-white">
                    <div className="text-gray-500 w-6 h-6">{h.icon}</div>
                  </div>
                  <div className="text-left ml-4">
                    <div className="text-sm text-[#495e75]">{h.name}</div>
                    <div>{h.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-10">
            <a
              href="/vini-resume.pdf"
              download="Vini_SD-1_Resume"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="rounded-full py-5 text-lg px-8 font-bold bg-gradient-to-r from-[#e02a74] to-[#f8585f] text-white"
              >
                <ArrowDownTrayIcon className="w-7 h-7 inline-flex mr-2 mb-3" />
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
