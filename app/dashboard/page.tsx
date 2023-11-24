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

//Types
interface ActualSidebarProps {
  setProject: (project: string) => void
}

export default function Index(): JSX.Element {

  const [project,SetProject] = useState("")
  return (
    <SidebarProvider>
      <Header />
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <Project project={project}/>
        </main>
        <div className="order-1">
          <ActualSidebar setProject={SetProject}/>
        </div>
      </div>
    </SidebarProvider>
  );
}

function ActualSidebar<T>({ setProject }: ActualSidebarProps): JSX.Element {
  return (
    <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <SidebarCollapse icon={HiViewBoards} label="Projects">
              {
                ["project-1","project-2"].map(project => <Sidebar.Item key={project} onClick={()=>setProject(project)} icon={""}>{project}</Sidebar.Item>)
              }
              <Sidebar.Item className="w-full hover:bg-gray-100 hover:cursor-pointer active:bg-gray-200" button onClick={() => {}} icon={HiPlus}>
                Add
              </Sidebar.Item>
            </SidebarCollapse>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
  );
}

