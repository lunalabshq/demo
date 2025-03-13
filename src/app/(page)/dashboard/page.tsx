import {ProjectBarChart} from "@/components/ProjectBarChart"
import {AssignedProjects} from "@/components/AssignedProjects"

export default function Dashboard() {
    return (
        <div className={"h-full w-full flex flex-col gap-8"}>
            <div className={"flex flex-row w-full h-max gap-8"}>
                <div className={"grid grid-rows-2 grid-cols-2 h-full w-full bg-tertiary rounded-md p-4 gap-4 border border-main/20"}>

                </div>
                <AssignedProjects/>
            </div>
            <ProjectBarChart/>
        </div>
    )
}