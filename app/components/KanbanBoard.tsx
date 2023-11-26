import { Button } from "flowbite-react";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import KanbanCard from "./KanbanCard";
import AddTaskCard from "./AddTaskCard";
import { useEffect, useRef } from "react";

interface KanbanBoardProps {
   
}

interface BoardProps{}




function addRandomBackgroundClass(element: HTMLElement): void {
    const backgroundClasses: string[] = [
      'bg-red-100',
      'bg-blue-100',
      'bg-green-100',
      'bg-yellow-100',
      'bg-purple-100',
      'bg-pink-100',
      'bg-orange-100',
      'bg-teal-100',
      'bg-gray-100',
      'bg-indigo-100',
      'bg-lime-100',
      'bg-fuchsia-100',
    ];
  
    const randomIndex: number = Math.floor(Math.random() * backgroundClasses.length);
    const randomClass: string = backgroundClasses[randomIndex];
  
    element.classList.add(randomClass);
  }
  
  function useRandomBackgroundClass(ref: React.RefObject<HTMLElement>): void {
    useEffect(() => {
      if (ref.current) {
        addRandomBackgroundClass(ref.current);
      }
    }, [ref]);
  }

export default function KanbanBoard(props: KanbanBoardProps) {

    return (
        <div className="mt-1">
            <div className="grid grid-cols-3 grid-rows-1 gap-1 w-full bg-slate-400">
                {/* Kanban Board */}
                <Board/>
                <Board/>
                <Board/>
                {/* Add Board */}
                <div className="bg-gray rounded px-2">
                    <div className="flex flex-row items-center justify-center text-gray-300 mt-2 px-1">
                        <Button size={"xl"} color="gray" className="w-full mt-0"><HiPlus/> Add Board</Button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

function Board(props: BoardProps): JSX.Element{
    const elementRef = useRef<HTMLHeadingElement>(null);
    useRandomBackgroundClass(elementRef);
    return (
        <div className="bg-white rounded px-2 py-2">
            {/* board category header */}
            <div className="flex flex-row justify-between items-center mb-2 mx-1">
                <div className="flex items-center">
                <h2 ref={elementRef} className="text-sm w-max px-1 rounded mr-2 text-gray-700">In progress</h2>
                <p className="text-gray-400 text-sm">3</p>
                </div>
                <div className="flex items-center text-gray-300">
                    <AddTaskCard/>
                    <Button color="transparent"><HiDotsVertical/></Button>
                </div>
            </div>
            {/* board card */}
            <div className="grid grid-rows-2 gap-2">
                { [1,2,3].map((i) => <KanbanCard key={i}/>) }
            </div>
            <div className="flex flex-row items-center justify-center text-gray-300 mt-2 px-1">
                <AddTaskCard label="New"/>
            </div>
        </div>
    )
}