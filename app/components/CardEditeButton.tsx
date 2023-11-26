import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react"
import { FC, useState } from "react"
import { HiDotsVertical } from "react-icons/hi"

interface CardEditBtnProps {
    className?: string
}

const CardEditBtn: FC<CardEditBtnProps> = function ({className}) {
    const [isOpen,setOpen] = useState(false);
    return(
        <>
            <Button size={"xs"} color="" className={className} onClick={() => setOpen(true)}><HiDotsVertical/></Button>
            <Modal show={isOpen} onClose={() => setOpen(false)}>
                    <Modal.Header className="flex justify-between">Edit Task</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Unnamed.."
                                required
                            />
                            <Textarea
                                id="description"
                                placeholder="Description...."
                                cols={16}
                            />
                        </div>
                        <div className="mt-4">
                        
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="primary" onClick={() => setOpen(false)}>Invite</Button>
                        <Button color="outline" onClick={() => setOpen(false)}>Decline</Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default CardEditBtn;