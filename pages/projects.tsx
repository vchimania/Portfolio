import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import {
  ClockIcon,
  MagnifyingGlassCircleIcon,
  ShoppingCartIcon,
  SunIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Projects = () => {
  return (
    <div className="shadow-2xl border rounded-2xl mt-3">
      <div className="p-10">
        <div className="text-5xl my-5 font-bold flex items-center">
          <div>Projects</div>
          <hr className="border border-pink-500 w-36 ml-3" />
        </div>

        <div className="space-y-5">
           <div className="flex items-start bg-[#fcf4ff] rounded-2xl p-5">
            <div className="w-8 text-pink-500 mt-1">
              <CursorArrowRaysIcon />
            </div>
            <div className="ml-3">
              <div className="flex items-center pb-2">
                <div className="text-xl font-bold">OTO Capital</div>
                <a
                  href="https://www.otocapital.in/"
                  className="text-blue-400 ml-7 text-sm"
                  target="_blank"
                >
                  {" "}
                  Project Link
                </a>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>
                  OTO Capital is a software platform that helps people to own or buy a car. The platform works in partnership with various banks and NBFCs to provide financing options to its customers.
                </li>
                <li>User can navigate through pages by different url and by applying filters</li>
                <li>User can apply for loan and can buy bikes on finance by uploading his/her documents</li>
                <li>The platform has different offer as well where user will get discount on his purchase</li>
                <li>
                  Role : Frontend Developer | Tech Stack: NextJS, ReactJS, HTML, CSS
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start bg-[#fcf4ff] rounded-2xl p-5">
            <div className="w-8 text-pink-500 mt-1">
              <ShoppingCartIcon />
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <div className="text-xl font-bold  pb-2">Shopping Cart</div>
                <a
                  href="https://cart-react23.netlify.app/"
                  className="text-blue-400 ml-7 text-sm"
                  target="_blank"
                >
                  {" "}
                  Project Link
                </a>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>
                  Shopping cart is a web application where the user can see the
                  product and add the product in the cart
                </li>
                <li>User can select multiple item in his cart and remove it</li>
                <li>Every product has a price with tax and shipping price</li>
                <li>
                  Role : Software Developer | Tech Stack: HTML, CSS, JavaScript
                  (Array Methods: filter, find, map, reduce) React (Components,
                  Props, Events, Hooks)
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start bg-[#fefaf0] rounded-2xl p-5">
            <div className="w-12 text-pink-500 mt-1">
              <MagnifyingGlassCircleIcon />
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <div className="text-xl font-bold pb-2">Meal Finder</div>
                <a
                  href="https://upm9j.csb.app/"
                  className="text-blue-400 ml-7 text-sm"
                  target="_blank"
                >
                  {" "}
                  Project Link
                </a>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>
                  A Meal Finder Website, where we search different types of
                  meal.
                </li>
                <li>
                  Meal Finder is to the rescue, helping you waste less food and
                  eat fantastic meals. This website is simple and effective, and
                  there’s no need to download or install anything on your
                  device.
                </li>
                <li>
                  If you search for particular meal like chicken, fish, cake
                  they show you all available results. From there, you can click
                  on particular item then they show you there all information
                  like dish name, image, ingredients and recipes.
                </li>
                <li>
                  Role : Software Developer | Tech Stack : HTML, CSS, JavaScript{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start bg-[#fff4f4] rounded-2xl p-5">
            <div className="w-8 text-pink-500 mt-1">
              <SunIcon />
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <div className="text-xl font-bold pb-2">Weather App</div>
                <a
                  href="https://adoring-davinci-ba44b5.netlify.app/"
                  target="_blank"
                  className="text-blue-400 ml-7 text-sm"
                >
                  Project Link
                </a>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>Built a Weather Application by using weather API</li>
                <li>
                  Features: Users can view the current temperature of any city
                  along with the lowest and highest temperature of the day.
                </li>
                <li>
                  Role: Developer | Tech Stack: HTML, CSS, JavaScript, ReactJS
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6">
          <div className="col-span-1 space-y-4">
            <div className="flex items-start bg-[#fff0f8] rounded-2xl p-5">
              <div className="w-5 text-pink-500 mt-1">
                <TrophyIcon />
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold pb-2">Achievements</div>
                <ul className="space-y-1 text-gray-700">
                  <li>Participated in TechGig Code Challenge</li>
                  <li>Banned 2 position in Google Quiz challenge</li>
                  <li>Volunteered in Xception(TechFest at TIEIT)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-1 space-y-4">
            <div className="flex items-start bg-[#f3faff] rounded-2xl p-5">
              <div className="w-5 text-pink-500 mt-1">
                <ClockIcon />
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold pb-2">Hobbies</div>
                <ul className="space-y-1 text-gray-700">
                  <li>Travelling</li>
                  <li>Watching Anime</li>
                  <li>Crafts, such as sketching</li>
                  <li>Board games</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
