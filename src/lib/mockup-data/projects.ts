
export interface Project {
    id: number
    title: string
    description: string
    url: string
    status: string
    deadline: string
    topic: string
    priority: string
}

export const projects: Project[] = [
    {
        id: 0,
        title: "Market Research",
        description: "Market research and analysis for a new product.",
        url: "",
        status: "Finished",
        deadline: "2025-04-22",
        topic: "Marketing",
        priority: "High"
    },
    {
        id: 1,
        title: "Dashboard UI Design",
        description: "Designing a new user interface for the mobile app.",
        url: "",
        status: "In Progress",
        deadline: "2025-07-31",
        topic: "Design",
        priority: "Medium"
    },
    {
        id: 2,
        title: "App Development",
        description: "Current state of development.",
        url: "",
        status: "Not Started",
        deadline: "2025-06-12",
        topic: "Development",
        priority: "Low"
    },
    {
        id: 3,
        title: "Backend Testing",
        description: "Testing the new features of the app.",
        url: "",
        status: "In Progress",
        deadline: "2025-08-15",
        topic: "Development",
        priority: "Medium"
    },
    {
        id: 4,
        title: "Marketing Campaign",
        description: "Marketing campaign for the new product.",
        url: "",
        status: "Not Started",
        deadline: "2025-09-30",
        topic: "Marketing",
        priority: "Medium"
    }
]