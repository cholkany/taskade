import { FC } from "react"
import InviteModal from "./InviteModal";
import { Avatar, Tabs } from "flowbite-react";
import { HiCalendar, HiViewBoards, HiViewGrid, HiViewList } from "react-icons/hi";
import KanbanBoard from "./KanbanBoard";

//Types
interface projectProps {
    project: string
}
const Project: FC<projectProps> = function ({project}) {
    return(
        <div className="pr-10 ">
            <section>
                <div className="flex flex-row items-left justify-left">
                    <div className="bg-red-500 rounded-full"></div>
                    <h1 className="ml-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{project}</h1>
                </div>
                <div className="w-full">
                    <p className="mb-6 text-base leading-relaxed text-gray-500 dark:text-gray-4000">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </div>
                <div className="flex flex-row items-left justify-left">
                    {}
                    <div className="flex -space-x-4 rtl:space-x-reverse mr-4">
                        <Avatar
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded
                        />
                        <Avatar
                            placeholder="0"
                            rounded
                        />
                        
                    </div>
                    <InviteModal/>
                </div>
            </section>
            <section className="mt-10 w-full">
                <Tabs.Group aria-label="Tabs with icons" style="underline">
                    <Tabs.Item active title="Board" icon={HiViewGrid}>
                        <KanbanBoard/>
                    </Tabs.Item>
                    <Tabs.Item title="List" icon={HiViewList}>
                        List
                    </Tabs.Item>
                    <Tabs.Item title="Table" icon={HiViewBoards}>
                        Table
                    </Tabs.Item>
                    <Tabs.Item title="Calendar" icon={HiCalendar}>
                        Calendar
                    </Tabs.Item>
                </Tabs.Group>
            </section>
        </div>
    )
}

export default Project;