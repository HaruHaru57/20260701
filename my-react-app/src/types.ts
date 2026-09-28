export type FilterType = "all" | "active" | "completed";

export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: string;
}