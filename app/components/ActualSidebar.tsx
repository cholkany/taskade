import { Button, Sidebar } from "flowbite-react"
import { SidebarCollapse } from "flowbite-react/lib/esm/components/Sidebar/SidebarCollapse"
import { FC } from "react"
import { BiBuoy } from "react-icons/bi"
import { HiAnnotation, HiChartPie, HiCog, HiIdentification, HiInbox, HiPlus, HiSearch, HiShare, HiUser, HiViewBoards } from "react-icons/hi"

interface ActualSidebarProps {
    setProject: (project: string) => void
}

const ActualSidebar: FC<ActualSidebarProps> = function ({setProject}) {

    const setActive = (project: string) => {
        setProject(project)
    }
    return(
        <Sidebar>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#"  icon={HiSearch}>Search</Sidebar.Item>
                <Sidebar.Item href="#" icon={HiCog}>Settings</Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <SidebarCollapse icon={HiShare} label="Shared">
                  {
                    ["project-1","project-2"].map(project => <Sidebar.Item key={project} onClick={setActive(project)} icon={""}>{project}</Sidebar.Item>)
                  }
                </SidebarCollapse>
                <SidebarCollapse icon={HiViewBoards} label="My Projects">
                  {
                    ["project-1","project-2"].map(project => <Sidebar.Item key={project} onClick={setProject(project)} icon={""}>{project}</Sidebar.Item>)
                  }
                  <Sidebar.Item className="w-full hover:bg-gray-100 hover:cursor-pointer active:bg-gray-200" button onClick={() => {}} icon={HiPlus}>
                    Add
                  </Sidebar.Item>
                </SidebarCollapse>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiAnnotation}>
                  About
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={BiBuoy}>
                  Help
                </Sidebar.Item>
                <Button color="blue" size="sm" className="ml-2">Pro membership</Button>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}



export default ActualSidebar;