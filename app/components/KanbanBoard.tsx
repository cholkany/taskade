import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import KanbanCard from "./KanbanCard";

interface KanbanBoardProps {
   
}

interface BoardProps{}

export default function KanbanBoard(props: KanbanBoardProps) {
    return (
        <div className="pr-10 mt-1">
            <div className="grid grid-cols-3 gap-1">
                {/* Kanban Board */}
                <div className="bg-white rounded px-2 py-2">
                    {/* board category header */}
                    <div className="flex flex-row justify-between items-center mb-2 mx-1">
                        <div className="flex items-center">
                        <h2 className="bg-red-100 text-sm w-max px-1 rounded mr-2 text-gray-700">To-do</h2>
                        <p className="text-gray-400 text-sm">3</p>
                        </div>
                        <div className="flex items-center text-gray-300">
                        <p className="mr-2 text-2xl">---</p>
                        <p className="text-2xl">+</p>
                        </div>
                    </div>
                    {/* board card */}
                    <div className="grid grid-rows-2 gap-2">
                        { [1,2,3].map((i) => <KanbanCard key={i}/>) }
                    </div>
                    <div className="flex flex-row items-center text-gray-300 mt-2 px-1">
                        <p className="rounded mr-2 text-2xl">+</p>
                        <p className="pt-1 rounded text-sm">New</p>
                    </div>
                </div>
                {/* Kanban Board */}
                <div className="bg-white rounded px-2 py-2">
                    {/* board category header */}
                    <div className="flex flex-row justify-between items-center mb-2 mx-1">
                        <div className="flex items-center">
                        <h2 className="bg-red-100 text-sm w-max px-1 rounded mr-2 text-gray-700">In progress</h2>
                        <p className="text-gray-400 text-sm">3</p>
                        </div>
                        <div className="flex items-center text-gray-300">
                        <p className="mr-2 text-2xl">---</p>
                        <p className="text-2xl">+</p>
                        </div>
                    </div>
                    {/* board card */}
                    <div className="grid grid-rows-2 gap-2">
                        { [1,2,3].map((i) => <KanbanCard key={i}/>) }
                    </div>
                    <div className="flex flex-row items-center text-gray-300 mt-2 px-1">
                        <p className="rounded mr-2 text-2xl">+</p>
                        <p className="pt-1 rounded text-sm">New</p>
                    </div>
                </div>
                {/* Add Board */}
                <div className="bg-white rounded px-2 py-2">
                    <div className="flex flex-row items-center justify-center text-gray-300 mt-2 px-1">
                        <Button color="gray"><HiPlus/> Add Board</Button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

function Board(props: BoardProps): JSX.Element{
    return (
        <div className="bg-white rounded px-2 py-2">
            {/* board category header */}
            <div className="flex flex-row justify-between items-center mb-2 mx-1">
                <div className="flex items-center">
                <h2 className="bg-red-100 text-sm w-max px-1 rounded mr-2 text-gray-700">In progress</h2>
                <p className="text-gray-400 text-sm">3</p>
                </div>
                <div className="flex items-center text-gray-300">
                <p className="mr-2 text-2xl">---</p>
                <p className="text-2xl">+</p>
                </div>
            </div>
            {/* board card */}
            <div className="grid grid-rows-2 gap-2">
                { [1,2,3].map((i) => <KanbanCard key={i}/>) }
            </div>
            <div className="flex flex-row items-center text-gray-300 mt-2 px-1">
                <p className="rounded mr-2 text-2xl">+</p>
                <p className="pt-1 rounded text-sm">New</p>
            </div>
        </div>
    )
}