import { SquaresPlusIcon } from "@heroicons/react/24/solid";
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
              <SquaresPlusIcon />
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <div className="text-xl font-bold">Shopping Cart</div>
                <a href="https://cart-react23.netlify.app/" className="text-blue-400 ml-7">
                  {" "}
                  Project Link
                </a>
              </div>
              <ul>
                <li>
                 Shopping cart is a web application where the user can see the product and add the product in the cart
                </li>
                <li>
                  User can select multiple item in his cart and remove it 
                </li>
                <li>
                 Every product has a price with tax and shipping price
                </li>
                <li>Role : Software Developer | Tech Stack: HTML, CSS, JavaScript (Array Methods: filter, find, map, reduce) 
                  React (Components, Props, Events, Hooks)
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start bg-[#fcf4ff] rounded-2xl p-5">
            <div className="w-8 text-pink-500 mt-1">
              <SquaresPlusIcon />
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <div className="text-xl font-bold">Meal Finder</div>
                <a href="https://upm9j.csb.app/" className="text-blue-400 ml-7">
                  {" "}
                  Project Link
                </a>
              </div>
              <ul>
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
                <li>Role : Software Developer | Tech Stack : HTML, CSS, JavaScript </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start bg-[#fcf4ff] rounded-2xl p-5">
            <div className="w-8 text-pink-500 mt-1">
              <SquaresPlusIcon />
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <div className="text-xl font-bold">Weather App</div>
                <a href="https://adoring-davinci-ba44b5.netlify.app/" className="text-blue-400 ml-7">
                  Project Link
                </a>
              </div>
              <ul>
                <li>
                 Built a Weather Application by using weather API
                </li>
                <li>
                 Features: Users can view the current temperature of any city along with the lowest and highest temperature of the day.
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
<div className="flex items-start bg-[#fcf4ff] rounded-2xl p-5">
            <div className="w-8 text-pink-500 mt-1">
              <SquaresPlusIcon />
            </div>
            <div className="ml-3">
              <div className="text-xl font-bold">Achievements</div>
              <ul>
                <li>Participated in TechGig Code Challenge</li>
                <li>Banned 2 position in Google Quiz challenge</li>
                <li>Volunteered in Xception(TechFest at TIEIT)</li>
              </ul>
            </div>
          </div>
          </div>

          <div className="col-span-1 space-y-4">
             <div className="flex items-start bg-[#fcf4ff] rounded-2xl p-5">
            <div className="w-8 text-pink-500 mt-1">
              <SquaresPlusIcon />
            </div>
            <div className="ml-3">
              <div className="text-xl font-bold">Hobbies</div>
              <ul>
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
