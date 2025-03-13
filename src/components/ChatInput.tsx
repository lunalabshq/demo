import {Button, Input} from "lunalabs-ui"
import {Paperclip, Send} from "lucide-react"

function ChatInput() {
    return (
        <div className={"flex w-max gap-2 bg-tertiary border border-main/20 p-2 rounded-md shadow-md"}>
            <Input className="pl-0 text-primary h-8 w-[260px] focus:w-[380px] lg:w-[320px] lg:focus:w-[460px] transition-all border-0 bg-tertiary shadow-none focus-visible:ring-0" placeholder="Send a message..."/>
            <Button
                className="size-8 bg-tertiary shadow-none rounded-md p-0"
                variant="ghost"
            >
                <Paperclip size={18} className={""}/>
            </Button>
            <Button
                className="size-8 from-tertiary to-white/10 bg-gradient-to-tr shadow-none rounded-md p-0"
                type="submit"
            >
                <Send size={18} className={"-mx-0.5 -mb-0.5"}/>
            </Button>
        </div>
    )
}

export { ChatInput }