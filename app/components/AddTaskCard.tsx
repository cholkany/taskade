import { Button, ButtonProps, Label, Modal, TextInput, Textarea } from "flowbite-react"
import { FC, useState } from "react"
import { HiDotsVertical, HiPlus } from "react-icons/hi"

interface AddTaskCardProps{
    className?: string,
    label?: string,
    size?: ButtonProps["size"],
}



const AddTaskCard: FC<AddTaskCardProps> = function ({className,label,size}) {
    const [isOpen,setOpen] = useState(false);
    return(
        <>
            <Button  size={size} color="" className={`${className} space-x-1`} onClick={() => setOpen(true)}><HiPlus/> {label}</Button>
            <Modal show={isOpen} onClose={() => setOpen(false)}>
                    <Modal.Header className="flex justify-between">New Task</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <Label htmlFor="title">Title</Label>
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Unnamed.."
                                required
                            />
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Description...."
                                cols={16}
                            />
                        </div>
                        <div className="mt-4 a">
                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="gray" onClick={() => setOpen(false)}>Invite</Button>
                        <Button color="outline" onClick={() => setOpen(false)}>Decline</Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddTaskCard;