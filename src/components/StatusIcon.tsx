import type React from "react"

export interface Status {
    name: string
    color: string
    icon: React.FC
}


export const NotStartedIcon: React.FC = () => {
    return (
        // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle
                cx="7"
                cy="7"
                r="6"
                fill="none"
                stroke="#e2e2e2"
                strokeWidth="2"
                strokeDasharray="3.14 0"
                strokeDashoffset="-0.7"
            />
            <circle
                className="progress"
                cx="7"
                cy="7"
                r="2"
                fill="none"
                stroke="#e2e2e2"
                strokeWidth="4"
                strokeDasharray="0 100"
                strokeDashoffset="0"
                transform="rotate(-90 7 7)"
            />
        </svg>
    )
}

export const InProgressIcon: React.FC = () => {
    return (
        // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle
                cx="7"
                cy="7"
                r="6"
                fill="none"
                stroke="#facc15"
                strokeWidth="2"
                strokeDasharray="3.14 0"
                strokeDashoffset="-0.7"
            />
            <circle
                className="progress"
                cx="7"
                cy="7"
                r="2"
                fill="none"
                stroke="#facc15"
                strokeWidth="4"
                strokeDasharray="2.0839231268812295 100"
                strokeDashoffset="0"
                transform="rotate(-90 7 7)"
            />
        </svg>
    )
}

export const FinishedIcon: React.FC = () => {
    return (
        // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="7" fill="#0373fc" />
            <path
                d="M4.5 7L6 8.5L9.5 5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export const allStatus: Status[] = [
    { name: 'In Progress', color: '#0ea5e9', icon: InProgressIcon },
    { name: 'Not Started', color: '#f97316', icon: NotStartedIcon },
    { name: 'Finished', color: '#ec4899', icon: FinishedIcon }
]

export const StatusIcon: React.FC<{ statusName: string }> = ({ statusName }) => {
    const currentStatus = allStatus.find((s) => s.name === statusName)
    if (!currentStatus) return null

    const IconComponent = currentStatus.icon
    return <IconComponent />
}