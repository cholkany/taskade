"use client";


import Image from "next/image";
import React, { useState } from "react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiPlus,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiUserCircle,
  HiViewBoards,
} from "react-icons/hi";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { SidebarProvider } from "../context/SidebarContext";
import { SidebarCollapse } from "flowbite-react/lib/esm/components/Sidebar/SidebarCollapse";
import { Button } from "flowbite-react";
import Project from "../components/Project";
import ActualSidebar from "../components/ActualSidebar";

//Types
interface ActualSidebarProps {
  setProject: (project: string) => void
}

export default function Index(): JSX.Element {

  const [project,SetProject] = useState("")
  function setActiveProject(project:string){
    SetProject(project)
  }
  return (
    <SidebarProvider h>
      <Header />
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <Project project={project}/>
        </main>
        <div className="order-1">
          <ActualSidebar setProject={setActiveProject}/>
        </div>
      </div>
    </SidebarProvider>
  );
}


