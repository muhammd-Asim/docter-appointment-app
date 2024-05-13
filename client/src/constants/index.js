import { FaHome } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { Avator1, Avator2, Avator3, Avator4, Avator5 } from "../../assets/index";

export const sideBarLinks = [
  {
    label: "Home",
    route: "/",
    icon: FaHome,
  },
  {
    label: "Apply As Docter",
    route: "/apply-docter",
    icon: MdOutlineDateRange,
  },
  {
    label: "appointment",
    route: "/appointment",
    icon: MdOutlineDateRange,
  },
];

export const userSideBarLinks = [
  {
    label: "Apply As Docter",
    route: "/apply-docter",
    icon: MdOutlineDateRange,
  },
  {
    label: "appointments",
    route: "/appointments",
    icon: MdOutlineDateRange,
  },
];

export const docterSideBarLinks = [
  {
    label: "user1",
    route: "/user1",
    icon: MdOutlineDateRange,
  },
  {
    label: "user2",
    route: "/user2",
    icon: MdOutlineDateRange,
  },
];

export const generalSideBarLinks = [
  {
    label: "General",
    route: "/general",
    icon: FaHome,
  },
  {
    label: "Profile",
    route: "/profile",
    icon: MdSettings,
  },
  {
    label: "Logout",
    route: "/signin",
    icon: IoMdLogOut,
  },
];

export const homeCardLinks = [
  {
    title: "New Meeting",
    tagline: "Setup a new recording",
    route: "/",
    Icon: FaHome,
    ClassName: "bg-[#FF742E]",
  },
  {
    title: "Join Meeting",
    tagline: "via invitation link",
    route: "/",
    Icon: FiUserPlus,
    ClassName: "bg-[#0E78F9]",
  },
  {
    title: "Schedule Meeting",
    tagline: "Plan your meeting",
    route: "/",
    Icon: MdOutlineDateRange,
    ClassName: "bg-[#830EF9]",
  },
  {
    title: "View Recordings",
    tagline: "Meeting recordings",
    route: "/",
    Icon: IoVideocam,
    ClassName: "bg-[#F9A90E]",
  },
];

export const avatorImages = [Avator1, Avator2, Avator3, Avator4, Avator5];
