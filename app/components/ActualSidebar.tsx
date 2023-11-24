import { Sidebar } from "flowbite-react"
import { SidebarCollapse } from "flowbite-react/lib/esm/components/Sidebar/SidebarCollapse"
import { FC } from "react"
import { BiBuoy } from "react-icons/bi"
import { HiChartPie, HiInbox, HiPlus, HiUser, HiViewBoards } from "react-icons/hi"

interface ActualSidebarProps {
    setProject: (project: string) => void
}

const ActualSidebar: FC<ActualSidebarProps> = function ({setProject}) {
    return(
        <Sidebar>
            <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <SidebarCollapse icon={HiViewBoards} label="Projects">
            {
              ["project-1","project-2"].map(project => <Sidebar.Item key={project} onClick={setProject(project)} icon={""}>{project}</Sidebar.Item>)
            }
            <Sidebar.Item className="w-full hover:bg-gray-100 hover:cursor-pointer active:bg-gray-200" button onClick={() => {}} icon={HiPlus}>
              Add
            </Sidebar.Item>
          </SidebarCollapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
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
    )
}

export default ActualSidebar;