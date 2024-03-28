// SidebarData.js
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MDIcons from "react-icons/md";

export const SidebarData = [
  {
    heading: "Main",
    title: "Dashboard",
    path: "",
    icon: <AiIcons.AiFillHome className="icon" />,
    isFirstHeading: true,
    subNav: [
      {
        title: "Total Orders",
        path: "/admin/dashboard",
        icon: <AiIcons.AiTwotoneDashboard className="icon" />,
      },
      {
        title: "Completed Orders",
        path: "/admin/completedOrders",
        icon: <FaIcons.FaCheckCircle className="icon" />,
      },
      {
        title: "Pending Orders",
        path: "/admin/pendingOrders",
        icon: <MDIcons.MdOutlinePendingActions className="icon" />,
      },
      {
        title: "Canceled Orders",
        path: "/admin/canceledOrders",
        icon: <MDIcons.MdCancel className="icon" />,
      },
    ],
  },
  {
    title: "Category",
    path: "",
    icon: <IoIcons.IoIosPaper className="icon" />,
    subNav: [
      {
        title: "Add Category",
        path: "/admin/addcategory",
        icon: <IoIcons.IoIosPaper className="icon" />,
      },
      {
        title: "Add Product",
        path: "/admin/addProduct",
        icon: <IoIcons.IoIosPaper className="icon" />,
      },
      {
        title: "All Products",
        path: "/admin/allProducts",
        icon: <IoIcons.IoIosPaper className="icon" />,
      },
      {
        title: "Edit Product",
        path: "/admin/editProduct",
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
    path: "",
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
      {
        title: "Add New Product",
        path: "/addProduct",
        icon: <MDIcons.MdPlaylistAdd className="icon" />,
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
