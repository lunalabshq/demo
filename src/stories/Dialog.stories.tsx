import type {Meta, StoryObj} from "@storybook/react";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/Dialog"
import Button from "@/components/ui/Button";
import {useState} from "react"

const meta: Meta<typeof Dialog> = {
    title: "Components/Dialog",
    component: Dialog,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button variant="brand" onClick={() => setIsOpen(true)}>Edit Profile</Button>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="name" className="text-right">
                                    Name
                                </label>
                                <input id="name" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="username" className="text-right">
                                    Username
                                </label>
                                <input id="username" value="@peduarte" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="primary" type={"submit"}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
        )
    }
};