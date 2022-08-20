/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import SideBarLink from "./SideBarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-13 h-14 p-0 xl:ml-24 cursor-pointer hover:bg-[#d9d9d9] hover:bg-opacity-10 rounded-full  w-[52px] h-[52px] xl:w-auto xl:h-auto xl:py-3 xl:px-4 transition duration-200 ease-out">
        <Image src="https://rb.gy/ogau5a" alt="logo" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SideBarLink text="Home" Icon={HomeIcon} active />
        <SideBarLink text="Explore" Icon={HashtagIcon} />
        <SideBarLink text="Notifications" Icon={BellIcon} />
        <SideBarLink text="Messages" Icon={InboxIcon} />
        <SideBarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SideBarLink text="Lists" Icon={ClipboardListIcon} />
        <SideBarLink text="Profile" Icon={UserIcon} />
        <SideBarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline bg-[#1d9bf0] ml-auto text-white text-lg rounded-full w-56 h-[52px] font-bold shadow-md hover:bg-[#1a8cd8]">
        Tweet
      </button>
      <div className="text-[#d9d9d9] flex items-center cursor-pointer justify-center mt-auto xl:ml-auto xl:-mr-5 hover:bg-[#d9d9d9] hover:bg-opacity-10 rounded-full  w-[52px] h-[52px] xl:w-auto xl:h-auto xl:py-3 xl:px-4 transition duration-200 ease-out">
        <img
          src="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?w=163&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt=""
          className="w-10 h-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">firebase 1875</h4>
          <p className="text-[#6e767d]">@firebase1875</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
