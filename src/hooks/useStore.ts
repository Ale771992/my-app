import { create } from 'zustand'

interface Task {
    id: number,
    title: string,
    completed: boolean
}

interface Store {
    tasks: Task[];
    addTask: (task: Task) => void;
    setTasks: (tasks: Task[]) => void;
}

export const useStore = create<Store>((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    setTasks: (tasks) => set({ tasks })
}))