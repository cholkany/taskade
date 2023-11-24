import { Avatar, Card } from "flowbite-react";

interface KanbanCardProps {
    
}

const KanbanCard = (props: KanbanCardProps) => {
    return (
        <div className="max-w-sm" draggable>
            <Card>
                <h5 className="text-md mb-3 text-gray-700">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so
                    far, in reverse chronological order.
                </p>
                <div className="flex flex-row space-x-2">
                    <div className="">
                    <div className="flex flex-row items-left justify-left">
                        <div className="flex -space-x-4 rtl:space-x-reverse mr-4">
                            <Avatar
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded
                                size={"xs"}
                            />
                            <Avatar
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded
                                size={"xs"}
                            />
                            <Avatar
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded
                                size={"xs"}
                            />
                        </div>
                    </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default KanbanCard;

const KanbanCar = (props: KanbanCardProps) => {
    return (
        <div className="p-2 rounded shadow-sm border-gray-100 border-2">
            <h3 className="text-sm mb-3 text-gray-700">Social media</h3>
            <p className="bg-red-100 text-xs w-max p-1 rounded mr-2 text-gray-700">To-do</p>
            <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                    <a href="#" className="text-xs text-gray-500">Sophie Worso</a>
                </div>
                <p className="text-xs text-gray-500 mt-2">2</p>
        </div>
    )
}