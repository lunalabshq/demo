import type React from "react"
import {Badge} from "lunalabs-ui"
import {GitBranch, Paintbrush, Store} from "lucide-react"

export interface Topic {
    name: string
    badge: React.FC
}

export const MarketingBadge = () => {
    return (
        <Badge className={"bg-violet-500/10 border-violet-500/20 text-violet-500"} title={"Marketing"} icon={<Store size={12}/>}/>
    )
}

export const DesignBadge = () => {
    return (
        <Badge className={"bg-blue-500/10 border-blue-500/20 text-blue-500"} title={"Design"} icon={<Paintbrush size={12}/>}/>
    )
}

export const DevelopmentBadge = () => {
    return (
        <Badge className={"bg-green-500/10 border-green-500/20 text-green-700"} title={"Development"} icon={<GitBranch size={12}/>}/>
    )
}

export const allTopics: Topic[] = [
    { name: 'Marketing', badge: MarketingBadge },
    { name: 'Design', badge: DesignBadge },
    { name: 'Development', badge: DevelopmentBadge }
]

export const TopicBadge: React.FC<{ topicName: string }> = ({ topicName }) => {
    const topic = allTopics.find((t) => t.name === topicName)
    if (!topic) return null

    const TopicComponent = topic.badge
    return <TopicComponent />
}