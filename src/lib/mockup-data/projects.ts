
export interface Project {
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
        title: "Market Research",
        description: "Market research and analysis for a new product.",
        url: "",
        status: "Finished",
        deadline: "2025-04-22",
        topic: "Marketing",
        priority: "High"
    },
    {
        title: "Dashboard UI Design",
        description: "Designing a new user interface for the mobile app.",
        url: "",
        status: "In Progress",
        deadline: "2025-07-31",
        topic: "Design",
        priority: "Medium"
    },
    {
        title: "App Development",
        description: "Current state of development.",
        url: "",
        status: "Not Started",
        deadline: "2025-06-12",
        topic: "Development",
        priority: "Low"
    },
    {
        title: "Backend Testing",
        description: "Testing the new features of the app.",
        url: "",
        status: "In Progress",
        deadline: "2025-08-15",
        topic: "Development",
        priority: "Medium"
    },
    {
        title: "Marketing Campaign",
        description: "Marketing campaign for the new product.",
        url: "",
        status: "Not Started",
        deadline: "2025-09-30",
        topic: "Marketing",
        priority: "Medium"
    }
]