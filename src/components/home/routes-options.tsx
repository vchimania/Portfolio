import Link from "next/link";
import React from "react";
import { menuItems } from "../about/helpers";
import { useRouter } from "next/router";

const SectionsBar = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-end ">
        {menuItems.map((m) => (
          <Link
            href={m.url}
            className={`shadow-lg shadow-pink-500/50 rounded p-3 mr-6 ${
              router.asPath === m.url
                ? "bg-[#f44959] text-white font-semibold"
                : " bg-[#f3f6f6] text-[#44566c]"
            }`}
            key={m.id}
          >
            <div className="w-6 h-6 mx-auto">{m.icon}</div>
            <div className="font-medium">{m.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionsBar;
