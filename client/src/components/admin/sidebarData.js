// SidebarData.js
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    heading: "Main",
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome className="icon" />,
    isFirstHeading: true,
  },
  {
    title: "Shops",
    path: "/shops",
    icon: <IoIcons.IoIosPaper className="icon" />,
    subNav: [
      {
        title: "All shops",
        path: "",
        icon: <IoIcons.IoIosPaper className="icon" />,
      },
      {
        title: "Add new shop",
        path: "/shops/add-new-shops",
        icon: <IoIcons.IoIosPaper className="icon" />,
      },
      {
        title: "Inactive/New shops",
        path: "/shops/new-shops",
        icon: <IoIcons.IoIosPaper className="icon" />,
      },
    ],
  },
  {
    title: "My Shops",
    path: "/my Shops",
    icon: <FaIcons.FaCartPlus className="icon" />,
  },
  {
    heading: "Product Management",
    title: "Products",
    path: "/products",
    icon: <IoIcons.IoMdHelpCircle className="icon" />,

    subNav: [
      {
        title: "All Products",
        path: "/products/all-product",
        icon: <IoIcons.IoIosPaper className="icon" />,
      },
      {
        title: "My Draft products",
        path: "/products/my-draft-products",
        icon: <IoIcons.IoIosPaper className="icon" />,
      },
      {
        title: "All Low & Out of stock products",
        path: "/products/out-of-stocks",
        icon: <IoIcons.IoIosPaper className="icon" />,
      },
    ],
  },
  {
    title: "Inactive/New shops",
    path: "/shops/new-shops",
    icon: <IoIcons.IoIosPaper className="icon" />,
  },
  {
    title: "Inventory",
    path: "/shops/new-shops",
    icon: <IoIcons.IoIosPaper className="icon" />,
  },
  {
    title: "Categories",
    path: "/shops/new-shops",
    icon: <IoIcons.IoIosPaper className="icon" />,
  },
  {
    title: "Tags",
    path: "/shops/new-shops",
    icon: <IoIcons.IoIosPaper className="icon" />,
  },
  {
    title: "Attributes",
    path: "/shops/new-shops",
    icon: <IoIcons.IoIosPaper className="icon" />,
  },
  {
    title: "Manufactures/Publications",
    path: "/shops/new-shops",
    icon: <IoIcons.IoIosPaper className="icon" />,
  },
  {
    title: "Author",
    path: "/shops/new-shops",
    icon: <IoIcons.IoIosPaper className="icon" />,
  },
];
