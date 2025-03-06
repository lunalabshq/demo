import {ProjectBarChart} from "@/components/ProjectBarChart"
import {AssignedTasks} from "@/components/AssignedTasks"

export default function Dashboard() {
    return (
        <div className={"h-full w-full flex flex-col gap-8"}>

            <div className={"flex flex-row w-full h-full gap-8"}>
                <div className={"h-full w-full bg-tertiary rounded-md"}>

                </div>
                <AssignedTasks/>
            </div>
            <ProjectBarChart/>
        </div>
    )
}