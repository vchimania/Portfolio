import { boxColors, techStats, whatIDo } from "@/src/components/about/helpers";
import { BoltIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Slider from "react-slick";

export default function About() {
  return (
    <div className="shadow-2xl border rounded-2xl mt-3">
      <div className="p-10">
        <div className="text-5xl my-5 font-bold flex items-center">
          <div>About Me</div>
          <hr className="border border-pink-500 w-36 ml-3" />
        </div>
        <div className="space-y-4 text-gray-500">
          <div>
            I am Creative Person and Frontend Developer from Bangalore working in
            web development. I enjoy turning complex problems into simple,
            beautiful and intuitive designs.
          </div>
          <div>
            My aim is to bring across your message and identity in the most
            creative way. I created web design for many famous brand companies.
          </div>
        </div>
        <div className="text-3xl my-5 font-bold">What I Do</div>

        <div className="grid grid-cols-2 gap-7">
          {whatIDo.map((i) => (
            <div
              className={`flex items-start bg-[#fcf4ff] rounded-2xl p-5  ${
                boxColors[i.id % boxColors.length]
              }`}
              key={i.id}
            >
              <div className="w-8 text-pink-500 mt-1">{i.icon}</div>
              <div className="ml-3">
                <div className="text-xl font-bold">{i.title}</div>
                <div className="text-gray-500 my-2">{i.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-7 my-7">
          <div className="text-2xl font-bold">Tech Stack</div>
          <Slider
            {...{
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              centerMode: true,
              centerPadding: "1px",
              arrows: true,
              swipeToSlide: true,
            }}
          >
            {techStats.map((i) => (
              <div className="relative h-44 overflow-hidden my-7" key={i.id}>
                <Image
                  unoptimized
                  layout="fill"
                  src={i.img}
                  className="mx-6 rounded-2xl w-6 bg-none"
                  alt="image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
