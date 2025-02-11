import { isMacOs } from "react-device-detect"
import React from "react"

type KeyboardShortcutProps = {
    keyString: string
}

function KeyboardShortcut({keyString}: KeyboardShortcutProps) {

    const getMetaKey = () => {
        if (isMacOs) return '⌘ '
        return'Ctrl + '
    }

    return <span className={"px-1 rounded-sm bg-tertiary text-tertiary"}>{getMetaKey() + keyString}</span>
}

export  { KeyboardShortcut }