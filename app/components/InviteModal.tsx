import { Button, ListGroup, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiPlus, HiUserCircle } from "react-icons/hi";

const InviteModal = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Button color="neutral" outline onClick={() => setOpen(true)}><HiPlus/> Invite</Button>
            <Modal show={isOpen} onClose={() => setOpen(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <TextInput
                            id="search"
                            type="email"
                            placeholder="email@example.com"
                            required
                        />
                    </div>
                    <div className="mt-4">
                    <ListGroup>
                        <ListGroup.Item active icon={HiUserCircle}>Profile</ListGroup.Item>
                        <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
                        <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
                        <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
                    </ListGroup>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpen(false)}>Invite</Button>
                    <Button color="gray" onClick={() => setOpen(false)}>Decline</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InviteModal;