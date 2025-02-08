import {type RefObject, useEffect, useState} from "react"

function useDropdownPosition(menuRef: RefObject<HTMLDivElement | null>) {
    const [position, setPosition] = useState("left")

    if (!menuRef) return

    useEffect(() => {
        if (menuRef.current) {
            const rect = menuRef.current.getBoundingClientRect()
            const spaceOnRight = window.innerWidth - rect.right
            setPosition(spaceOnRight < 300 ? "right" : "left")
        }
    }, [menuRef])

    return position
}

export default useDropdownPosition