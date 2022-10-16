
type Task = {
    taskCategory: string | number, 
    description: string, 
    complete: boolean, 
    date: Date
}

const newTask: Task = {
    taskCategory: "bills",
    description: "pay HVAC service charge",
    complete: false,
    date: new Date()
}


