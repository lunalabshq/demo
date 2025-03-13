import type React from "react"

export interface Priority {
    name: string
    badge: React.FC
}

export const LowBadge = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-label="Low Priority"
            role="img"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="1.5" y="8" width="3" height="6" rx="1"/>
            <rect x="6.5" y="5" width="3" height="9" rx="1" fillOpacity="0.4"/>
            <rect x="11.5" y="2" width="3" height="12" rx="1" fillOpacity="0.4"/>
        </svg>
    )
}

export const MediumBadge = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-label="Medium Priority"
            role="img"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="1.5" y="8" width="3" height="6" rx="1"/>
            <rect x="6.5" y="5" width="3" height="9" rx="1"/>
            <rect x="11.5" y="2" width="3" height="12" rx="1" fillOpacity="0.4"/>
        </svg>
    )
}

export const HighBadge = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-label="High Priority"
            role="img"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="1.5" y="8" width="3" height="6" rx="1"/>
            <rect x="6.5" y="5" width="3" height="9" rx="1"/>
            <rect x="11.5" y="2" width="3" height="12" rx="1"/>
        </svg>
    )
}

export const allPriorities: Priority[] = [
    { name: 'Low', badge: LowBadge },
    { name: 'Medium', badge: MediumBadge },
    { name: 'High', badge: HighBadge }
]

export const PriorityBadge: React.FC<{ priorityName: string }> = ({ priorityName }) => {
    const priority = allPriorities.find((t) => t.name === priorityName)
    if (!priority) return null

    const PriorityComponent = priority.badge
    return <PriorityComponent />
}