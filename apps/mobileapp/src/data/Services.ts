import Assignees from "./Assignees"
import Patients from "./Patients"
import Service_List from "./ServiceList"
import Task_List from "./TaskList"

const Services = [
    {
        id: 0,
        service: Service_List[14],
        patient: Patients[0],
        assignee: Assignees[0],
        date: new Date(),
        tasks: Task_List.slice(0, 13)
    },
    {
        id: 1,
        service: Service_List[0],
        patient: Patients[0],
        assignee: Assignees[0],
        date: new Date(),
        tasks: Task_List.slice(0, 8)
    },
    {
        id: 2,
        service: Service_List[1],
        patient: Patients[0],
        assignee: Assignees[0],
        date: new Date(),
        tasks: Task_List.slice(0, 5)
    },
    {
        id: 3,
        service: Service_List[2],
        patient: Patients[0],
        assignee: Assignees[0],
        date: new Date(),
        tasks: Task_List.slice(7, 9)
    },
    {
        id: 4,
        service: Service_List[3],
        patient: Patients[0],
        assignee: Assignees[0],
        date: new Date(),
        tasks: Task_List.slice(5, 10)
    }
]

export default Services